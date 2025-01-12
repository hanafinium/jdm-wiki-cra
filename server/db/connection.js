import { MongoClient } from "mongodb";

//const connectionString = process.env.ATLAS_URI || "";
const connectionString = "mongodb+srv://mahmoud:xRn9BMPlWVIkVMS4@cluster0.7gu3g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(connectionString);

let connection;
try {
  connection = await client.connect();
} catch (e) {
  console.error(e);
}

let db = connection.db("cars-data");

export default db;
