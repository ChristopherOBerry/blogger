import express from 'express'
import _blogService from '../services/BlogService.js'

export default class BlogController {
    async createBlog (req, res, next){
        try {
            let blog = await _blogService.create(req.body)
            res.send(blog)
        } catch (err) {
            next(err)
        }
    }
    async getAllBlogs(req, res, next){
        try {
            let blogs = await _blogService.find()
            res.send(blogs)
        } catch (err) {
            next(err)
        }
    }
    async getBlogBySlug (req,res,next){
        try {
            if(!req.query.slug){
                return next()
            }
            let blog = await _blogService.findOne({slug: req.query.slug})
            if (!blog){
                return res.status(400).send("No blog found")
            }
        } catch (err) {
            next(err)
        }
    }
    async getBlogsForTag (req,res,next){
        try {
            if (!req.query.tags){
                return next()
            }
            let blogs = await _blogService.find({tags: {$in: [req.query.tags]}})
            res.send(blogs)
        } catch (err) {
            next(err)
        }
    }
    async getBlog (req,res,next){
        try {
            let blog = await _blogService.findById(req.params.blogId)
            if (!blog){
                return res.status(400).send("No blog at this ID.")
            }
        } catch (err) {
            next(err)
        }
    }
    async editBlog (req,res,next){
        try {
            let editingBlog = await _blogService.findByIdAndUpdate(req.params.blogId, req.body, {new:true})
        } catch (err) {
            next(err)
        }
    }
    async deleteBlog(req,res,next){
        try {
            let deletingBlog = await _blogService.findByIdAndDelete(req.params.blogId)
            res.send("Blog Deleted")
        } catch (err) {
            next(err)
        }
    }



    constructor(){
        this.router = express.Router()
        .get('',this.getAllBlogs)
        .post('', this.createBlog)
        .get('/:blogId',this.getBlog)
        .get('',this.getBlogBySlug)
        .get('',this.getBlogsForTag)
        .put('/:blogId',this.editBlog)
        .delete('/:blogId', this.deleteBlog)


        
    }
}