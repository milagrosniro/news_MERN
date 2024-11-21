import type { Request, Response } from 'express'
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
            app.get('io').emit('news-updated', {data: allNews})
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
            const allNews = await New.find({
                $or: [
                    {archiveDate: {$exists: false}},
                    {archiveDate: null}
                ]
            }).sort({updatedAt: -1})  
            app.get('io').emit('news-updated', {data: allNews})
            // app.get('io').emit('news-updated', {data: allNews, type: 'news'})
            // await newUploaded.save()
            res.json(allNews)
        } catch (error) {
            res.status(404).json({error: `Error uploading new: ${error} `})
        }
    }

    static deleteNew = async ( req: Request, res: Response) =>{
        try {
            const {id} = req.params

            const newDeleted = await New.findByIdAndDelete(id)

            if(!newDeleted) {
                const error = new Error('not found new')
                 res.status(404).json({error: error })
                 return
            }

            res.json({message: 'new deleted', data: newDeleted})

            
        } catch (error) {
            res.status(404).json({error: `Error deleting new: ${error} `})
        }
    }
}