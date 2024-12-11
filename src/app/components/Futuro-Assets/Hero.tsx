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
        {/* Logo */}
        <div className="absolute top-4 left-4 md:top-8 md:left-8 z-10 w-32 md:w-40">
          <Image 
            src="/FuturoHealth.png"
            alt="Futuro Health Logo"
            width={160}
            height={80}
            className="w-full h-auto"
          />
        </div>

        {/* Background Image */}
        <Image 
          src="/futuro-hero.png"
          alt="Futuro Health Hero"
          fill
          className="object-cover"
          priority
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-blue-900/30">
          <div className="max-w-7xl mx-auto h-full flex flex-col justify-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white max-w-3xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Building Healthcare Careers
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Transforming communities through accessible healthcare education and career development
              </p>
            </motion.div>
          </div>
        </div>

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
              <MoveDown className="h-6 w-6 text-white" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
