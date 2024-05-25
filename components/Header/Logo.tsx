import Image from 'next/image'
import React from 'react'
 import { Logo as logo } from '@/app/assets'
const Logo = () => {
  return (
    <Image src={logo} alt='logo' width={200} height={100} className='sm:w-[200px] sm:h-[60px] w-[150px] h-[50px]'  />
  )
}

export default Logo