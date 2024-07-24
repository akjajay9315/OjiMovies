import React from 'react'
import logo from '../../assets/Images/MoviesNowLogo.png'

import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="w-full bg-white rounded-lg shadow dark:bg-[#131520] m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:pt-6 md:pb-6 lg:pt-6 lg:pb-6">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Image src={logo}
                            alt="Picture of your mum"
                            width={9001}
                            height={500}
                            className="w-[150px] md:w-[200px] object-cover h-10"
                        />
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm md:text-md font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="https://github.com/Vineet-0/MoviesNow" target="_blank" className="hover:underline me-4 md:me-6 font-bold text-white">About</a>
                        </li>
                        <li>
                            <a hhref="https://github.com/Vineet-0/MoviesNow" target="_blank" className="hover:underline me-4 md:me-6 font-bold text-white">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="https://github.com/Vineet-0/MoviesNow" target="_blank" className="hover:underline me-4 md:me-6 font-bold text-white">GitHub</a>
                        </li>
                        <li>
                            <a href="https://github.com/Vineet-0/MoviesNow" target="_blank" className="hover:underline font-bold text-white">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-5 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-6" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://moviesnow-byvineet.netlify.app" className="hover:underline">MOVIES NOW™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer