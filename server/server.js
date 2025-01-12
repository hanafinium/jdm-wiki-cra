import "./loadEnvironment.js";
import "./firebaseConfig.js";
import express from "express";
import cors from "cors";
import path from "path";
import posts from "./routes/posts.js";
import users from "./routes/users.js";
import db from "./db/connection.js";

const PORT = process.env.PORT || 5000; //changed from 3000 to test proxying
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", users);
app.use("/api/posts", posts);

/*app.get("/api", async (req, res) => {
  try {
    const data = await db
      .collection("japanese-cars")
      .find({})
      .sort({ date: -1 })
      .limit(5)
      .toArray();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send("Error");
  }
});*/

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
  if (process.env.ATLAS_URI) {
    console.log("env variable set");
  } else {
    console.log("env variable not set");
  }
});
