import React from "react";

import Navbar from "../Navbar";

import roller from "../../assets/images/roller.png";

export default function HeroSection() {
    return (
        <div className="w-screen h-screen navbar">
            <Navbar />
            {/* <Carousel /> */}
            <div>
                <div className="font-title text-[144px] pt-44">
                    Pastry with love
                </div>
                <div className="text-2xl w-[33rem] mx-auto pb-8">
                    We're bringing you fresh ingredients everyday in ways you
                    can't resist
                </div>
                <button className="border border-primary bg-primary px-5 py-2.5 rounded-md w-fit">
                    Shop now
                </button>
            </div>
            <div className="pt-[18.5rem]">
                <img className="mx-auto" src={roller} alt="dough roller" />
            </div>
        </div>
    );
}