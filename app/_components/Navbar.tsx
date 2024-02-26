'use client';
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { BiHomeHeart } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { BiBlanket } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import Toggletheme from './Toggletheme';
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
      setActiveLink(window.location.pathname);
    }, []);
  
    const handleClick = (path: string) => {
      setActiveLink(path);
    };

    const { isToggled } = useContext(ThemeContext); // Use the useContext hook to access isToggled

    const navring = isToggled ? 'ring-white' : 'ring-black';
    const activenav = isToggled ? 'active-nav-dark' : 'active-nav';
    const inactivenav = isToggled ? 'inactive-nav-dark' : 'inactive-nav';
    const nameheading = isToggled ? 'name-heading' : 'name-heading-light';


  return (
    <>
        <nav className={`fixed z-[9999] bottom-8 left-0 right-0 flex justify-center mx-auto items-center max-w-[280px] py-2 mt-6 rounded-full backdrop-blur-sm bg-white/10 ... ring-2 ${navring}`}>
            <ul className='flex w-[85%] justify-between mx-auto'>
                <Link href='/' className={activeLink === '/' ? activenav : inactivenav} 
            onClick={() => handleClick('/')}>
                    <li className='group'>
                        <BiHomeHeart/>
                        <span className="absolute text-black -top-8 left-[15%] -translate-x-[10%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                            Home
                        </span>
                    </li>
                </Link>
                <Link href='/About'  className={activeLink === '/About' ? activenav : inactivenav} 
            onClick={() => handleClick('/About')}>
                    <li className='group'>
                        <BiSolidUser/>
                        <span className="absolute text-black -top-8 left-[35%] -translate-x-[20%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                            About
                        </span>
                    </li>
                </Link>
                <Link href='/Services'  className={activeLink === '/Services' ? activenav : inactivenav} 
            onClick={() => handleClick('/Services')}>
                    <li className='group'>
                        <BiSolidCategoryAlt/>
                        <span className="absolute text-black -top-8 left-[50%] -translate-x-[10%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                            Services
                        </span>
                    </li>
                </Link>
                <Link href='/Portfolio' className={activeLink === '/Portfolio' ? activenav : inactivenav} 
            onClick={() => handleClick('/Portfolio')}>
                    <li className='group'>
                        <BiBlanket/>
                        <span className="absolute text-black -top-8 left-[70%] -translate-x-[10%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                            Portfolio
                        </span>
                    </li>
                </Link>
                <Link href='/Contact'  className={activeLink === '/Contact' ? activenav : inactivenav}
            onClick={() => handleClick('/Contact')}>
                    <li className='group'>
                        <BiPhone/>
                        <span className="absolute text-black -top-8 left-[90%] -translate-x-[10%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                            Contact
                        </span>
                    </li>
                </Link>
            </ul>
        </nav>

        <nav className={`fixed z-[9999] top-1 left-0 right-0 flex justify-center mx-auto items-center max-w-[1100px] py-2 mt-2 rounded-full backdrop-blur-sm bg-white/10 ... ring-1 ${navring}`}>
            <ul className='flex w-full px-4 mx-auto justify-between items-center'>
                <div className={`${nameheading}`}>
                    <li>
                        <p className='font-black'>Portfolio Usama</p>
                    </li>
                </div>
                <Toggletheme/>
            </ul>
        </nav>


    </>
  )
}

export default Navbar