import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { styles } from '@/styles/styles'
import Image from 'next/image'
import {UserImageOne} from '@/app/assets'
const RightSide = () => {
  return (
    <div  className='flex justify-center items-center sm:gap-7 gap-3'>
        <Button  className={cn('')}>Connect Wallet</Button>
        <Image src={UserImageOne} alt='user' width={40} height={40} className='rounded-full object-cover cursor-pointer' />
    </div>
  )
}

export default RightSide