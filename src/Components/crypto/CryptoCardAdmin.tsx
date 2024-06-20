import React from "react";

import { Crypto } from "@/Utils/types";
import { BuyCryptoModal } from "../modales/BuyCryptoModal";
import Image from "next/image";
import { CardContainer } from "./CardContainer";

export const CryptocardAdmin = ({ crypto }: { crypto: Crypto }) => {
  return (
    <tr className="w-full flex flex-row">
      <td className="p-2 whitespace-nowrap w-1/4">
        <div className="flex items-center">
          <div className="w-10 h-10  mr-2 sm:mr-3">
            <Image
              src={crypto.image}
              alt="Coin image"
              width={40}
              height={40}
              className="mb-3  w-[40px] h-[40px] rounded-full object-cover"
            />
          </div>
          <div className="font-medium text-gray-800">{crypto.name}</div>
        </div>
      </td>

      <td className="p-2 whitespace-nowrap w-1/4">
        <div className="text-left flex ml-2.5 mt-2.5 font-medium text-yellow-700">
          Value: {Math.round(crypto.value * 100) / 100}
        </div>
      </td>
      <td className="p-2 whitespace-nowrap w-1/4">
        <div className="text-left flex  mt-2.5 font-medium text-yellow-700"></div>
      </td>
    </tr>
  );
};
