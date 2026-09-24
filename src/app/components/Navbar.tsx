'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
     const pathname = usePathname();
    return (
      <div className='container mx-auto grid grid-cols-3 items-center bg-black py-3 px-2'>
          <div className='flex gap-2'>
           <Image src='/logo.png'  height={25} width={25} alt='logo'>
            </Image>
            <h1 className='font-[var(--font-oswald)]  font-bold text-white'>FITLOG</h1>
        </div>
        <div className='flex justify-center gap-2'>
           <Link href='/'  className={pathname === "/" ? " text-[#C2F800]" : "text-white"}> Workouts</Link>
           <Link href='/my-plan' className={pathname === "/my-plan" ? " text-[#C2F800]" : "text-white"}>My Plan</Link>
        </div>
        <div className='flex justify-end gap-2 '>
            <h1 className='text-white'>Plan</h1>
            <h1 className='text-white'>Saved</h1>
        </div>
      </div>
    );
};

export default Navbar;