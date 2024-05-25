'use client'
import React from 'react'
import SubHeader from '../ui/subheader'
import HeaderText from '../ui/header'
import { Button } from '../ui/button'
import {Nft1,Nft2,Nft3,Nft4,Nft5,Nft6,Nft7} from '@/app/assets'
import CardWrapper from '../Cards/CardWrapper'
import Card from '../Cards/Card'

const  Images = [Nft1,Nft2,Nft3,Nft4,Nft5,Nft6,Nft7,Nft7]
const Trend = () => {
  return (
    <div className='space-y-3'>
        <div className='flex justify-between items-end'>
            <div className='space-y-3'>
                <SubHeader label='Most Appreciated NFTs On Sale For the day' />
                <HeaderText label='Live Auction nFTs ' />
            </div>
            <div>
                <Button variant={'secondary'} className='py-5 px-8'>View All</Button>
            </div>
        </div>
        <div className='px-4'>

   
        <CardWrapper >
            {
                Images.map((el,index) => (
                    <Card index={index} image={el.src} key={index} />
                ))
            }
        </CardWrapper>
        </div>
    </div>
  )
}

export default Trend