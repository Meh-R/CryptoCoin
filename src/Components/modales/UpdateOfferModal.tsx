import { updateOffer } from "@/Service/offer";
import { OffersProps, promoType } from "@/Utils/types";
import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdBrowserUpdated } from "react-icons/md";

export const UpdateOfferModal = ({
  offer,
  setIsReloadNeeded,
}: {
  offer: OffersProps;
  setIsReloadNeeded: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [amount, setAmount] = useState<number>(1);

  function handleUpdateOffer() {
    updateOffer(offer.id, offer.Crypto.id, amount)
      .then((res) => {
        toast.success("Update successfull");
        setIsReloadNeeded(new Date().getTime());
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="flex justify-center  ">
      <button
        onClick={handleOpen}
        className=" bg-white text-center rounded-lg w-20 p-1 text-sm mt-1"
      >
        <MdBrowserUpdated />
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <input
            type="number"
            onChange={(e) => {
              setAmount(Number(e.target.value));
            }}
            className="text-black mt-5 mb-5 indent-3 border-2 border-black  w-full"
            placeholder="value of promo code"
            required
          />

          <div className="flex items-center">
            <button
              onClick={handleClose}
              className="bg-red-400 text-white rounded-md text-center w-32 p-2 m-4 "
            >
              Annuler
            </button>
            <button
              className="bg-green-700 text-white rounded-md text-center w-32 p-2 m-4 "
              onClick={() => {
                handleUpdateOffer();
                handleClose();
              }}
            >
              Update offer
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
