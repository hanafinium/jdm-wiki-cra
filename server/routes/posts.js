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
  res.send(data).status(200).end();
});

router.post("/add", async (req, res) => {
  //upsert can possibly be used to overwrite existing entries, check mongodb docs for usage and details.
  const newPost = req.body;
  newPost.date = Date.now();
  const result = await db.collection("japanese-cars").insertOne(newPost);
  res.send(result).status(201).end();
});

router.get("/:brandId", async (req, res) => {
  const maker = req.params.brandId;
  const data = await db
    .collection("japanese-cars")
    .find({ maker: maker }).sort({model: 1})
    .toArray();
  res.send(data).status(200).end();
});

router.get("/:brandId/:modelId", async (req, res) => {
  const maker = req.params.brandId;
  const model = req.params.modelId;
  const data = await db
    .collection("japanese-cars")
    .findOne({ maker: maker, model: model });
  res.send(data).status(200).end();
});

export default router;
