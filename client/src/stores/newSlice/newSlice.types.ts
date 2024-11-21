export interface INew {
    title: string;
    description: string;
    date: string;
    content: string;
    author: string;
    archiveDate?: string;
    _id: string
}

export interface IArchivedNew extends Omit<INew, 'archiveDate'> {
    archiveDate: string;
}

export interface IBodyParam {
    archiveDate: null | number
}

export interface IArchiveNewParam{
    id: INew['_id'],
    body: IBodyParam
} 

export interface INewSlice {
    news: INew[] | [],
    newSelected: INew | null,
    archivedNews: IArchivedNew[] | []
    getNews: () => Promise<void>,
    uploadedNews: (news: INew[] | []) => void,
    uploadedArchivedNews: (IArchivedNew: IArchivedNew[] | []) => void,
    getArchivedNews: () => Promise<void>,
    archiveNew : ({id,body}:IArchiveNewParam) => Promise<void>
}