import Image from "next/image";
import React from "react";

const BannerPage = () => {
  return (
  <div className=" bg-gray-800 text-white">
     <div className=" container mx-auto grid grid-cols-1 items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-16 ">
     <div className="space-y-5 text-center md:text-left">
     <p className="text-lg font-semibold text-[#C2F800] md:text-2xl "  >WORKOUT LIBRARY</p>
      <h2 className="text-3xl font-bold leading-light md:text-5xl">TRAIN WITH INTENT. <br /> LOG EVERY SET.</h2>
      <p className="text-sm text-gray-300 md:text-base">
        FitLog is a dark, no-nonsense gym companion: pick a lift, lock  <br />it into
        today&apos;s plan, and watch the week&apos;s work add up.
      </p>
      <a href="#library" className=" inline-block rounded-md bg-[#C2F800] px-5 py-4 text-lg font-semibold  text-black transition hover:opacity-90 "  >BROWSE WORKOUTS</a>
    </div>
    <div className=" flex justify-center">
        <Image src='/banner.png' height={550} width={380} alt="heroImage" className="h-auto w-full max-w-[280px] md:max-w[380px]"></Image>
    </div>
   </div>
  </div>
  );
};

export default BannerPage;
