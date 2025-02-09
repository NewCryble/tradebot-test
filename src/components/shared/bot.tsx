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
  width: number;
  height: number;
  className?: string;
}

const BotType = ["attack", "balance", "defence"];

const botColors: Record<string, string> = {
  white_bot: "rgb(29, 38, 55)",
  green_bot: "rgb(120, 166, 89)",
  red_bot: "rgb(241, 29, 13)",
  blue_bot: "rgb(71, 148, 196)",
  orange_bot: "rgb(249, 100, 0)",
};

export const Bot: React.FC<Props> = ({ data, className, width, height }) => {
  return (
    <div className={clsx(className, "flex flex-col items-center gap-2 m-2")}>
      {data.name === "yellow_bot" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={`${width}px`}
          height={`${height}px`}
          viewBox="0 0 90 70"
        >
          <path
            fill="rgb(254, 218, 50)"
            d="M79.1000,69.1000 L79.1000,49.1000 L69.1000,49.1000 L69.1000,69.1000 L59.1000,69.1000 L59.1000,79.1000 L69.1000,79.1000 L69.1000,89.1000 L59.1000,89.1000 L49.1000,89.1000 L49.1000,69.1000 L39.1000,69.1000 L39.1000,89.1000 L29.1000,89.1000 L19.1000,89.1000 L19.1000,79.1000 L29.1000,79.1000 L29.1000,69.1000 L19.1000,69.1000 L19.1000,49.1000 L9.1000,49.1000 L9.1000,59.1000 L9.1000,69.1000 L-0.000,69.1000 L-0.000,59.1000 L-0.000,49.1000 L-0.000,39.1000 L9.1000,39.1000 L9.1000,29.1000 L19.1000,29.1000 L19.1000,19.1000 L29.1000,19.1000 L29.1000,9.1000 L39.1000,9.1000 L39.1000,19.1000 L49.1000,19.1000 L49.1000,9.1000 L59.1000,9.1000 L59.1000,19.1000 L69.1000,19.1000 L69.1000,29.1000 L79.1000,29.1000 L79.1000,39.1000 L89.1000,39.1000 L89.1000,49.1000 L89.1000,69.1000 L79.1000,69.1000 ZM39.1000,29.1000 L29.1000,29.1000 L29.1000,39.1000 L39.1000,39.1000 L39.1000,29.1000 ZM59.1000,29.1000 L49.1000,29.1000 L49.1000,39.1000 L59.1000,39.1000 L59.1000,29.1000 ZM19.1000,-0.000 L29.1000,-0.000 L29.1000,9.1000 L19.1000,9.1000 L19.1000,-0.000 ZM69.1000,-0.000 L69.1000,9.1000 L59.1000,9.1000 L59.1000,-0.000 L69.1000,-0.000 Z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={`${width}px`}
          height={`${height}px`}
          viewBox={`0 0 90 70`}
        >
          <path
            fill={botColors[data.name]}
            d="M79.1000,69.1000 L79.1000,59.1000 L69.1000,59.1000 L69.1000,69.1000 L59.1000,69.1000 L59.1000,59.1000 L49.1000,59.1000 L49.1000,69.1000 L39.1000,69.1000 L39.1000,59.1000 L29.1000,59.1000 L29.1000,69.1000 L19.1000,69.1000 L19.1000,59.1000 L9.1000,59.1000 L9.1000,69.1000 L-0.000,69.1000 L-0.000,59.1000 L-0.000,29.1000 L9.1000,29.1000 L9.1000,19.1000 L19.1000,19.1000 L19.1000,9.1000 L29.1000,9.1000 L29.1000,-0.000 L39.1000,-0.000 L39.1000,9.1000 L49.1000,9.1000 L49.1000,-0.000 L59.1000,-0.000 L59.1000,9.1000 L69.1000,9.1000 L69.1000,19.1000 L79.1000,19.1000 L79.1000,29.1000 L89.1000,29.1000 L89.1000,59.1000 L89.1000,69.1000 L79.1000,69.1000 ZM39.1000,29.1000 L19.1000,29.1000 L19.1000,39.1000 L39.1000,39.1000 L39.1000,29.1000 ZM49.1000,29.1000 L49.1000,39.1000 L69.1000,39.1000 L69.1000,29.1000 L49.1000,29.1000 Z"
          />
        </svg>
      )}
      <div className="flex justify-center content-center flex-wrap">
        <h2
          className={clsx(
            "text-sm w-full text-center font-semibold",
            data.name === "white_bot" && "text-white/10"
          )}
        >
          {(data.name === "white_bot"
            ? "place bot here"
            : data.name === "yellow_bot"
            ? "megabot"
            : BotType[Math.floor(Math.random() * BotType.length)]
          ).toUpperCase()}
        </h2>
        <p>{data.name !== "white_bot" && data.cost}</p>
      </div>
    </div>
  );
};
