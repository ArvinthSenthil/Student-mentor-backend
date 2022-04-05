import { ObjectId } from 'mongodb'
import { client } from './index.js'

export async function createMentors(data) {
  return await client.db('task').collection('mentors').insertMany(data)
}

export async function getAllMentors() {
  return await client.db('task').collection('mentors').find({}).toArray()
}

export async function getMentorById(id) {
  return await client
    .db('task')
    .collection('mentors')
    .findOne({ _id: ObjectId(id) })
}

export async function editMentorById(id, updateData) {
  return await client
    .db('task')
    .collection('mentors')
    .updateOne({ _id: ObjectId(id) }, { $set: updateData })
}

export async function deleteMentorById(id) {
  return await client
    .db('task')
    .collection('mentors')
    .deleteOne({ _id: ObjectId(id) })
}

export async function deleteAllMentor() {
  return await client.db('task').collection('mentors').deleteMany({})
}
