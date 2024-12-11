'use client';

import React from 'react';
import { MoveDown } from 'lucide-react';
import { motion } from "framer-motion";
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <div 
        className="w-full h-full relative"
      >
        <Image 
          src="/fathers-uplift-hero.png"
          alt="2023 Annual Report Hero"
          fill
          className="object-contain md:object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="absolute top-0 left-0 p-8 md:p-16">
          <div className="text-white">
            <h1 className="text-6xl md:text-8xl font-bold">2023</h1>
            <p className="text-2xl md:text-4xl mt-2">ANNUAL REPORT</p>
          </div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <MoveDown className="h-8 w-8 text-white" />
      </motion.div>
    </div>
  );
};

export default Hero; 