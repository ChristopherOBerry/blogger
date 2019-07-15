import express from 'express'
import _blogService from '../services/blogService.js'

export default class BlogController {
    async createBlog (req, res, next){
        try {
            let blog = await _blogService.find(req.body)
            res.send(blog)
        } catch (error) {
            next(err)
        }
    }
    async getAllBlogs(req, res, next){
        try {
            let blogs = await _blogService.find()
            res.send(blogs)
        } catch (error) {
            next(err)
        }
    }



    constructor(){
        this.router = express.Router()
        .get('',this.getAllBlogs)
        .post('', this.createBlog)
        
    }
}