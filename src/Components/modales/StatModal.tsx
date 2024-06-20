import { cryptoHistory } from "@/Service/crypto";
import { Crypto, historyType } from "@/Utils/types";
import { Box, Modal } from "@mui/material";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BarChart, LineChart } from "@mui/x-charts";

export const StatModal = ({
  crypto,
  isBuyVisible,
}: {
  crypto: Crypto;
  isBuyVisible: boolean;
}) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [history, setHistory] = useState<historyType[]>();

  useEffect(() => {
    cryptoHistory(crypto.id).then((res) => {
      const graph: { created_at: string; value: number }[] | any = [];
      res?.data.map((element: historyType) => {
        graph.push({
          y: element.created_at,
          x: element.value,
        });
      });

      setHistory(graph);
    });
  }, []);

  return (
    <div>
      {isBuyVisible && (
        <button
          onClick={() => {
            handleOpen();
          }}
          className="bg-white text-center rounded-lg text-indigo-600 w-20 p-1 text-sm mt-1"
        >
          Stat{" "}
        </button>
      )}
      {history && history.length > 0 && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <LineChart
              dataset={history}
              xAxis={[{ dataKey: "y", reverse: true, scaleType: "band" }]}
              series={[
                {
                  dataKey: "x",
                },
              ]}
              width={500}
              height={300}
            />
          </Box>
        </Modal>
      )}
    </div>
  );
};
