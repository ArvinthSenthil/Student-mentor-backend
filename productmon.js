import { ObjectId } from "mongodb";
import { client } from "./index.js";

export async function createProducts(data) {
  return await client.db("Capstone").collection("Ecart").insertMany(data);
}

export async function getAllProducts() {
  return await client.db("Capstone").collection("Ecart").find({}).toArray();
}

export async function getProductById(id) {
  return await client
    .db("Capstone")
    .collection("Ecart")
    .findOne({ _id: ObjectId(id) });
}

export async function editProductById(id, updateData) {
  return await client
    .db("Capstone")
    .collection("Ecart")
    .updateOne({ _id: ObjectId(id) }, { $set: updateData });
}

export async function deleteProductById(id) {
  return await client
    .db("Capstone")
    .collection("Ecart")
    .deleteOne({ _id: ObjectId(id) });
}

export async function deleteAllProduct() {
  return await client.db("Capstone").collection("Ecart").deleteMany({});
}
