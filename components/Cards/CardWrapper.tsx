'use client'
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react'

interface CardWrapperProps {
    className ?: string;
    children : React.ReactNode
}

const CardWrapper = ({children,className} : CardWrapperProps) => {
  return (
    <motion.div className={cn('flex justify-center items-center flex-wrap gap-5 px-3',className)}>
        {children}
    </motion.div>
  )
}

export default CardWrapper