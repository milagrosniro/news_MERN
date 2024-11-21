import mongoose, { Document, Schema } from 'mongoose';

export interface INewModel extends Document {
  title: string;
  description: string;
  date?: number;
  content: string;
  author: string;
  archiveDate?: string;
}

const NewSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Number,
    optional: true,
    trim: true,
    default: Date.now()
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  archiveDate: {
    type: Number,
    default: null,
    optional: true
  },
},{timestamps: true})

export const New = mongoose.model<INewModel>('New', NewSchema)
