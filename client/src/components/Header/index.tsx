import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className='bg-header bg-center bg-cover bg-slate-800'>
        <div className='mx-auto container px-5 py-16'>
            <div className='flex justify-between items-center'>
                <div>
                    <img className='w-32' src='./logo.svg' alt='logo'/>
                </div>
            <nav className='flex gap-4'>
                <NavLink className={({isActive})=> isActive ? 'text-red-500 font-bold uppercase' : 'text-white font-bold uppercase'} to={'/'}>News</NavLink>
                <NavLink className={({isActive})=> isActive ? 'text-red-500 font-bold uppercase' : 'text-white font-bold uppercase'} to={'/archived'}>Archived</NavLink>
            </nav>
            </div>
        </div>
    </header>
  )
}

export default Header