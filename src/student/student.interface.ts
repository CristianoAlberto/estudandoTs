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
