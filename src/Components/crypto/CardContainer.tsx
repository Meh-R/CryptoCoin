import React, { Children } from "react";

export const CardContainer = ({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) => {
  return (
    <section className="antialiased mt-10 bg-gray-100 text-gray-600 px-4">
      <div className="flex flex-col justify-center  h-full">
        <div className="w-full rounded-lg mx-auto bg-white shadow-lg  border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">{text}</h2>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr className="flex flex-row justify-start">
                    <th className="p-2 whitespace-nowrap w-1/4">
                      <div className="font-semibold text-left">Crypto </div>
                    </th>
                    <th className="p-2 whitespace-nowrap w-1/4 ">
                      <div className="font-semibold text-left">Quantity</div>
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
                  {children}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
