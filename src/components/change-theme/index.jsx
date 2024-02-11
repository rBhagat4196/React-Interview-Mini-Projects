import React, { useEffect} from 'react'
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { changeTheme } from './utils';
const ToggleTheme = ({theme,setTheme}) => {
    useEffect(()=>{
        changeTheme(theme)
    },[theme])
  return (
    <div className='rounded-3xl mx-auto w-[400px] flex items-center justify-center h-[300px] bg-blue-800'>
      <button>
        {
            theme === "light" ? (
                <FaMoon className='w-20 h-20 text-white' onClick={()=>setTheme("dark")}/>
            ):(
                <FaSun  className='w-20 h-20 text-white' onClick={()=>setTheme("light")}/>
            )
        }
      </button>
    </div>
  )
}

export default ToggleTheme
