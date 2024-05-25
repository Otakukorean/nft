'use client'
import Image from 'next/image';
import React from 'react'
import { Heart } from 'lucide-react';
import { Ethereum, UserFour } from '@/app/assets';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';

interface CardProps {
    image : string;
    index : any
}

const Card = ({image,index} : CardProps) => {

  return (
    <motion.div 
     className='hero-Card-Gradient backdrop-blur-md flex justify-center items-start flex-col p-3  gap-6 rounded-[15px]'>
        <div  
 
        className='relative sm:w-[370px] sm:h-[260px] w-[300px] h-[200px] '>
                <Image src={image} alt='image' width={200} height={200} className='w-full h-full object-cover rounded-[15px]' />
                <div className='hero-Card-Gradient backdrop-blur-md flex justify-center items-center gap-2 absolute top-0 right-0 rounded-tl-[15px] rounded-bl-[15px] p-3'>
                <Heart color='#fff' width={16} height={15} />
                <h4 className='text-[16px] text-white font-semibold'>341</h4>
                </div>
        </div>
        {/* User */}
        <div className='flex justify-center items-start ml-3 gap-3 '>
            {/* User Image */}
        <div>
            <Image src={UserFour}  width={40} height={40} alt='user image' />  
        </div>
        {/* UserName */}
        <div className=''>
            <h2 className='leading-3 text-white text-[25px] font-normal'>Monkey ape </h2> <br />
            <span className='text-white text-[14px] font-normal'>By @JSmith</span>
        </div>
        </div>
        {/* Sataus & Price */}
        <div className=' flex justify-center items-center sm:gap-24 gap-20 mx-8'>
            <span className='text-white text-[16px]'>on sale 🔥</span>
            <span>
            <Image src={Ethereum} alt="" width={20} height={20} />
            <h3 className='text-[20px] text-white'>4.89 ETH</h3>
            </span>
        </div>
        {/* Button */}
        <div className=' w-full'>
            <Button variant={'secondary'} className='w-full'>Buy Now</Button>
        </div>

    </motion.div>
  )
}

export default Card