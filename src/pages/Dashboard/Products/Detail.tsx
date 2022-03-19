import React from "react";
import { Link } from "react-router-dom";

import Icons from "../../../components/Icons";

import ava from "../../../assets/images/blog/detail/detail-1.png";
import creme from "../../../assets/images/creme.png";
import cake from "../../../assets/images/blog-2.png";

import arrowLeft from "../../../assets/icons/arrow-left.svg";

export default function Detail() {
    return (
        <>
            <div
                className="w-full pl-40 text-white py-9 pr-16 flex items-center"
                style={{ backgroundColor: "#272727" }}
            >
                <div className="basis-9/12">
                    <div className="text-2xl font-semibold pb-1">Dashboard</div>
                    <div className="text-sm">Tuesday, 2 Nov 2021</div>
                </div>
                <div className="flex items-center basis-3/12">
                    <div className="border border-primary rounded py-1 pl-3.5 pr-1.5 mr-8 flex items-center space-x-1">
                        <p>EN</p>
                        <Icons.ChevronDown stroke="white" />
                    </div>
                    <div className="flex items-center space-x-4">
                        <img
                            className="w-14 h-14 object-cover rounded-full"
                            src={ava}
                            alt="ava"
                        />
                        <p>Latte</p>
                    </div>
                </div>
            </div>
            <div className="ml-40 text-white flex pr-16 pb-6 pt-14 space-x-[42px]">
                <div className="basis-9/12">
                    <div className="flex space-x-[27.5px] text-lg">
                        <img src={arrowLeft} alt="arrow left" />
                        <div>
                            <Link to="/dashboard">Dashboard</Link>
                            &nbsp;/&nbsp;
                            <Link to="/blog" className="text-primary">
                                Meringue Tart
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row w-full">
                            <div className="basis-5/12">
                                <img
                                    className="w-[17.5rem] h-[17.5rem] object-cover rounded-lg"
                                    src={cake}
                                    alt="cake"
                                />
                            </div>
                            <div className="basis-7/12 flex flex-col">
                                <div className="text-primary font-medium">
                                    Meringue Tart
                                </div>
                                <p className="text-xl">80.000 VND</p>
                                <p className="pt-4 text-sm">Size</p>
                                <div className="text-sm text-primary pt-3 flex space-x-3">
                                    <button className="border border-primary rounded-full py-1 px-4 w-max">
                                        Size S
                                    </button>
                                    <button className="border border-primary rounded-full py-1 px-4 w-max">
                                        Size M
                                    </button>
                                    <button className="border border-primary rounded-full py-1 px-4 w-max">
                                        Size L
                                    </button>
                                </div>
                                <p className="pt-4 text-sm">Filling</p>
                                <div className="text-sm text-primary pt-3 flex space-x-3">
                                    <button className="bg-dark-bg rounded-lg text-left py-3 px-2.5 w-[136px] h-[103px]">
                                        Butter
                                        <img
                                            className="h-[60px] w-full object-cover pt-1"
                                            src={creme}
                                            alt="creme"
                                        />
                                    </button>
                                    <button className="bg-dark-bg rounded-lg text-left py-3 px-2.5 w-[136px]">
                                        Chocolate
                                        <img
                                            className="h-[60px] w-full object-cover pt-1"
                                            src={creme}
                                            alt="creme"
                                        />
                                    </button>
                                    <button className="bg-dark-bg rounded-lg text-left py-3 px-2.5 w-[136px]">
                                        Crème
                                        <img
                                            className="h-[60px] w-full object-cover pt-1"
                                            src={creme}
                                            alt="creme"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-end pt-9">
                            <button className="border border-primary text-primary px-6 py-1.5 ml-6 rounded-md w-fit">
                                Add to cart
                            </button>
                            <button className="font-medium border border-primary bg-primary px-8 py-1.5 ml-6 rounded-md w-fit">
                                Buy now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="basis-3/12">abc</div>
            </div>
        </>
    );
}
