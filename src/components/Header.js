import React, { useEffect, useState } from 'react'
// import Logo from '../assets/img/logo.svg'
import Nav from '../components/Nav'
import NavMobile from '../components/NavMobile'
import Socials from '../components/Socials'

const Header = () => {
    const [bg, setBg] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.screenY > 50 ? setBg(true) : setBg(false)
        })
    })
  return (
    <header className={`${
        bg ? 'bg-tertiary h-20' : 'h-24'
    } flex items-center fixed top-0 w-full 
    text-white z-10 transition-all duration-300`}>
        <div className='container mx-auto h-full flex items-center justify-between'>
            {/* logo */}
            <a href='#'>
                <h2 className='text-2xl leading-[24px] md:text-5xl md:leading-tight lg:text-3xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>Sapath</h2>
            </a>
            {/* nav */}
            <div className='hidden lg:block'>
                <Nav />
            </div>

             {/* social */}
             <div className='hidden lg:block'>
                <Socials />
            </div>

             {/* nav mobile */}
             <div className='lg:hiddne'>
                <NavMobile />
            </div>
        </div>
    </header>
  )
}

export default Header