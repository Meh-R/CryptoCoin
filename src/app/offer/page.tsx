"use client";

import React, { useEffect, useState } from "react";
import { getAllOffers } from "../../Service/offer";
import { OffersProps, User } from "../../Utils/types";
import { OfferCard } from "@/Components/crypto/OfferCard";
import { myAssets } from "@/Service/user";
import { UserProfile } from "@/Components/user/UserProfile";
import AccordionExpandIcon from "@/Components/modales/Accordion";
import Header from "@/Components/button/Header";
import { ButtonHomePage } from "@/Components/button/ButtonHomePage";
import { Create } from "@/Components/button/Create";

const page = (crypto: Crypto) => {
  const [offersList, setOffersList] = useState<OffersProps[]>();
  const [isReloadNeeded, setIsReloadNeeded] = useState(false);
  const [userElement, setUserElement] = useState<User>();

  useEffect(() => {
    getAllOffers()
      .then((res) => {
        setOffersList(res.data);
        setIsReloadNeeded(false);
      })
      .catch((e) => {
        setIsReloadNeeded(false);
        console.log(e);
      });
  }, [isReloadNeeded]);

  useEffect(() => {
    myAssets()
      .then((res) => {
        setUserElement(res.data);
        setIsReloadNeeded(false);
      })
      .catch((e) => {
        setIsReloadNeeded(false);
        console.log(e);
      });
  }, [isReloadNeeded]);

  return (
    <div className=" bg-gray-100">
      <Header>
        <ButtonHomePage />
        <Create />
      </Header>
      <div className="mb-20 bg-gray-100 ">
        <div>
          {userElement && (
            <UserProfile
              pseudo={userElement.pseudo}
              dollarAvailables={userElement.dollarAvailables}
            />
          )}
        </div>
        <div className="mt-10 bg-gray-100">
          <AccordionExpandIcon
            userElement={userElement}
            setIsReloadNeeded={setIsReloadNeeded}
          />
        </div>
      </div>
      {offersList &&
        offersList?.map((offer) => {
          return (
            <div key={offer.id} className=" bg-gray-100">
              <OfferCard offer={offer} setIsReloadNeeded={setIsReloadNeeded} />
            </div>
          );
        })}
    </div>
  );
};

export default page;
