// import "reflect-metadata"
import "dotenv/config"
import express from 'express';
import { AppDataSource } from "./db";
import { router as student } from "./student/student.router";

const app = express();

app.use(express())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.listen(3000, () => {
    console.log('Listening to port 3000')
})

AppDataSource.initialize()
    .then(() => {
        console.log('Conectado com sucesso a bd online')
    }).catch(() => {
        console.log('Erro ao iniciar a bd ')
    })

app.use('/student', student)