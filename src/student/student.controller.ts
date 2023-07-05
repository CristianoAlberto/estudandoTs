import { StudentRepository } from "./student.repository";
import { Request, Response } from 'express'

export class StudentController {
    private studentRepository: StudentRepository
    constructor() {
        this.studentRepository = new StudentRepository()
    }

    async getStudent(req: Request, res: Response) {
        try {
            const data = await this.studentRepository.getStudent()
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({ error: error })
        }

    }

    async createStudent(req: Request, res: Response) {
        try {
            const data = await this.studentRepository.createStudent({ ...req.body })
            res.status(201).json(data)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
}