"use client";
import { WorkContext } from "@/context/WorkContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";

const Navbar = () => {
  const { savedWorkout, saveLaterWorkout } = useContext(WorkContext);
  const pathname = usePathname();
  return (
    <div className="bg-black py-3 px-4">
      <div className="container mx-auto flex flex-col gap-3 md:grid  md:grid-cols-3 md:items-center">
        <div className="flex items-center justify-center gap-2 md:justify-start">
          <Image src="/logo.png" height={28} width={28} alt="logo"></Image>
          <Link
            href="/"
            className="font-[var(--font-oswald)] text-xl font-bold text-white"
          >
            FITLOG
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "rounded-md bg-[#54585f] px-3 py-1 font-bold text-[#C2F800]"
                : " px-3 py-1 text-gray-400 font-bold"
            }
          >
            {" "}
            Workouts
          </Link>
          <Link
            href="/my-plan"
            className={
              pathname === "/my-plan"
                ? " rounded-md bg-[#54585f] px-3 py-1 font-bold text-[#C2F800]"
                : "px-3 py-1 text-gray-400 font-bold"
            }
          >
            My Plan
          </Link>
        </div>
        <div className="flex justify-center gap-4 md:justify-end ">
          <Link className=" font-bold text-gray-400" href="/my-plan">
            Plan{" "}
            <span className="bg-[#C2F800] text-black px-1.5 py-0.5 rounded-full">
              {savedWorkout.length}
            </span>
          </Link>
          <Link href="/my-plan" className="text-gray-400 font-bold">
            Saved{" "}
            <span className="bg-[#C2F800] text-black px-1.5 py-0.5 rounded-full">
              {saveLaterWorkout.length}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
