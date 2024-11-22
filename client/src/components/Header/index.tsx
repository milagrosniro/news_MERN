import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    // <header className='bg-header bg-center bg-cover bg-slate-800'>
    <header className='relative bg-center bg-cover bg-slate-800'>

        <video
        className=" absolute inset-0 w-full h-full object-cover"
        src="./periodic.mp4"
        autoPlay
        loop
        muted
        />
        {/* <div className='mx-auto container px-5 py-16'> */} 
        <div className='relative z-10 mx-auto container px-5 py-16'>
            <div className='flex justify-between items-center'>
                <div>
                    <img className='w-32' src='./logo.svg' alt='logo'/>
                </div>
            <nav className='flex gap-4'>
                <NavLink className={({isActive})=> isActive ? 'text-red-500 font-bold uppercase underline' : 'text-cyan-500 font-bold uppercase'} to={'/'}>News</NavLink>
                <NavLink className={({isActive})=> isActive ? 'text-red-500 font-bold uppercase underline' : 'text-cyan-500 font-bold uppercase'} to={'/archived'}>Archived</NavLink>
            </nav>
            </div>
        </div>
    </header>
  )
}

export default Header