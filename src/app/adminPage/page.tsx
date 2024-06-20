"use client";
import { PromoCode } from "@/Components/PromoCode/PromoCode";
import { ButtonHomePage } from "@/Components/button/ButtonHomePage";
import { ButtonOffer } from "@/Components/button/ButtonOffer";
import Header from "@/Components/button/Header";
import Card from "@/Components/crypto/Card";
import { CardContainer } from "@/Components/crypto/CardContainer";
import { OfferCard } from "@/Components/crypto/OfferCard";
import { OfferCardAdmin } from "@/Components/crypto/OfferCardAdmin";
import CardAdmin from "@/Components/crypto/cardAdmin";
import { CreatPromoModal } from "@/Components/modales/CreatPromoModal";
import { CreateCryptoModale } from "@/Components/modales/CreateCryptoModale";
import { getAllPromo } from "@/Service/code";
import { getAllCrypto, getSearchCoin } from "@/Service/crypto";
import { getAllOffers } from "@/Service/offer";
import { Crypto, OffersProps, promoType } from "@/Utils/types";
import React, { useEffect, useState } from "react";

const page = () => {
  const [promoList, setPromoList] = useState<promoType[]>();
  const [isReloadNeeded, setIsReloadNeeded] = useState(0);
  const [number1, setNumber1] = useState(6);
  const [number2, setNumber2] = useState(6);
  const [number3, setNumber3] = useState(3);
  const [text1, setText1] = useState<string>("");
  const [cryptoList, setCryptoList] = useState<Crypto[]>();
  const [offersList, setOffersList] = useState<OffersProps[]>();

  useEffect(() => {
    getAllOffers()
      .then((res) => {
        setOffersList(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [isReloadNeeded]);

  useEffect(() => {
    getAllPromo()
      .then((res) => {
        setPromoList(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [isReloadNeeded, number2]);

  useEffect(() => {
    getAllCrypto()
      .then((res) => {
        setCryptoList(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [isReloadNeeded]);

  useEffect(() => {
    console.log(text1);
    const timeout = setTimeout(async () => {
      if (text1) {
        const res = await getSearchCoin(text1);
        console.log(res.data);

        setCryptoList(res.data);
      }
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [text1]);

  return (
    <div className="bg-gray-100 flex flex-col ">
      <div>
        <Header>
          <ButtonHomePage />
          <ButtonOffer />
        </Header>
      </div>
      <div className="flex flex-col items-center w-full">
        <div>
          <h2 className="mt-10 text-2xl text-center">Promo code</h2>
          <CreatPromoModal setIsReloadNeeded={setIsReloadNeeded} />
        </div>

        <div className="mt-10 flex flex-col ">
          {promoList &&
            promoList.slice(0, number2).map((element) => {
              return (
                <div>
                  <PromoCode
                    promo={element}
                    setIsReloadNeeded={setIsReloadNeeded}
                  />
                </div>
              );
            })}
        </div>
        <button
          className="bg-white w-40 mt-5 p-5  text-yellow-600"
          onClick={() => {
            setNumber2(number2 + 6);
          }}
        >
          More
        </button>
      </div>

      <hr className="my-10 border-gray-200 dark:border-gray-700 w-5/6 m-auto " />
      <div className="mt-10">
        <h2 className="mt-10 text-2xl text-center">Crypto</h2>
        <CreateCryptoModale setIsReloadNeeded={setIsReloadNeeded} />
        <div className="ml-20 w-1/6 mt-20 items-center border-b-2 border-gray-800 py-2">
          <input
            onChange={(e: any) => {
              setText1(e.target.value);
            }}
            value={text1}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search crypto"
          />
        </div>
        <CardContainer text={"Public crypto"}>
          {cryptoList &&
            cryptoList.slice(0, number1).map((element) => {
              return (
                <div className="w-full" key={element.id}>
                  <CardAdmin
                    crypto={element}
                    setIsReloadNeeded={setIsReloadNeeded}
                  />
                </div>
              );
            })}
          <button
            className="bg-white w-40 mt-5 p-5  text-yellow-600"
            onClick={() => {
              setNumber1(number1 + 6);
            }}
          >
            More
          </button>
        </CardContainer>
      </div>
      <div className="flex flex-col items-center">
        <hr className="my-20 border-gray-200 dark:border-gray-700 w-5/6 m-auto " />
        <h2 className="mt-10 text-2xl text-center">All offer</h2>
        {offersList &&
          offersList?.slice(0, number3).map((offer) => {
            return (
              <div key={offer.id} className="w-full bg-gray-100">
                <OfferCardAdmin
                  offer={offer}
                  setIsReloadNeeded={setIsReloadNeeded}
                />
              </div>
            );
          })}
        <div className="flex flex-col items-center w-full">
          <button
            className="bg-white w-40 mt-5 p-5  text-yellow-600"
            onClick={() => {
              setNumber3(number3 + 3);
            }}
          >
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
