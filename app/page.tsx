'use client';
import Collection from "@/components/Collection/Collection";
import Hero from "@/components/Hero/Hero";
import HowToWorks from "@/components/Hit/HowToWorks";
import Info from "@/components/Info/Info";
import Subscripe from "@/components/Subscripe/Subscripe";
import Trend from "@/components/Trend/Trend";
import { motion , useInView ,useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
export default function Home() {
  const ref = useRef(null)
  const isInView = useInView(ref , {once : true})

  const mainControls = useAnimation();
  useEffect(() => {
    if(isInView){
      mainControls.start('visible')
    }
  },[isInView])

  return (
    <div ref={ref}>

    
    <motion.main 
    className="sm:space-y-[300px] space-y-36"
    variants={{
      hidden : {opacity : 0 , y :75},
      visible : {opacity : 1 , y : 0}
    }}
    initial='hidden'
    animate={mainControls}
    transition={{duration : 0.5 , delay : 0.25}}
    >
     
      <Hero/>
      <Info/>
      <HowToWorks />
      <Collection />
      <Trend/>
      <Subscripe />
    </motion.main>
    </div>
  );
}
