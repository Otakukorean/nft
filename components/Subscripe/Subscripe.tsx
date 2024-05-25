import React from 'react'
import HeaderText from '../ui/header'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { MoveRight } from 'lucide-react';

const Subscripe = () => {
  return (
    <div className='flex justify-center items-center flex-col space-y-4 '>
        <div>
                <HeaderText label='Ready for Next NFT Drop?' className='text-center' />
        </div>
        <div className='relative flex justify-center items-center'>
            <Input placeholder='info@gmail.com' type='email' className='bg-transparent py-6 sm:w-[505px] w-[300px] border-[#AD1AAF] border-2 text-white' />
            <Button className='rounded-2xl absolute right-3'>  <MoveRight color='#fff' width={12} height={50} /></Button>
        </div>
    </div>
  )
}

export default Subscripe