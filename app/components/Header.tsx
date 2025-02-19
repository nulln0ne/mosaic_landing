"use client"

import Image from 'next/image';
import Logo from '../../public/logo.svg';
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/70 backdrop-blur-md' : 'bg-transparent'}`}
    >
      <nav className="w-[70%] mx-auto">
        <ul className="flex gap-2 py-4 justify-between text-[#272A29] font-bold items-center">
          <Image src={Logo} alt='mosaic logo' width={35} />
          <div className="flex gap-6">
          </div>
          <a
            href='#contacts'
            className='px-3 py-1 bg-green-300 rounded-full relative 
                       after:content-[""] after:absolute after:inset-[-8px] 
                       after:rounded-full after:border-black 
                       after:border-dashed after:border-[3px] text-lg'
          >
            Get in touch
          </a>
        </ul>
      </nav>
    </header>
  );
}