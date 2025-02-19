'use client'

import React from 'react'
import { Swap, SpeakerLow, Microphone, X, Copy, Share } from "@phosphor-icons/react"; // Import Phosphor Icon
import Image from "next/image";


const HomeMain = () => {
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
                        <Swap size={32} />
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
                    <div className='shadow-md bg-[#6750A4] bg-opacity-10 rounded-lg w-[90%] md:w-[50%] p-[1rem] '>
                        <div className='flex justify-between items-center'>
                            <div className='text-[#003366] flex gap-[1rem] items-center'>
                                <h4 className='text-lg font-semibold '>English</h4>
                                <SpeakerLow size={32} />
                            </div>

                            <X size={20} weight="bold" />

                        </div>

                        <p contentEditable suppressContentEditableWarning
                            className='shadow-md w-[95%] bg-white rounded-lg p-[1rem] min-h-[13.5rem] mt-3 '>Hello how are you?
                        </p>

                        <div className='flex justify-between items-center mt-3'>
                            <div className='bg-[#003366] h-[40px] w-[40px] rounded-full text-white flex justify-center items-center'>
                                <Microphone size={32} />
                            </div>

                            <div className='bg-[#FF6600] w-[6.75rem] h-[2.5rem] rounded-full text-white flex justify-center items-center'>
                                <h3 className='text-lg font-semibold'>Translate</h3>
                            </div>
                        </div>
                    </div>

                    <div className='shadow-md bg-[#6750A4] bg-opacity-10 rounded-lg w-[90%] md:w-[50%] p-[1rem] '>
                        <div className='text-[#003366] flex gap-[1rem] items-center'>
                            <h4 className='text-lg font-semibold '>Igbo</h4>
                            <SpeakerLow size={32} />
                        </div>

                        <p
                            className='shadow-md w-[95%] bg-white rounded-lg p-[1rem] min-h-[13.5rem] mt-3 '>Kedu ka imere?
                        </p>

                        <div className='flex justify-end items-center gap-[2rem] mt-3 text-[#003366]'>
                            <Copy size={32} />
                            <Share size={32} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default HomeMain