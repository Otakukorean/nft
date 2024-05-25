import { Logo,Twitter,FaceBook,Youtube,Google } from '@/app/assets'
import Image from 'next/image'
import React from 'react'
import SubHeader from '../ui/subheader'

const Footer = () => {
  return (
    <footer className='hero-Card-Gradient h-full w-full backdrop-blur-lg flex justify-center p-20 items-start flex-wrap mt-[300px] sm:flex-nowrap  sm:gap-[160px] gap-[60px]'>
        {/* Logo */}
        <div>
            <Image src={Logo} width={260} height={93} alt='logo' />
        </div>
        {/* Content */}
        <div className='flex justify-center items-start sm:gap-[139px] gap-[60px] sm:flex-nowrap flex-wrap'>
            <div className='flex flex-col justify-center sm:items-start items-center gap-12'>
            <SubHeader className='text-[20px] max-w-96 font-light sm:text-left text-center' label='Shihami is the world’s leading NFTs marketplace where you can discover, sell and bid NFTs and get rich ' />    
            <div className='flex justify-center sm:items-start gap-6'>
            <Image src={Youtube} width={37} height={26} alt='logo' />
            <Image src={Twitter} width={32.98} height={26} alt='logo' />
            <Image src={FaceBook} width={14.1} height={26} alt='logo' />
            <Image src={Google} width={28.19} height={26} alt='logo' />
            </div>
            <SubHeader label='All rights reserved @Faizansayani' className='text-[20px] max-w-96 font-light sm:text-left text-center'  />    

            </div>
            <div className='flex sm:justify-center  items-center sm:gap-[139px] gap-[35px]  sm:flex-nowrap '>
                <div className='space-y-4'>
                    <h2 className='text-white text-[24px] font-bold'>About</h2>  
                    <ul className='space-y-4'>
                        <li className='text-white/70 text-[20px]'>About NFT</li>
                        <li className='text-white/70 text-[20px]'>Live Auctions</li>
                        <li className='text-white/70 text-[20px]'>NFT Blog</li>
                        <li className='text-white/70 text-[20px]'>Activity</li>
                    </ul>
                </div>
                <div className='space-y-4'>
                <h2 className='text-white text-[24px] font-bold'>Support</h2>  
                    <ul className='space-y-4'>
                        <li className='text-white/70 text-[20px]'>Help & Support</li>
                        <li className='text-white/70 text-[20px]'>Item Details </li>
                        <li className='text-white/70 text-[20px]'>Author Profile</li>
                        <li className='text-white/70 text-[20px]'>Collection</li>
                    </ul> 
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer