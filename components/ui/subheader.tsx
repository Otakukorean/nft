import { cn } from '@/lib/utils';
import { Lato } from 'next/font/google'
import React from 'react'
const Font = Lato({
    subsets : ['latin'] ,
    weight : ['100','300']
})


interface SubHeader {
    label : string ;
    className ?: string
}
const SubHeader = ({className,label} : SubHeader) => {
  return (
    <h3 className={cn('text-white/50 text-[20px] font-light ',className,Font.className)}>{label}</h3>
  )
}

export default SubHeader