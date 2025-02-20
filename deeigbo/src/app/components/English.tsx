import React from 'react'
import { SpeakerLow, Microphone, X, } from "@phosphor-icons/react"; // Import Phosphor Icon
import { TextField } from "@mui/material";



const English = () => {
  return (
      <div className='shadow-md bg-[#6750A4] bg-opacity-10 rounded-lg w-[90%] md:w-[50%] p-[1rem] '>
          <div className='flex justify-between items-center'>
              <div className='text-[#003366] flex gap-[1rem] items-center'>
                  <h4 className='text-lg font-semibold '>English</h4>
                  <SpeakerLow size={32} className='cursor-pointer' />
              </div>

              <X size={20} weight="bold" className='cursor-pointer' />

          </div>

          <TextField
              variant="outlined"
              multiline
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

          <div className='flex justify-between items-center mt-3'>
              <div className='bg-[#003366] h-[40px] w-[40px] rounded-full text-white flex justify-center items-center'>
                  <Microphone size={32} className='cursor-pointer' />
              </div>

              <div className='bg-[#FF6600] w-[6.75rem] h-[2.5rem] rounded-full text-white flex justify-center items-center'>
                  <h3 className='text-lg font-semibold'>Translate</h3>
              </div>
          </div>
      </div>  )
}

export default English;