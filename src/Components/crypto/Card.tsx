import { Crypto } from "@/Utils/types";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { BuyCryptoModal } from "../modales/BuyCryptoModal";
import { StatModal } from "../modales/StatModal";

const Card = ({
  crypto,
  isBuyVisible,
  setIsReloadNeeded,
}: {
  crypto: Crypto;
  isBuyVisible: boolean;
  setIsReloadNeeded: Dispatch<SetStateAction<number>>;
}) => {
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
      <td className="p-2 whitespace-nowrap w-1/4 ">
        <div className="text-left">Quantity: {crypto.quantity}</div>
      </td>
      <td className="p-2 whitespace-nowrap w-1/4">
        <div className="text-left font-medium text-yellow-700">
          Value: {Math.round(crypto.value * 100) / 100}
        </div>
      </td>
      <td className="p-2 whitespace-nowrap w-1/4">
        <div className="text-lg text-center flex flex-row">
          <StatModal crypto={crypto} isBuyVisible={isBuyVisible} />
          <BuyCryptoModal
            crypto={crypto}
            isBuyVisible={isBuyVisible}
            setIsReloadNeeded={setIsReloadNeeded}
          />
        </div>
      </td>
    </tr>
  );
};

export default Card;
