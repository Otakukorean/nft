import React from 'react'
import HeaderText from '../ui/header'
import { WalletLine , Fluent , IconPark ,BiCollection } from '@/app/assets'
import Image from 'next/image'

const Items = [
    {
        image :WalletLine ,
        label : 'Set up your wallet'
    },
    {
        image :BiCollection ,
        label : 'Create your collection'
    },
    {
        image :Fluent ,
        label : 'Add your NFTs'
    },
    {
        image :IconPark ,
        label : 'List them for sale'
    },
]

const HowToWorks = () => {
  return (
    <div className=' flex justify-center items-center flex-col gap-10 '>
        <div className='sm:hit-bg sm:p-16'>
        <HeaderText label='How it works' className='font-medium text-[42px]' />
        </div>
        <div className='flex justify-center items-center flex-wrap sm:flex-nowrap sm:gap-36 gap-8'>
            {
                Items.map((el,index) => (
                    <div className='flex justify-center items-center flex-col gap-3' key={index}>
                            <div className='hero-Card-Gradient rounded-full p-3'>

                            <Image src={el.image} alt={el.label} width={48} height={48}  />        

                            </div>

                            <div>
                                <h2 className='font-semibold text-white'>{el.label}</h2>
                            </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default HowToWorks