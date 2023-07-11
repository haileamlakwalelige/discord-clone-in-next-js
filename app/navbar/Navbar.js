'use client'

import React from 'react'
import { useState } from 'react';
import {FaDiscord, FaTimes, FaBars} from 'react-icons/fa';



const Navbar = () => {
    const [show, setShow]=useState(false);
  return (
 <main className="text-white bg-[#2c2f33]">
       <div className="px-10 flex justify-between pt-10 pb-5">
        <div className="text-white flex justify-between z-20">
            <FaDiscord className="w-10 h-10 pr-2"/>
            <h1 className="font-extrabold pt-1 text-lg font-mono">Discord</h1>
        </div>
        <div className="hidden md:block">
            <ul className="flex justify-between font-bold">
                <li className="px-4">Download</li>
                <li className="px-4">Nitro</li>
                <li className="px-4">Discovery</li>
                <li className="px-4">Safety</li>
                <li className="px-4">Support</li>
                <li className="px-4">Blog</li>
                <li className="px-4">Careers</li>
            </ul>
        </div>
        <div className="block md:hidden bg-white pt-44 h-[100vh] text-black w-[100vh] z-30 duration-300 ">
        
           {show ? (
            <ul className="flex justify-between items-center flex-col font-bold">
                <li className="px-4">Download</li>
                <li className="px-4">Nitro</li>
                <li className="px-4">Discovery</li>
                <li className="px-4">Safety</li>
                <li className="px-4">Support</li>
                <li className="px-4">Blog</li>
                <li className="px-4">Careers</li>
            </ul>
           ):null}
        </div>
        <div className="bg-white rounded-full">
            <button className="text-sm px-2 py-2 text-black font-light">Open Discord</button>
        </div>
        <div className="block md:hidden"  onClick={()=>setShow(!show)}>
            {show ? <FaTimes />:<FaBars />}
        </div>
    </div>
 </main>
  )
}

export default Navbar;