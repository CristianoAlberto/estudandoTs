import { DataSource } from "typeorm"
import { Student } from "../student/student.entity"

export const AppDataSource = new DataSource({
    type: 'mongodb',
    url: process.env.DB_URL,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    synchronize: true,
    logging: true,
    entities: [Student],
});