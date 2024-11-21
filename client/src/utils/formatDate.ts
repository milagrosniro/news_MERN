import { format } from 'date-fns'

interface IFormatDate {
    timestamp: number,
    formatType: 'dd/MM/yyyy' | 'dd-MM-yyyy HH:mm:ss' | 'd MMM yyyy'

}


export const formatDate = ({timestamp, formatType} : IFormatDate) => format(new Date(timestamp), formatType)