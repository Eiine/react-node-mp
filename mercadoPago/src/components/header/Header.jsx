import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import Dashboard from '../dashboard'

const Header = ({ dato }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className='bg-[#10224D] shadow-cardShadow h-16 flex items-center text-white pl-6 pr-[26px]'>
            <AiOutlineMenu className='text-2xl cursor-pointer' onClick={() => setOpen(!open)}/>
            <div className='absolute top-0 left-0 text-black z-10'>
                <Dashboard open={open} setOpen={setOpen} />
            </div>
            <p className='font-semibold pl-4'>{dato}</p>
        </div>
    )
}

export default Header