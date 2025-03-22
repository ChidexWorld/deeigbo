import React, { useState } from 'react'
import {  Copy, Share, Check } from "@phosphor-icons/react"; // Import Phosphor Icon


interface TranslatedOutputProps {
    translatedText: string;
}
const Igbo: React.FC<TranslatedOutputProps> = ({ translatedText }) => {
    // State for copy and share actions
    const [copied, setCopied] = useState(false);
    const [shared, setShared] = useState(false);


    const handleCopy = async () => {
        if (!translatedText) return;


        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(translatedText);
            } else {
                // Fallback method using document.execCommand
                const textArea = document.createElement("textarea");
                textArea.value = translatedText;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand("copy");
                document.body.removeChild(textArea);
            }

            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    text: translatedText,
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

    // Function to handle text-to-speech
    // const handleSpeak = () => {
    //     console.log("speak")
    //     if (!translatedText) return; // Don't read if there's no text

    //     const utterance = new SpeechSynthesisUtterance(translatedText);
    //     utterance.lang = "ig-NG"; // Igbo language (Change if needed)
    //     utterance.rate = 1; // Normal speed
    //     utterance.pitch = 1; // Normal pitch
    //     speechSynthesis.speak(utterance);
    // };


    return (
        <div className='shadow-md bg-[#6750A4] bg-opacity-10 rounded-lg w-[90%] md:w-[50%] p-[1rem] '>
            <div className='text-[#003366] flex gap-[1rem] items-center'>
                <h4 className='text-lg font-semibold '>Igbo</h4>
                {/* <SpeakerLow size={32} className='cursor-pointer' onClick={()=>alert("this feature is coming soon")} /> */}
            </div>

            <p
                className='shadow-md w-[95%] bg-white rounded-lg p-[1rem] min-h-[13.5rem] mt-3'>{translatedText || "Your translation will appear here..."}
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