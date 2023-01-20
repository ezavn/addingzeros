import React from "react";

export default function Hero() {
  return (
    <section className="bg-[url('../public/images/hero-bg.png')] bg-center bg-no-repeat bg-cover md:pt-[160px] md:pb-[200px] pt-[100px] pb-[120px]">
      <div className="page-container-fluid px-[20px] relative">
        <div className="text-right mr-[790px]">
          <h3 className="hero-title font-bold text-[36px] md:text-[96px] text-[#FFCF01] leading-[1]">
            Seminar
          </h3>
          <h1 className="hero-title1">
            Adding<span>ZEROS</span>
          </h1>
          <h3 className="hero-title2">NETWORK</h3>
          <div className="text-white mt-[50px] md:mt-[70px] text-left md:text-right w-[300px] md:w-full">
            <p className="text-[18px] md:text-[24px] font-bold uppercase leading-[1] mb-[-10px]">
              Thời gian
            </p>
            <div className="inline-flex justify-end w-[200px] md:w-[520px] h-[2px] bg-[#60EFFF]"></div>
            <p className="text-[32px] md:text-[64px] font-bold leading-[1]">
              8h - 12h
            </p>
            <p className="text-[18px] md:text-[24px] font-medium">
              ngày 17/02/2023
            </p>
            <p className="text-[18px] md:text-[24px] font-medium">
              hoặc ngày 24/02/2023
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-[50%] md:top-[157px] right-0">
        <img
          className="object-cover h-[200px] md:h-auto"
          src="/images/hero-coach.png"
          alt=""
        />
      </div>
    </section>
  );
}
