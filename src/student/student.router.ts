import { Router } from 'express'
import { StudentController } from './student.controller'

const router = Router()
const controller = new StudentController()

router.get('/getStudent', controller.getStudent)
router.post('/createStudent', controller.createStudent)
router.get('/findStudent/:id', controller.findStudent)

export { router }