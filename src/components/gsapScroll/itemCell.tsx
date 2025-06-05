"use client"

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

type Props = {
    name: string;
    description: string;
    price: string;
    img: string;
    itemRef: any;
}

export const ItemCell = ({ description, name, price, img, itemRef }: Props) => {

    return (
        <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden Item" id={`${itemRef}`}>
            <Image
                className="w-full h-48 object-cover"
                src={`/${img}`}
                alt="Samsung Galaxy S24"
                width={400}
                height={300}
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
                <p className="text-gray-600 mt-2">
                    {description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-green-600">{price}</span>
                    <button className="cursor-pointer px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition duration-300">
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    );
}