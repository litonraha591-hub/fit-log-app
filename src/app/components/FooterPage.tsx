import Image from "next/image";
import React from "react";

const FooterPage = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 justify-between bg-black text-white py-4 px-2">
    
      <div className="flex gap-2">
        <Image src="/SVG.png" height={15} width={15} alt="footerLogo"></Image>
        <h1>FITLOG</h1>
      </div>
      <div className="grid justify-end">
        <p> © 2026 FitLog — Workout Library. Train hard, log honest.</p>
      </div>
    </div>
  );
};

export default FooterPage;
