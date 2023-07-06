import { StudentRepository } from "./student.repository";
import { Request, Response } from 'express'

export class StudentController {
    private studentRepository: StudentRepository
    constructor() {
        this.studentRepository = new StudentRepository()
    }

    getStudent = async (req: Request, res: Response) => {
        try {
            const data = await this.studentRepository.getStudent()
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({ error: error })
        }

    }

    createStudent = async (req: Request, res: Response) => {
        try {
            const data = await this.studentRepository.createStudent({ ...req.body })
            res.status(201).json(data)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }

    findStudent = async (req: Request, res: Response) => {
        try {
            const data = await this.studentRepository.findStudent(req.params.id)
            return res.status(data.status).json(data)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }


}