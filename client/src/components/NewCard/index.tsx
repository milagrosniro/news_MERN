import { formatDate } from 'date-fns'
import { UseAppStore } from '../../stores/useAppStore'
import Button from '../Button'
import { INewCardProps } from './newCard.types'

const NewCard = ({_new, titleButton}: INewCardProps) => {
    const {title, content, date,author, description, _id:id} = _new
    const {archiveNew} = UseAppStore()
    const body = {
      archiveDate: titleButton.toLowerCase() === 'archived' ? Date.now() : null
    }
    
  return (
    <div className='border shadow-lg'>
        <div className='overflow-hidden'>
        </div>
        <div className='p-5 flex flex-col flex-1 justify-between h-full'>
            <h2 className='text-2xl truncate font-black cursor-pointer' title={title}>{title}</h2>
            
            <p>{formatDate( date,'dd-MM-yyyy HH:mm:ss')}</p>
            <p className='cursor-pointer' title={description}>{description}</p>
            <p className='cursor-pointer' title={content}>{content}</p>
            <p>{author}</p>
          <Button title={titleButton} onclick={archiveNew} id={id} body={body}/>

        </div>

    </div>
  )
}

export default NewCard