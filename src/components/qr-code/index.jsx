import React from 'react'
import QRCode from "react-qr-code";
import { data } from '../tree-view/data';
const QrCodeGenerator = () => {
  return (
    <div className='flex flex-col items-center gap-2 p-1 '>
      <h1 className='text-xl text-bold'>QR Code Generator</h1>
      <QRCode 
      value = {JSON.stringify(data[1])}
      className='w-[400px] h-[400px] border-2 border-blue-200 p-2'
      />
    </div>
  )
}

export default QrCodeGenerator
