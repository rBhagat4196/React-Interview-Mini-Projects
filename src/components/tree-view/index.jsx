import React, { useState } from 'react'
import { data } from './data'
import { View } from './utils'
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";



const TreeView = () => {
  const [show,setShow] = useState(false);
  return (
    <div className='w-[500px] h-[563px] bg-black/[.8] mx-auto rounded-md border-4 border-white'>
      
      {show ? (
        <div className='flex'>
        <View data={data}/>
        <AiOutlineMenuFold className='text-3xl text-white mt-[20px] relative -ml-[40px] cursor-pointer'
        onClick={()=> setShow(false)}
        />
        </div>
        
      ) : (
        <AiOutlineMenuUnfold className='text-3xl text-white m-[20px] cursor-pointer '
        onClick={()=> setShow(true)}
        />
      )}
    </div>
  )
}

export default TreeView
