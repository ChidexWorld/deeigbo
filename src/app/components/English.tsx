import React, { useState } from 'react';
import { SpeakerLow, Microphone, X, SpeakerHigh } from "@phosphor-icons/react"; // Import Phosphor Icon
import { TextField } from "@mui/material";

interface EnglishProps {
    setTranslatedText: (text: string) => void; // Function from parent
}

const English: React.FC<EnglishProps> = ({ setTranslatedText }) => {
    const [text, setText] = useState<string>(""); // Store user input   
    const [loading, setLoading] = useState<boolean>(false); // Track translation state
    const [isPlaying, setIsPlaying] = useState<boolean>(false); // Track if audio is playing
    const [listening, setListening] = useState(false);


    // Function to handle text change
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    // Clear text when X icon is clicked
    const handleClearText = () => {
        setText(""); // Clear input text
        setTranslatedText(""); // Clear translation
        console.log("clear")
    };

    // Function to handle translation
    const handleTranslate = async () => {
        if (!text.trim()) return; // Prevent empty requests
        setLoading(true);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/translate`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ text }),
            });

            if (!response.ok) {
                throw new Error("Failed to translate");
            }

            const data = await response.json();
            setTranslatedText(data.translation);
        } catch (error) {
            console.error("Translation error:", error);
            setTranslatedText("Translation failed. check your network service and try again");
        } finally {
            setLoading(false);
        }
    };

    // 🎙️ Handle Speech Playback
    const handleSpeak = async () => {
        if (!text.trim()) return; // Prevent empty requests

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tts`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text, language: "en" }), // English
            });

            const data = await response.json();
            if (!data.success) throw new Error("TTS failed");

            const audioUrl = `${process.env.NEXT_PUBLIC_API_URL}/audio/${data.audio}`;
            const audio = new Audio(audioUrl); // Use the file path

            setIsPlaying(true);// Change icon
            audio.play(); // Play the generated speech

            audio.onended = () => setIsPlaying(false);// Revert icon

        } catch (error) {
            console.error("Speech Error:", error);
            setIsPlaying(false);

        }
    };

    const [recognitionInstance, setRecognitionInstance] = useState<SpeechRecognition | null>(null);

    const startListening = () => {
        if (!("webkitSpeechRecognition" in window)) {
            alert("Speech recognition is not supported in this browser.");
            return;
        }

        if (listening) {
            setListening(false);
            recognitionInstance?.stop(); // ✅ Stop recognition properly
            return
        }; // Prevent multiple clicks while it's active



        //speech instance that listen to user's voice 
        const recognition = new window.webkitSpeechRecognition();

        // Configure the Speech Recognition
        recognition.lang = "en-US"; // Set language to English (US)
        recognition.continuous = true; // Keep listening until stopped
        recognition.interimResults = true; // Show real-time updates

        //Handle the Start Event
        recognition.onstart = () => {
            setListening(true);
            console.log("🎙️ Listening...");

        };

        //Process the Speech Results
        recognition.onresult = (event) => {
            let transcript = "";
            for (let i = event.resultIndex; i < event.results.length; i++) {
                transcript += event.results[i][0].transcript + " ";
            }
            setText(transcript); // Update input field with speech text
            console.log("Recognized speech:", transcript); // ✅ Log text to console
        };

        //Handle Errors
        recognition.onerror = (event) => {
            console.error("Speech recognition error:", event.error);
            setListening(false);

        };

        //Stop Listening Automatically
        recognition.onend = () => {
            setListening(false);
            console.log("🎤 Stopped listening");
        };

        recognition.start(); // Start listening
        setRecognitionInstance(recognition); // ✅ Store recognition instance in state

    }



    return (
        <div className='shadow-md bg-[#6750A4] bg-opacity-10 rounded-lg w-[90%] md:w-[50%] p-[1rem] '>
            <div className='flex justify-between items-center'>
                <div className='text-[#003366] flex gap-[1rem] items-center'>
                    <h4 className='text-lg font-semibold '>English</h4>

                    {isPlaying ? (
                        <SpeakerHigh size={32} className='cursor-pointer' />
                    ) : (
                        <SpeakerLow size={32} className='cursor-pointer' onClick={handleSpeak} />
                    )}                </div>

                <X size={20} weight="bold" className='cursor-poi    setText(prev => prev + transcript); // ✅ Append speech to existing text
nter' onClick={handleClearText}
                />

            </div>

            <TextField
                onChange={handleChange}
                variant="outlined"
                multiline
                value={text}
                minRows={6}
                placeholder="Type your message here..."
                sx={{
                    width: "95%",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    padding: "1rem",
                    marginTop: "0.75rem",
                    boxShadow: 1,
                }}
            />

            {/* Translated Text Display */}
            {/* {translatedText && (
                <div className="mt-4 p-2 bg-white rounded-lg shadow">
                    <h4 className="text-lg font-semibold">Translation:</h4>
                    <p>{translatedText}</p>
                </div>
            )} */}

            <div className='flex justify-between items-center mt-3'>
                <div className={`bg-[#003366] h-[40px] w-[40px] rounded-full text-white flex justify-center items-center ${listening ? "bg-red-600 animate-pulse" : "bg-[#003366]"}`} onClick={startListening}
                >
                    <Microphone size={32} className='cursor-pointer' />
                </div>

                <div className='bg-[#FF6600] w-[6.75rem] h-[2.5rem] rounded-full text-white flex justify-center items-center' onClick={handleTranslate}
                >
                    <h3 className="text-lg font-semibold">
                        {loading ? "..." : "Translate"}
                    </h3>
                </div>
            </div>
        </div>)
}

export default English;