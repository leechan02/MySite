"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NavItemProps {
  text: string;
  onClick: () => void;
}

const NavItem = ({ text, onClick }: NavItemProps) => (
  <div
    className={`w-[64px] py-2 rounded-full justify-center items-center flex cursor-pointer text-primary`}
    onClick={onClick}
  >
    <div className='text-center text-xs font-semibold font-mono'>
      {text}
    </div>
  </div>
);

export default function NavBar() {
  const [selected, setSelected] = useState('Work');

  return (
    <div className='p-1 bg-primary/5 rounded-full shadow border-2 border-primary/10 backdrop-blur-[15px] justify-start items-center gap-1 inline-flex relative'>
      <motion.div
        className='absolute w-[64px] h-[32px] bg-primary/5 rounded-full'
        initial={false}
        animate={{
          x: selected === 'Work' ? 0 : 65,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
      />
      <NavItem
        text="Work"
        onClick={() => setSelected('Work')}
      />
      <NavItem
        text="Info"
        onClick={() => setSelected('Info')}
      />
    </div>
  );
}