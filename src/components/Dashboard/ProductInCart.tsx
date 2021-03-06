import React from "react";

import "../../pages/Dashboard/Cart/cart.css";

import Icons from "../Icons";

import trash from "../../assets/icons/trash-2.svg";
import circleChevronDown from "../../assets/icons/circle_chevron_down.svg";
import cake from "../../assets/images/about-1.png";

interface Props {
    rounded?: string;
}

export default function ProductInCart({ rounded }: Props) {
    return (
        <>
            <div className={`bg-dark-bg ${rounded}`}>
                <label htmlFor="item1" className="cart-custom-checkbox">
                    <input
                        className="cart-checkbox"
                        type="checkbox"
                        id="item1"
                        name="item1"
                        value="item1"
                    />
                    <span className="checkmark" style={{ top: "58px" }}></span>
                </label>
                <div className="text-lg py-7 pl-20 pr-5 flex justify-between items-center">
                    <div className="basis-4/12 flex space-x-[27px] items-center">
                        <img
                            className="w-[132px] h-[86px] object-cover rounded-lg"
                            src={cake}
                            alt="cake"
                        />
                        <div>
                            <div className="text-primary">Meringue tart</div>
                            <div className="text-sm">Filling: Chocolate</div>
                        </div>
                    </div>
                    <div className="flex justify-between basis-6/12 text-sm text-center">
                        <div className="basis-3/12 flex justify-center items-center space-x-3">
                            <p>M</p>
                            <img
                                src={circleChevronDown}
                                alt="circle chevron down"
                            />
                        </div>
                        <div className="basis-3/12 flex justify-center space-x-3">
                            <button>
                                <Icons.Minus stroke="#F3A446" />
                            </button>
                            <p>2</p>
                            <button>
                                <Icons.Plus stroke="#F3A446" />
                            </button>
                        </div>
                        <div className="basis-3/12">80.000 VND</div>
                        <div className="basis-3/12">160.000 VND</div>
                    </div>
                    <div className="basis-1/12 justify-end flex">
                        <img src={trash} alt="trash" />
                    </div>
                </div>
            </div>
        </>
    );
}
