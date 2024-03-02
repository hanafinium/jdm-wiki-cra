import express from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";

const router = express.Router();

// router.get("/", async (req, res) => {
//   const data = await db
//     .collection("japanese-cars")
//     .find({})
//     .limit(10)
//     .toArray();
//   res.send(data).status(200).end();
// });

router.post("/add", async (req, res) => {
  //upsert can possibly be used to overwrite existing entries, check mongodb docs for usage and details.
  const newPost = req.body;
  newPost.date = Date.now();
  const result = await db.collection("japanese-cars").insertOne(newPost);
  res.send(result).status(201);
});

router.get("/:brandId", async (req, res) => {
  const maker = req.params.brandId;
  const data = await db
    .collection("japanese-cars")
    .find({ maker: maker })
    .sort({ model: 1 })
    .toArray();
  res.send(data).status(200);
});

router.get("/:brandId/:modelId", async (req, res) => {
  const maker = req.params.brandId;
  const model = req.params.modelId;
  const data = await db
    .collection("japanese-cars")
    .findOne({ maker: maker, model: model });
  res.send(data).status(200);
});

// router.get("/:brandId/:modelId/:engineCode", async (req, res) => {
//   const engine = req.params.engineCode;
//   const data = await db
//     .collection("japanese-cars")
//     .findOne({ engine: { $elemMatch: { engineCode: engine } } });
//   res.send(data).status(200);
// });

// router.put("/:brandId/:modelId", async (req, res) => {
//UNABLE TO RUN -- NEED A WAY TO FILTER BY ENGINE CODE, IT CURRENTLY FILTERS BY THE ENTIRE OBJECT
// const options = { upsert: false };
// const filter = { engineCode: req.body.engine[0].engineCode };
// const update = { $set: req.body };
// const response = await db
//   .collection("japanese-cars")
//   // .findOne(filter)
//   .updateOne(filter, update, options);
// res.send(response).status(200);
// });

// router.delete("/:brandId/:modelId", async (req, res) => {
//   //NOT WORKING
//   const id = await req.body.id;
//   const response = await db
//     .collection("japanese-cars")
//     .deleteOne({ _id: new ObjectId(id) }); //CONFIRM THIS METHOD -- ID RETURNS AS UNDEFINED
//   res.send(response).status(200);
// });

export default router;
