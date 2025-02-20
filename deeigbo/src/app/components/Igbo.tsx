import React, { useState, useRef } from 'react'
import { SpeakerLow, Copy, Share, Check } from "@phosphor-icons/react"; // Import Phosphor Icon


const Igbo = () => {
    //copy text
    const [copied, setCopied] = useState(false);
    const textRef = useRef<HTMLDivElement>(null);


    const handleCopy = async () => {
        if (textRef.current) {
            try {
                await navigator.clipboard.writeText(textRef.current.innerText);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
            } catch (err) {
                console.error("Failed to copy:", err);
            }
        }
    };

    //share text 
    const [shared, setShared] = useState(false);

    const handleShare = async () => {
        if (navigator.share && textRef.current?.innerText) {
            try {
                await navigator.share({
                    text: textRef.current.innerText,
                    url: window.location.href,
                });
                setShared(true);
                setTimeout(() => setShared(false), 2000);
            } catch (err) {
                console.error("Error sharing:", err);
            }
        } else {
            alert("Your browser doesn't support Web Share API");
        }
    };

    return (
        <div className='shadow-md bg-[#6750A4] bg-opacity-10 rounded-lg w-[90%] md:w-[50%] p-[1rem] '>
            <div className='text-[#003366] flex gap-[1rem] items-center'>
                <h4 className='text-lg font-semibold '>Igbo</h4>
                <SpeakerLow size={32} className='cursor-pointer' />
            </div>

            <p
                className='shadow-md w-[95%] bg-white rounded-lg p-[1rem] min-h-[13.5rem] mt-3' ref={textRef}>Kedu ka imere?
            </p>

            <div className='flex justify-end items-center gap-[2rem] mt-3 text-[#003366]'>
                {copied ? (
                    <Check size={32} className="text-green-500 cursor-pointer" />
                ) : (
                    <Copy size={32} className="cursor-pointer" onClick={handleCopy} />
                )}
                {!shared ? (<Share size={32} className='cursor-pointer' onClick={handleShare} />) : (<p>done</p>)}
            </div>
        </div>)
}

export default Igbo