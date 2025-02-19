"use client"; // 💡 Make this a Client Component

import { List, X } from "@phosphor-icons/react"; // Import Phosphor Icon
import Link from "next/link";
import React, { useState } from "react";



const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <div className='p-[1rem] bg-[#003366] text-white'>

            {/* Navbar Header */}
            <div className='flex justify-between'>
                <h3 className='text-2xl font-bold'>Deeigbo</h3>

                {/* Menu Toggle Button */}
                <div onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={32} className="cursor-pointer" /> : <List size={32} className="cursor-pointer md:hidden" />}
                </div>

                <ul className=" flex-row items-center gap-[4rem] hidden md:flex ">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/team">Team</Link>
                    </li>
                    <li>
                        <Link href="/feedback">Feedback</Link>
                    </li>
                </ul>
            </div>

            {menuOpen && (
                <ul className="flex flex-col items-center gap-[1rem]">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/team">Team</Link>
                    </li>
                    <li>
                        <Link href="/Feedback">Feedback</Link>
                    </li>
                </ul>
            )}
        </div>
    )
}

export default Navbar