import type { Request, Response } from 'express';
import { New } from '../models/NewModel';

export class ArchivedNewsController {

    static getAll = async(req: Request, res: Response) : Promise<void> => {
        
        try {
            // const allNews = await New.find({
            //     $or: [
            //         {archiveDate: {$exists: true}},
            //         {archiveDate: {$type: number}}
            //     ]
            // }).sort({updatedAt: -1})     
            const allNews = await New.find({
                archiveDate: { $type: "number" }
            }).sort({ updatedAt: -1 });
      
            res.json(allNews)
            
        } catch (error) {
            res.status(404).json({error: `Error getting all news: ${error} `})
        }
    }

    static updateNew = async ( req: Request, res: Response ) =>{
        try {
            const {id} = req.params
            const {body, app} = req
            
            const newUploaded = await New.findByIdAndUpdate(id,body)

            if(!newUploaded) {
                const error = new Error('new not found')
                 res.status(404).json({error: error })
                 return
            }

            const allNews = await New.find({
                $or: [
                    {archiveDate: {$exists: false}},
                    {archiveDate: null}
                ]
            }).sort({updatedAt: -1})
            app.get('io').emit('news-updated', {data: allNews})
            res.send('new Uploaded')
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