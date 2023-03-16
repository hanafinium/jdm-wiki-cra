import "./loadEnvironment.js";
import express from "express";
import cors from "cors";
import posts from "./routes/posts.js";
import db from "./db/connection.js";

const PORT = process.env.PORT || 5000; //changed from 3000 to test proxying
const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const data = await db
    .collection("japanese-cars")
    .find({})
    .sort({ date: -1 })
    .limit(5)
    .toArray();
  res.send(data).status(200).end();
});

app.use("/posts", posts);

//Error handling
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
  if (process.env.ATLAS_URI) {
    console.log("env variable set");
  } else {
    console.log("env variable not set");
  }
});
