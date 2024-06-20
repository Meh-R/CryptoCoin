"use client";
import { ButtonOffer } from "@/Components/button/ButtonOffer";
import { Create } from "@/Components/button/Create";
import Header from "@/Components/button/Header";

import Card from "@/Components/crypto/Card";
import { CardContainer } from "@/Components/crypto/CardContainer";
import Footer from "@/Components/footer/Footer";
import AccordionExpandIcon from "@/Components/modales/Accordion";
import { UserProfile } from "@/Components/user/UserProfile";
import { getAllCrypto, getSearchCoin } from "@/Service/crypto";
import { myAssets } from "@/Service/user";
import { Crypto, User } from "@/Utils/types";
import React, { useEffect, useState } from "react";

const page = () => {
  const [cryptoList, setCryptoList] = useState<Crypto[]>();
  const [userElement, setUserElement] = useState<User>();

  const [isReloadNeeded, setIsReloadNeeded] = useState(0);
  const [text1, setText1] = useState<string>("");

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
    myAssets()
      .then((res) => {
        setUserElement(res.data);
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
    <div className=" bg-gray-100">
      <Header>
        <ButtonOffer />
        <Create />
      </Header>

      <div className="mb-10 bg-gray-100 ">
        {userElement && (
          <UserProfile
            pseudo={userElement.pseudo}
            dollarAvailables={userElement.dollarAvailables}
          />
        )}
      </div>
      <div className="  bg-gray-100">
        <AccordionExpandIcon
          userElement={userElement}
          setIsReloadNeeded={setIsReloadNeeded}
        />
      </div>
      <div className="">
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
            cryptoList.map((element) => {
              return (
                <div className="w-full" key={element.id}>
                  <Card
                    crypto={element}
                    isBuyVisible={true}
                    setIsReloadNeeded={setIsReloadNeeded}
                  />
                </div>
              );
            })}
        </CardContainer>
      </div>
    </div>
  );
};

export default page;
