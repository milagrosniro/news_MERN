import axios from "axios"
import { IArchiveNewParam, IDeleteNewParam } from "../stores/newSlice/newSlice.types"

const BASE_URL = import.meta.env.VITE_URL 

export const getAllNews = async () => {
    try {
        const url = `${BASE_URL}/news/new`
        const {data} = await axios(url)

        if(data.error) return []
    
        return data.data
    } catch (error) {
        console.log(error)
        return [] 
    } 

}

export const getArchivedNews = async () => {
    try {
        const url = `${BASE_URL}/news/archived`
        const {data} = await axios(url)
    
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }

}

export const archiveNew = async ({id, body}: IArchiveNewParam) =>{
    try {
        const url = `${BASE_URL}/news/new/${id}`
 
        const {data} = await axios.patch(url, body)
        return data
 
    } catch (error) {
        console.log(error)
    }

}
export const deleteNew = async({id, type}: IDeleteNewParam) =>{
    try {
        const url = `${BASE_URL}/news/new/${id}/${type}`
        const {data} = await axios.delete(url)
        return data
    } catch (error) {
    console.log(error)
        
    }
  

}