import colors from 'colors';
import mongoose from "mongoose";
import { exit } from 'node:process';

export const connectDB = async () => {  
    try {
        const {connection} = await mongoose.connect(process.env.DB_URL)
        const url = `${connection.host}: ${connection.port}`
        console.log(colors.yellow.bold(`DB connected: ${url}`))
        
    } catch (error) {
        console.log(colors.red.bold(`Error to connect DB: ${error.message}`))
        exit(1)
        
    }
}