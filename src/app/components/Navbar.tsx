'use client'
import { WorkContext } from '@/context/WorkContext';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext } from 'react';

const Navbar = () => {
    const { savedWorkout, saveLaterWorkout } = useContext(WorkContext);
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
            <Link className='text-white' href='/my-plan'>Plan <span>{savedWorkout.length}</span></Link>
            <Link href='/my-plan' className='text-white'>Saved <span>{saveLaterWorkout.length}</span></Link>
        </div>
      </div>
    );
};

export default Navbar;