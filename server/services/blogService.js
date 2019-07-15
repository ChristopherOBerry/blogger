import mongoose from 'mongoose'


let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
    title: {type:String, maxlength:60, required:true},
    slug: {type: String, lowercase: true, unique: true},
    summary: {type: String, maxlength:100},
    author: {type: String, required:true},
    img:{type:String},
    body: {type: String},
    tags: [{type: String}]

}, {timestamps: true})

export default mongoose.model('Blog', _schema)