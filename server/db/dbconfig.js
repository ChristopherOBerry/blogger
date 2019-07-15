import mongoose from 'mongoose'

const connectionString = 'mongodb+srv://Student:Student@cluster0-dz76e.mongodb.net/Blogger?retryWrites=true&w=majority'

let connection = mongoose.connection


mongoose.connect(connectionString, {
    useNewUrlParser: true
})

connection.on ("error", err => {
    console.error('[DATABASE ERROR]:',err)
})
connection.once("open", () =>{
    console.log("Connected to DB")
})   