import React from "react";
import data from "../data/data.min.json";

export const Graph: React.FC = () => {
  return (
    <div className="mx-4 mt-4">
      <h2 className="text-sm text-white/40">TRADING CAPITAL</h2>
      <div className="flex flex-row justify-between">
        <h1 className="text-4xl">{data.trading_capital.toFixed(5) + " BTC"}</h1>
        <div className="flex flex-col justify-center">
          <h2 className="text-white/40">
            BALANCE: <span className="text-white">{data.balance}</span>
          </h2>
          <h2 className="text-white/40">
            ON HOLD: <span className="text-white">{data.on_hold}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};
