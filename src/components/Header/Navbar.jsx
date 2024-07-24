import React, { useState } from 'react'
import logo from '../../assets/Images/MoviesNowLogo.png'
import { RiSlideshow2Fill } from "react-icons/ri";
import { HiOutlineUserCircle , HiDotsVertical  } from "react-icons/hi";
import { FaSearch , FaPlus , FaPlay , FaTv } from "react-icons/fa";
import NavbarItem from './NavbarItem';

import Link from 'next/link'
import Image from 'next/image'

function Header() {
    const [toggle,setToggle]=useState(false);
    const navigation=[
        {
            name:'SEARCH',
            icon:FaSearch,
            href: 'search',
        },
        {
            name:'WATCH LIST',
            icon:FaPlus,
            href: 'watchlist',
        },
        {
            name:'SHOWS',
            icon:RiSlideshow2Fill,
            href: 'shows',
        },
        {
            name:'MOVIES',
            icon:FaPlay,
            href: 'movies',
        },
        {
            name:'SERIES',
            icon:FaTv,
            href: 'series',
        }
    ]
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
  return (
    <div className='sm:fixed sm:top-0 flex items-center justify-between px-8 py-5 w-full sm:bg-gradient-to-b sm:from-[#131520] sm:to-[transparent] z-10'>
        <div className='flex gap-8 items-center z-10'>
            <Link
            key="1234"
            href='/'
            >
                <Image
                    src={logo}
                    alt="MoviesNow Logo"
                    width={9001}
                    height={500}
                    className='w-[150px] md:w-[200px] object-cover'
                    onClick={scrollToTop} 
                />
            </Link>
            
            <div className='hidden lg:flex gap-8 pt-[10px]'>
            {navigation.map((item)=>(
                <Link
                key={item.name}
                href={item.href}
                >
                    <NavbarItem name={item.name} Icon={item.icon} />
                </Link>
            ))}
        </div>
        <div className='flex pt-[11px] lg:hidden gap-5 z-10'>
            {navigation.map((item,index)=>index<1&&(
                <Link
                key={item.name}
                href={item.href}
                >
                    <NavbarItem name='' Icon={item.icon} />
                </Link>
            ))}
            <div className='lg:hidden z-50' onClick={()=>setToggle(!toggle)}>       
                <NavbarItem name={''} Icon={HiDotsVertical} />
                {toggle? <div className='absolute mt-3 bg-[#121212] rounded-md 
                        border-[1px] border-gray-700 px-5 pt-4 pb-2'>
                        {navigation.map((item,index)=>index>0&&(
                            <Link
                            key={item.name}
                            href={item.href}
                            >
                                <NavbarItem name={item.name} Icon={item.icon} />
                            </Link>
                        ))}
                        </div>:null}
                </div> 
            </div>
        </div>
        <div className='z-10'>
            <HiOutlineUserCircle className='w-[35px] h-[35px]'/> 
        </div>
    </div>
  )
}

export default Header