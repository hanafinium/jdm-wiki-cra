import express from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await db
    .collection("japanese-cars")
    .find({})
    .limit(10)
    .toArray();
  res.send(data).status(200);
});

export default router;
