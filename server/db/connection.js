import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

let connection;
try {
  connection = await client.connect();
} catch (e) {
  console.error(e);
}

let db = connection.db("cars-data");

export default db;
