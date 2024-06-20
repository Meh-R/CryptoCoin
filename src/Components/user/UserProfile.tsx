import { User } from "@/Utils/types";
import React from "react";

export const UserProfile = (userProps: User) => {
  return (
    <div className="bg-gray-100  flex items-center justify-center mt-10 ">
      <div className="relative w-full max-w-lg">
        <div className="p-5 bg-white rounded-lg flex items-center justify-between  min-w-min">
          <div className="flex-1 flex justify-center items-center">
            <div className=" w-1/3 min-w-min bg-gray-300 rounded-lg m-2 p-2">
              Pseudo: {userProps.pseudo}
            </div>
            <div className="w-1/3 min-w-min   bg-gray-300 rounded-lg text-yellow-700 m-2 p-2">
              {Math.round(userProps.dollarAvailables * 100) / 100} $
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
