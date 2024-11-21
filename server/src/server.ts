import colors from 'colors'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { createServer } from 'node:http'
import { Server } from 'socket.io'
import { connectDB } from './config/db'
import { archivedNewsRoutes } from './routes/archivedNews'
import { newNewsRoutes } from './routes/newNews'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())
app.disable('x-powered-by')
app.use(cors())


//Routes
app.use('/news/new', newNewsRoutes)
app.use('/news/archived', archivedNewsRoutes)

export const server = createServer(app)
export const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    }
})

app.set('io', io)
io.on('connection', ()=>{
    console.log(colors.bgMagenta.bold('user connected'))
})


