import { Column, CreateDateColumn, DeleteDateColumn, Entity, ObjectId, ObjectIdColumn, UpdateDateColumn } from 'typeorm'


@Entity('Student')

export class Student {
    @ObjectIdColumn()
    _id: ObjectId

    @Column()
    name: string

    @Column()
    age: number

    @Column()
    sex: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @DeleteDateColumn()
    deleted_at: Date

    constructor(_id: ObjectId, name: string, age: number, sex: string, created_at: Date, updated_at: Date, deleted_at: Date) {
        this._id = _id;
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.deleted_at = deleted_at;
    }
}