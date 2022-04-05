import express from 'express'
import {
  createStudents,
  deleteAllStudent,
  deleteStudentById,
  editStudentById,
  getAllStudents,
  getStudentById,
} from '../helper.js'

const routes = express.Router()

routes.get('/', async function (req, res) {
  const students = await getAllStudents()

  res.send(students)
})

routes.get('/:id', async function (req, res) {
  // console.log(req.params)
  const { id } = req.params

  const student = await getStudentById(id)
  student
    ? res.send(student)
    : res.status(404).send({ message: 'Not such student found ' })
})

routes.delete('/:id', async function (req, res) {
  // console.log(req.params)
  const { id } = req.params

  const student = await deleteStudentById(id)
  res.send(student)
})
routes.delete('/', async function (req, res) {
  const student = await deleteAllStudent()
  res.send(student)
})

routes.put('/:id', async function (req, res) {
  // console.log(req.params)
  const { id } = req.params
  const updateData = req.body

  const student = await editStudentById(id, updateData)
  res.send(student)
})

routes.post('/', async function (request, response) {
  const data = request.body
  // console.log(data);
  const result = await createStudents(data)
  response.send(result)
})

export const studentsRoutes = routes
