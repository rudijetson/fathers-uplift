'use client';

import React from 'react';
import { MoveDown } from 'lucide-react';
import { motion } from "framer-motion";
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative w-full">
      <div 
        className="w-full relative aspect-[4/5] md:aspect-[21/9]"
      >
        {/* Logo - Only show on mobile */}
        <div className="absolute top-4 left-4 md:top-8 md:left-8 z-10 w-24 md:w-32 lg:hidden">
          <Image 
            src="/fathers-uplift-logo.png"
            alt="Fathers Uplift Logo"
            width={128}
            height={64}
            className="w-full h-auto"
          />
        </div>

        {/* Mobile Image */}
        <Image 
          src="/fathers-uplift-mobile.png"
          alt="Fathers Uplift Hero"
          fill
          className="object-cover md:hidden"
          priority
        />
        
        {/* Desktop Image */}
        <Image 
          src="/Fathers-Uplift-Hero.png"
          alt="Fathers Uplift Hero"
          fill
          className="hidden md:block object-cover"
          priority
        />

        {/* Scroll Arrow - Desktop Only */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0">
          <div className="relative h-16 flex items-center justify-center">
            <motion.div 
              animate={{
                y: [0, 8, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <MoveDown className="h-6 w-6 text-black" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 