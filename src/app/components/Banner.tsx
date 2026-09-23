import Image from "next/image";
import React from "react";

const BannerPage = () => {
  return (
   <div className="grid grid-cols-2 justify-between items-center bg-black text-white container mx-auto">
     <div className="space-y-3  ml-15">
      <h1 className="text-[#C2F800] text-2xl" >WORKOUT LIBRARY</h1>
      <h2 className="text-5xl">TRAIN WITH INTENT. <br /> LOG EVERY SET.</h2>
      <p>
        FitLog is a dark, no-nonsense gym companion: pick a lift, lock  <br />it into
        today's plan, and watch the week's work add up.
      </p>
      <button>BROWSE WORKOUTS</button>
    </div>
    <div className=" flex justify-center">
        <Image src='/banner.png' height={500} width={300} alt="heroImage"></Image>
    </div>
   </div>
  );
};

export default BannerPage;
