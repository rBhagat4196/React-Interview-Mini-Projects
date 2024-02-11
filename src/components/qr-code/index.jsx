import React, { useState } from 'react'
import QRCode from "react-qr-code";

const QrCodeGenerator = (theme) => {
  console.log(theme)
  const [data,setData] = useState("")
  return (
    <div className='flex flex-col items-center gap-2 p-1 '>
      <div className='flex flex-col'>

      <form className=''>

        <label className={`${theme==="dark" ? "text-white" : "" }text-xl font-semibold`}>
          Enter Data
        </label>
        <input
        placeholder='Play with QR dance'
        onChange={(e)=> setData(e.target.value)}
        className='ml-[20px] w-[200px] border-2 rounded-xl p-1'
        />
      </form>

      </div>

      <QRCode 
      value = {data}
      className='w-[400px] h-[400px] border-2 border-blue-200 p-2'
      />
    </div>
  )
}

export default QrCodeGenerator
