import { ObjectId } from 'typeorm';

export interface IStudent {
    _id: ObjectId;
    name: string;
    age: number;
    sex: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}

export interface IMessage<T> {
    data?: T,
    status: number,
    message: string
}

export interface user {
    findStudent(id: string): Promise<IMessage<IStudent>>;
}