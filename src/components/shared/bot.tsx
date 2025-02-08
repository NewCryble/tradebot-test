import clsx from "clsx";
import React from "react";

interface Props {
  data: {
    name: string;
    cost: number;
    "24h": number;
    "7d": number;
    "30d": number;
    "60d": number;
    "90d": number;
    all_time: number;
  };
  className?: string;
}

export const Bot: React.FC<Props> = ({ data, className }) => {
  return (
    <div className={clsx(className, "flex flex-col items-center gap-2 m-2")}>
      <img src={`../assets/layers/Bots/${data.name}/bot_img.png`} />
      <h2>{data.name}</h2>
      <p>{data.cost}</p>
    </div>
  );
};
