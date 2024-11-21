import { IButtonProps } from './button.types'

const Button = ({title, onclick, id, body}: IButtonProps) => {
  return (
    <button
    type='button'
    onClick={()=> onclick({id, body})}
    className='bg-cyan-600 hover:bg-cyan-500 mt-5 w-full font-bold text-white text-lg'>
        {title}
    </button>
  )
}

export default Button