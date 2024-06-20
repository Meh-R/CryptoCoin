import { deletePromo, getAllPromo } from "@/Service/code";
import { promoType } from "@/Utils/types";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoTrashBinOutline } from "react-icons/io5";
import { MdBrowserUpdated } from "react-icons/md";
import { UpdatePromoModale } from "../modales/UpdatePromoModale";

export const PromoCode = ({
  promo,
  setIsReloadNeeded,
}: {
  promo: promoType;
  setIsReloadNeeded: React.Dispatch<React.SetStateAction<number>>;
}) => {
  function handleDeletePromo() {
    deletePromo(promo.id)
      .then((res) => {
        toast.success("delete successfull");
        setIsReloadNeeded(new Date().getTime());
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="bg-gray-100  flex items-center justify-center ">
      <div className="relative w-full max-w-lg">
        <div className="p-5 bg-white  flex items-center justify-between space-x-8">
          <div className="flex-1 flex justify-center items-center">
            <div className=" w-1/3 bg-gray-300 rounded-lg m-2 p-2 min-w-min">
              Name: {promo.name}
            </div>
            <div className="w-1/3 min-w-min rounded-lg bg-gray-300  text-yellow-700 m-2 p-2">
              Value: {promo.value}
            </div>
            <button
              onClick={() => {
                handleDeletePromo();
              }}
              className=" text-white rounded-md text-center p-2 ml-10 "
            >
              <IoTrashBinOutline />
            </button>
            <button className=" text-white rounded-md text-center p-2  ">
              <UpdatePromoModale
                promo={promo}
                setIsReloadNeeded={setIsReloadNeeded}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
