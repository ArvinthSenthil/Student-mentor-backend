import express from 'express'
import {
  createMentors,
  deleteAllMentor,
  deleteMentorById,
  editMentorById,
  getAllMentors,
  getMentorById,
} from '../mentorhelper.js'

const routes = express.Router()

routes.get('/', async function (req, res) {
  const mentors = await getAllMentors()

  res.send(mentors)
})

routes.get('/:id', async function (req, res) {
  // console.log(req.params)
  const { id } = req.params

  const mentor = await getMentorById(id)
  mentor
    ? res.send(mentor)
    : res.status(404).send({ message: 'Not such mentor found ' })
})

routes.delete('/:id', async function (req, res) {
  // console.log(req.params)
  const { id } = req.params

  const mentor = await deleteMentorById(id)
  res.send(mentor)
})
routes.delete('/', async function (req, res) {
  const mentor = await deleteAllMentor()
  res.send(mentor)
})

routes.put('/:id', async function (req, res) {
  // console.log(req.params)
  const { id } = req.params
  const updateData = req.body

  const mentor = await editMentorById(id, updateData)
  res.send(mentor)
})

routes.post('/', async function (request, response) {
  const data = request.body
  // console.log(data);
  const result = await createMentors(data)
  response.send(result)
})

export const mentorRoutes = routes
