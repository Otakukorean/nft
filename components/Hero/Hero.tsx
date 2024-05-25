"use client";
import React from 'react'

import HeaderText from '../ui/header'
import SubHeader from '../ui/subheader'
import { Button } from '../ui/button'
import Image from 'next/image'
import { HeroImageOne,HeroImageThree,HeroImageTow } from '@/app/assets'
import { motion } from 'framer-motion'
import { textVariant } from '@/utils/motion'

const Hero = () => {


  return (
    <div className=''>
    <motion.div 
className='hero-background flex sm:justify-between justify-center gap-6 items-center mb-6 sm:flex-nowrap flex-wrap '>
        {/* Details */}
            <div  className='flex justify-center items-start flex-col gap-4'>
                {/* Hero Header */}
                <HeaderText label="EXPLORE, CREATE AND SELL YOUR  NFT’S  ON SHIHAMI" className='sm:max-w-3xl  sm:text-start text-center' />
                {/* Hero SubHeader */}
                <SubHeader label='Shihami is the World’s first and largest NFT/Avatar marketplace ' className='sm:text-start text-center' />
                {/* Hero Buttons */}
                <div className='flex justify-center sm:items-start items-center flex-wrap gap-4'>
                    <Button className='py-7 px-16 text-lg'>Explore more</Button>
                    <Button  className='py-7 px-16 text-lg' variant={'secondary'}>Create</Button>
                </div>
            </div>
        {/* Hero Image */}
        <div className=' justify-center items-center  flex sm:flex-nowrap flex-wrap gap-4'>
        
           <div className='sm:mr-[-100px] sm:mb-[-100px] hero-Card-Gradient  flex flex-col justify-center items-center gap-2 px-4 py-9 rounded-2xl border-white/40 border-y-2 backdrop-blur-md'>
                <Image src={HeroImageTow} alt='hero' />
                <h2 className='text-white font-semibold'>Living of the art</h2>
                <h4 className='text-white'>$ 543,576.13</h4>
            </div> 
            <div className='hero-Card-Gradient flex flex-col justify-center items-center gap-2 px-4 py-9 rounded-2xl border-white/40 border-y-2 backdrop-blur-md z-30'>
                <Image src={HeroImageOne} alt='hero' />
                <h2 className='text-white font-semibold'>Living of the art</h2>
                <h4 className='text-white'>$ 543,576.13</h4>
            </div> 
           <div className='sm:ml-[-100px] sm:mb-[-200px] hero-Card-Gradient  flex flex-col justify-center items-center gap-2 px-4 py-9 rounded-2xl border-white/40 border-y-2 backdrop-blur-md'>
                <Image src={HeroImageThree} alt='hero' />
                <h2 className='text-white font-semibold'>Living of the art</h2>
                <h4 className='text-white'>$ 543,576.13</h4>
            </div> 
        </div>
    </motion.div>
    </div>
  )
}

export default Hero