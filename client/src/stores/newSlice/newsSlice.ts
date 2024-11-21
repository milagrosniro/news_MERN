import { StateCreator } from "zustand";
import { archiveNew, getAllNews, getArchivedNews } from "../../services/newsService";
import { IArchiveNewParam, INewSlice } from "./newSlice.types";

export const createNewSlice : StateCreator<INewSlice> = ((set) => ({
    news: [],
    newSelected: null,
    archivedNews: [],
    getNews: async ()=> {
        const news = await getAllNews();
        set(()=> ({news}))
    },
    uploadedNews: (news) =>{
        set(()=>({news}))
    },
    uploadedArchivedNews: (archivedNews) =>{
        set(()=>({archivedNews}))
    },
    getArchivedNews: async () => {
        const archivedNews = await getArchivedNews(); 
        set(()=> ({archivedNews}))
    },
    archiveNew: async ({id, body}: IArchiveNewParam) => {
         await archiveNew({id,body});
    }
}))