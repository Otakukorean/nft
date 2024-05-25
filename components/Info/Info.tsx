import React from 'react'
import SubHeader from '../ui/subheader'
import HeaderText from '../ui/header'

import { MetaMsk,Binance,Trust_wallet,Alpha,CoinGecko } from '@/app/assets'
import Image from 'next/image'

const Data = [
    {
        image : MetaMsk ,
        label : 'MetaMsk'
    },
    {
        image : Binance ,
        label : 'Binance'
    },
    {
        image : Trust_wallet ,
        label : 'Trust Wallet'
    },
    {
        image : Alpha ,
        label : 'Alpha'
    },
    {
        image : CoinGecko ,
        label : 'CoinGecko'
    },

]

const Info = () => {
  return (
    <div className='flex justify-center items-center gap-6 flex-col '>
        {/* details */}
        <div className='text-center flex justify-center items-center gap-3 flex-col'>
            <SubHeader label='Trade with world’s most trusted and fastest wallets' className='pink-text-gradient font-semibold' />
            <HeaderText label='wallets we support' className='uppercase' />
        </div>
        {/* Wallets */}
        <div className='flex justify-center items-center sm:flex-nowrap flex-wrap gap-4'>
            {
                Data.map((el,index) => (
                    <div className='hero-Card-Gradient p-11 w-full rounded-lg flex justify-between items-center flex-col gap-4' key={index}>
                            <div className='hero-Card-Gradient p-5 rounded-full backdrop-blur-md'>
                                <Image src={el.image} alt={el.label} className='sm:w-[114px] sm:h-[113px]' width={100} height={100} />
                            </div>

                            <div>
                                <h2 className='text-[20px] text-white font-medium'>{el.label}</h2>
                            </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Info