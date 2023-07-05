import { IStudent } from './student.interface'
import { AppDataSource } from '../db'
import { Student } from './student.entity'

export class StudentRepository {

    async getStudent(): Promise<IStudent[]> {
        const data = await AppDataSource.getRepository(Student).find()
        return data
    }

    async createStudent(studenData: Student): Promise<IStudent> {
        const data = await AppDataSource.getRepository(Student).save(studenData)
        return data
    }

}