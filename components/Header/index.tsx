import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import RightSide from './RightSide'
import { cn } from '@/lib/utils'
import {styles} from '@/styles/styles'
const index = () => {
  return (
    <nav className={`flex justify-between items-center sm:mb-[50px] mb-[30px]`}>
        <div>
           <Logo /> 
        </div>
        <div>
            <Navbar />
        </div>
        <div>
            <RightSide/>
        </div>
    </nav>
  )
}

export default index