import z from "zod";
import { isValidDate } from "../utils/validateDate";

const newSchema = z.object({
  title: z.string({
    invalid_type_error: "Title must be a string",
    required_error: "Title is required",
  }),
  description: z.string({
    invalid_type_error: "Description must be a string",
    required_error: "Description is required",
  }),
  date: z.number({
    invalid_type_error: "Invalid Date"
  }).refine((val)=> isValidDate(val), { message: 'Not valid Date'}).optional(),
  
  content: z.string({
    invalid_type_error: "Content must be a string",
    required_error: "Content is required",
  }),
  author: z.string({
    invalid_type_error: "Author must be a string",
    required_error: "Author is required",
  }),
  archiveDate: z.string({
    invalid_type_error: "Invalid Date",
  }).optional(),
});

export const validateNew = (req, res, next) => {
    try {
        const {body} = req
        const result = newSchema.safeParse(body)

        if(result.error) return res.status(400).json({error: JSON.parse(result.error.message)})
            next()
        
    } catch (error) {
        return res.status(400).json({error: JSON.parse(error.errors)})
    }

}
