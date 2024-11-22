import type { Request, Response } from 'express'
import { ARCHIVED, NEWS } from '../constants'
import { New } from '../models/NewModel'

export class NewNewsController {
    static create = async(req: Request, res: Response) : Promise<void> => {
        
        try { 
            const { body, app } = req
            const newNew = new New(body)

            await newNew.save()
            const allNews = await New.find({
                $or: [
                    {archiveDate: {$exists: false}},
                    {archiveDate: null}
                ]
            }).sort({updatedAt: -1})  

            //uplaod socketio
            app.get('io').emit('news-updated', {dataNews: allNews, type: NEWS})
            res.json({message: `New new created`})
            
        } catch (error) {
            res.status(404).json({error: `Error creating a new New: ${error} `})
        }
    }
 
    static getAll = async(req: Request, res: Response) : Promise<void> => {
        
        try {
            
            const allNews = await New.find({
                $or: [
                    {archiveDate: {$exists: false}},
                    {archiveDate: null}
                ]
            }).sort({updatedAt: -1})           
            res.json({data: allNews})
            
        } catch (error) {
            res.status(404).json({error: `Error getting all news: ${error} `})
        }
    }

    static updateNew = async ( req: Request, res: Response ) =>{
        try {
            const {id} = req.params
            const {body, app} = req
            const newUploaded = await New.findByIdAndUpdate(id,body, {new:true})

            if(!newUploaded) {
                 res.status(404).json({error: 'New not found'})
                 return
            }
            let allNews 
              
            const type = body.archiveDate === null ? ARCHIVED : NEWS
            allNews = type === NEWS ? await New.find({
                $or: [
                    {archiveDate: {$exists: false}},
                    {archiveDate: null}
                ]
            }).sort({updatedAt: -1}) : await New.find({
                archiveDate: { $type: "number" }
            }).sort({ updatedAt: -1 });
            app.get('io').emit('news-updated', {dataNews: allNews, type})
            res.json(allNews)
        } catch (error) {
            res.status(404).json({error: `Error uploading new: ${error} `})
        }
    }

    static deleteNew = async ( req: Request, res: Response) =>{
        try {
            const {id, type} = req.params
            const {app} = req

            const newDeleted = await New.findByIdAndDelete(id)

            if(!newDeleted) {
                const error = new Error('not found new')
                 res.status(404).json({error: error })
                 return
            }
            let allNews 
              
            allNews = type === NEWS ? await New.find({
                $or: [
                    {archiveDate: {$exists: false}},
                    {archiveDate: null}
                ]
            }).sort({updatedAt: -1}) : await New.find({
                archiveDate: { $type: "number" }
            }).sort({ updatedAt: -1 });
            
            app.get('io').emit('news-updated', {dataNews: allNews, type})

            res.json({message: 'new deleted', data: newDeleted})

            
        } catch (error) {
            res.status(404).json({error: `Error deleting new: ${error} `})
        }
    }
}