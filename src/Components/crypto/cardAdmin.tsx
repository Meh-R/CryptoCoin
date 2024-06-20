import { Crypto } from "@/Utils/types";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { BuyCryptoModal } from "../modales/BuyCryptoModal";
import { IoTrashBinOutline } from "react-icons/io5";
import { deleteCrypto } from "@/Service/crypto";
import toast from "react-hot-toast";

const CardAdmin = ({
  crypto,
  setIsReloadNeeded,
}: {
  crypto: Crypto;
  setIsReloadNeeded: Dispatch<SetStateAction<number>>;
}) => {
  function handleDeleteCrypto() {
    console.log(crypto.id);
    deleteCrypto(crypto.id)
      .then((res) => {
        toast.success("delete successfull");
        setIsReloadNeeded(new Date().getTime());
      })
      .catch((e) => {
        console.log(e);
      });
  }

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
        <div className="text-lg text-center">
          <button
            onClick={() => {
              handleDeleteCrypto();
            }}
            className=" text-white rounded-md text-center p-2 ml-10 "
          >
            <IoTrashBinOutline />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CardAdmin;
