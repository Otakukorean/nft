import React from 'react'
import HeaderText from '../ui/header'
import SubHeader from '../ui/subheader'
import {Nft1,Nft2,Nft3,Nft4,Nft5,Nft6,Nft7} from '@/app/assets'
import Image from 'next/image'

const Collection = () => {
  return (
    <div className='flex justify-center items-center flex-col '>
        {/* Headers */}
        <div className='text-center flex justify-center items-center gap-3 flex-col'>
            <SubHeader label='Explore our newly released NFT collection ' className='pink-text-gradient font-semibold' />
            <HeaderText label='Our collection' className='uppercase' />
        </div>
        {/* Cards */}

        <div className='flex justify-center items-center flex-wrap sm:flex-nowrap gap-3'>
            <Image src={Nft5} className='border-[#F81DFB] border-2 sm:mr-[-100px] sm:w-[225px] sm:h-[300px]' height={300} width={300} alt='nft' />
            <Image src={Nft6} className='border-[#F81DFB] border-2 sm:mr-[-100px] sm:w-[285px] sm:h-[380px]' height={300} width={300} alt='nft' />
            <Image src={Nft1} className='border-[#F81DFB] border-2 sm:mr-[-100px] sm:w-[348px] sm:h-[464px]' height={200} width={300} alt='nft' />
            <Image src={Nft2} className='border-[#F81DFB] border-2 sm:w-[408px] sm:h-[544px] z-30' height={300} width={300} alt='nft' />
            <Image src={Nft3} className='border-[#F81DFB] border-2 sm:ml-[-100px] sm:w-[348px] sm:h-[464px] z-20' height={300} width={300} alt='nft' />
            <Image src={Nft4} className='border-[#F81DFB] border-2 sm:ml-[-100px] sm:w-[285px] sm:h-[380px] z-10' height={300} width={300} alt='nft' />
            <Image src={Nft7} className='border-[#F81DFB] border-2 sm:ml-[-100px] sm:w-[225px] sm:h-[300px]'  height={300} width={300} alt='nft' />




        </div>
    </div>
  )
}

export default Collection