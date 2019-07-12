import mongoose from 'mongoose'

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