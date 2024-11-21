import axios from "axios"
import { IArchiveNewParam } from "../stores/newSlice/newSlice.types"

export const getAllNews = async () => {
    try {
        const url = `http://localhost:4000/news/new`
        const {data} = await axios(url)
        console.log('DATA',data)
        if(data.error) return []
    
        return data.data
    } catch (error) {
        console.log(error)
        return []
    } 

}

export const getArchivedNews = async () => {
    try {
        const url = `http://localhost:4000/news/archived`
        const {data} = await axios(url)
    
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }

}

export const archiveNew = async ({id, body}: IArchiveNewParam) =>{
    try {
        console.log('ENTRA A ARCHIVENEW')
        const url = `http://localhost:4000/news/new/${id}`
 
console.log(body)
        const {data} = await axios.patch(url, body)
        console.log(data)
        return data
 
    } catch (error) {
        console.log(error)
        
    }


}