import { IMessage, IStudent, user } from './student.interface'
import { AppDataSource } from '../db'
import { Student } from './student.entity'
import { ObjectId } from 'mongodb'

export class StudentRepository implements user {

    async getStudent(): Promise<IMessage<IStudent[]>> {
        const data = await AppDataSource.getRepository(Student).find()
        if (data) return { status: 200, message: 'Sucesso', data: data }
        return { status: 404, message: 'Sem usuários' }
    }

    async createStudent(studenData: Student): Promise<IStudent> {
        const data = await AppDataSource.getRepository(Student).save(studenData)
        return data
    }
    async findStudent(id: string): Promise<IMessage<IStudent>> {
        const studentFind = await AppDataSource.getMongoRepository(Student).findOneBy({ _id: new ObjectId(id) })
        if (!studentFind) return { status: 404, message: 'Usuario não encontrado' }
        return { status: 200, message: 'Encontrado com sucesso', data: studentFind }
    }
    // async updateStudent(studenData: Student): Promise<IStudent> {
    //     const data = await AppDataSource.getRepository(Student).update(studenData)
    //     return data
    // }

}