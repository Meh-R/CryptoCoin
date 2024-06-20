import React, { Dispatch, SetStateAction } from "react";
import { OffersProps } from "../../Utils/types";
import { Cryptocard } from "./Cryptocard";
import { buyOffer } from "@/Service/offer";
import toast from "react-hot-toast";

export const OfferCard = ({
  offer,
  setIsReloadNeeded,
}: {
  offer: OffersProps;
  setIsReloadNeeded: Dispatch<SetStateAction<boolean>>;
}) => {
  function handleCryptoBuyViaOffer(offerId: string) {
    buyOffer(offerId)
      .then((res) => {
        if (res.data) {
          if (res.status === 204) {
            toast.error("Item already sold");
          }

          if (res.status === 201) {
            toast.success("Success");
            setIsReloadNeeded(true);
          }
        }
      })
      .catch((e) => {
        if (e) {
          toast.error("error");
          console.log(e);
        }
      });
  }

  return (
    <div className="flex justify-center bg-grey-100">
      <section className="antialiased bg-grey-100 text-gray-600  w-3/6">
        <div className="flex flex-col justify-center  h-full">
          <div className=" m-5 w-full rounded-lg mx-auto bg-white shadow-lg  border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">
                Seller: {offer.User.pseudo}
              </h2>
              <p>Number of tokens: {offer.amount}</p>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr className="flex flex-row justify-start">
                      <th className="p-2 whitespace-nowrap w-1/4">
                        <div className="font-semibold text-left">Crypto</div>
                      </th>

                      <th className="p-2 whitespace-nowrap w-1/4">
                        <div className="font-semibold text-left">Value</div>
                      </th>
                      <th className="p-2 whitespace-nowra w-1/4">
                        <div className="font-semibold text-center"></div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100 w-full">
                    <Cryptocard crypto={offer.Crypto} />
                    <div className="w-full flex justify-end">
                      <button
                        className="bg-white text-center rounded-lg text-yellow-700 w-20 p-1 text-sm mt-1"
                        onClick={() => {
                          handleCryptoBuyViaOffer(offer.id);
                        }}
                      >
                        Buy
                      </button>
                    </div>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
