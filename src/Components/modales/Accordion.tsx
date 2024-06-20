import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Image from "next/image";
import { SellCryptoModal } from "./SellCryptoModale";

export default function AccordionExpandIcon({
  userElement,
  setIsReloadNeeded,
}: {
  userElement: any;
  setIsReloadNeeded: any;
}) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>My crypto</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {" "}
            <section className="antialiased  bg-gray-100 text-gray-600  px-4">
              <div className="flex flex-col justify-center  h-full">
                <div className="w-full rounded-lg mx-auto bg-white shadow-lg  border border-gray-200">
                  <header className="px-5 py-4 border-b border-gray-100"></header>
                  <div className="p-3">
                    <div className="overflow-x-auto">
                      <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                          <tr className="flex flex-row justify-start">
                            <th className="p-2 whitespace-nowrap w-1/4">
                              <div className="font-semibold text-left">
                                Crypto
                              </div>
                            </th>
                            <th className="p-2 whitespace-nowrap w-1/4 ">
                              <div className="font-semibold text-left">
                                Value
                              </div>
                            </th>
                            <th className="p-2 whitespace-nowrap w-1/4">
                              <div className="font-semibold text-left">
                                quantity
                              </div>
                            </th>
                            <th className="p-2 whitespace-nowra w-1/4">
                              <div className="font-semibold text-center"></div>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100 w-full">
                          {userElement &&
                            userElement?.UserHasCrypto.map((element: any) => {
                              if (element.amount > 0) {
                                return (
                                  <div>
                                    {" "}
                                    <tr className="w-full flex flex-row">
                                      <td className="p-2 whitespace-nowrap w-1/4">
                                        <div className="flex items-center">
                                          <div className="w-10 h-10  mr-2 sm:mr-3">
                                            <Image
                                              src={element.Crypto.image}
                                              alt="Coin image"
                                              width={40}
                                              height={40}
                                              className="mb-3  w-[40px] h-[40px] rounded-full object-cover"
                                            />
                                          </div>
                                          <div className="font-medium text-gray-800">
                                            {element.Crypto.name}
                                          </div>
                                        </div>
                                      </td>

                                      <td className="p-2 whitespace-nowrap w-1/4">
                                        <div className="text-left flex  mt-2.5 font-medium text-yellow-700">
                                          Value:
                                          {Math.round(
                                            element.Crypto.value * 100
                                          ) / 100}
                                        </div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap w-1/4">
                                        <div className="text-left flex  mt-2.5 font-medium text-gray-800">
                                          Quantity: {element.amount}
                                        </div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap w-1/4">
                                        <div className="text-left flex  mt-2.5 font-medium text-gray-800">
                                          <SellCryptoModal
                                            crypto={{
                                              id: element.Crypto.id,
                                              name: element.Crypto.name,
                                              value: element.Crypto.value,
                                              image: element.Crypto.image,
                                              quantity: element.Crypto.quantity,
                                              created_at: undefined,
                                              updated_at: undefined,
                                            }}
                                            setIsReloadNeeded={
                                              setIsReloadNeeded
                                            }
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                  </div>
                                );
                              }
                            })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
