import Image from "next/image";
import React from "react";

export const Main = () => {
  return (
    <div className="h-screen bg-ImgMain bg-cover">
      <section className="">
        <div className=" text-white py-20">
          <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
            <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
              <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">
                CryptoCoin
              </h1>
              <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
                Buying and exchanging cryptocurrency
              </h2>

              <a
                href="./register"
                className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
              >
                SignUp/Login
              </a>
            </div>
            <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center"></div>
          </div>
        </div>
      </section>
    </div>
  );
};
