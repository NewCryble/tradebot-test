import React from "react";
import data from "../data/data.min.json";
import { Bot } from "./shared";

interface Props {
  className?: string;
}

export const Bots: React.FC<Props> = ({ className }) => {
  return (
    <div className={"grid grid-cols-3 gap-1 mx-4 mt-4 grid-rows-2"}>
      {data.bots.map((bot) => (
        <Bot data={bot} key={bot.name} className={className} />
      ))}
    </div>
  );
};
