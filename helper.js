
import { ObjectId } from "mongodb";
import { client } from "./index.js";

export async function createStudents(data) {
    return await client.db("task").collection("students").insertMany(data);
}



export async function getAllStudents() {
    return await client.db("task").collection("students").find({}).toArray();
}

export async function getStudentById(id) {
    return await client.db("task").collection("students").findOne({ _id: ObjectId(id) });
}

export async function editStudentById(id, updateData) {
    return await client.db("task").collection("students").updateOne({ _id: ObjectId(id) }, { $set: updateData });
}

export async function deleteStudentById(id) {
    return await client.db("task").collection("students").deleteOne({ _id: ObjectId(id) });
}

export async function deleteAllStudent() {
    return await client.db("task").collection("students").deleteMany({});
}
