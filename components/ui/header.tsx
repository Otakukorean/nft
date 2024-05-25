'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react'
interface HeaderProps {
    label : string ;
    className ?: string
}

const HeaderText = ({className,label} : HeaderProps) => {
  return (
    <h1 className={cn('font-bold sm:text-[64px] text-[32px] text-white',className) }>{label}</h1>
  )
}

export default HeaderText