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
  const newPost = req.body;
  console.log(newPost);
  newPost.date = new Date();
  const result = await db.collection("japanese-cars").insertOne(newPost);
  res.send(result).status(201).end();
});

router.get("/:brandId", async (req, res) => {
  const brand = req.params.brandId;
  const data = await db
    .collection("japanese-cars")
    .find({ brand: brand })
    .toArray();
  res.send(data).status(200).end();
});

router.get("/:brandId/:modelId", async (req, res) => {
  const brand = req.params.brandId;
  const model = req.params.modelId;
  const data = await db
    .collection("japanese-cars")
    .findOne({ brand: brand, model: model });
  res.send(data).status(200).end();
});

export default router;
