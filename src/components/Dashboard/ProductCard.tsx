import React from "react";

import cake from "../../assets/images/products/cake-1.png";
import cartIcon from "../../assets/icons/cart.svg";

export default function ProductCard() {
    return (
        <div className="w-[204px] h-[245px] px-6 py-5 bg-dark-bg rounded-lg text-left text-sm">
            <img className="h-[117px] object-cover" src={cake} alt="cake" />
            <div className="pt-4">60.000 VND</div>
            <div className="flex justify-between items-center pt-2">
                <div className="font-medium text-primary">Meringue Tart</div>
                <button className="border border-primary bg-primary pl-2 pr-2.5 py-1 h-max rounded-md flex items-center">
                    <img className="mr-1" src={cartIcon} alt="cart icon" />
                    Add
                </button>
            </div>
        </div>
    );
}