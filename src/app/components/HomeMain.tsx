'use client'

import React, { useState } from 'react'
import { ArrowSquareRight } from "@phosphor-icons/react"; // Import Phosphor Icon
import Image from "next/image";
import English from "./English";
import Igbo from "./Igbo";


const HomeMain = () => {
    const [translatedText, setTranslatedText] = useState<string>("");


    return (
        <div>
            <main>
                <div className='flex justify-center mt-4'>
                    <div className='bg-[#6750A4] bg-opacity-10 rounded-full flex p-[1rem] w-[24rem] justify-between items-center shadow-md'>
                        <div className='flex gap-[5px]'>
                            <Image
                                src="/british.png" // Path inside the public folder
                                alt="british image"
                                width={24} // Set width
                                height={24} // Set height
                                className="rounded-full"
                            />

                            <h4 className='text-lg font-semibold'>English</h4>
                        </div>
                        <ArrowSquareRight size={32} />
                        <div className='flex gap-[5px]'>
                            <h4 className='text-lg font-semibold'>igbo</h4>

                            <Image
                                src="/nigeria.webp" // Path inside the public folder
                                alt="british image"
                                width={24} // Set width
                                height={24} // Set height
                                className="rounded-full"
                            />
                        </div>
                    </div>
                </div>
                <div className='mt-6 flex flex-col gap-[3rem] items-center md:flex-row md:p-[1rem]'>
                    <English setTranslatedText={setTranslatedText} />
                    <Igbo translatedText={translatedText} />
                </div>
            </main>
        </div>
    )
}

export default HomeMain