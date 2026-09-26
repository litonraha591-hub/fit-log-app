import Image from "next/image";
import React from "react";

const FooterPage = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto grid grid-cols-1 items-center gap-3 px-4 py-4 md:grid-cols-2">
        <div className="flex items-center justify-center gap-2 md:justify-start">
          <Image src="/logo.png" height={18} width={18} alt="footerLogo"></Image>
          <h1 className="font-bold">FITLOG</h1>
        </div>
        <div className="text-center md:text-right">
          <p className="text-sm text-gray-400"> © 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
