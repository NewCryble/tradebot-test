import React from "react";
import data from "../data/data.min.json";
import { Bot } from "./shared";
import clsx from "clsx";

interface Props {
  className?: string;
}

const BOTS = {
  orange: "orange_bot",
  white: "white_bot",
  blue: "blue_bot",
  green: "green_bot",
  yellow: "yellow_bot",
  red: "red_bot",
} as const;
type BotName = (typeof BOTS)[keyof typeof BOTS];

const botsOrder: BotName[] = [
  BOTS.orange,
  BOTS.white,
  BOTS.blue,
  BOTS.green,
  BOTS.yellow,
  BOTS.red,
];

export const Bots: React.FC<Props> = ({ className }) => {
  const sortedBots = botsOrder.map((name) => {
    return data.bots.find((b) => b.name === name) ?? null;
  });

  return (
    <div className={"grid grid-cols-3 gap-1 mx-4 mt-4 grid-rows-2 "}>
      {sortedBots.map((bot) => (
        <BotContainer loading={!bot}>
          {bot ? (
            <Bot
              data={bot}
              key={bot.name}
              className={className}
              width={45}
              height={45}
            />
          ) : null}
        </BotContainer>
      ))}
    </div>
  );
};

const BotContainer = ({
  loading,
  children,
}: React.PropsWithChildren<{ loading?: boolean }>) => (
  <div
    className={clsx(
      `rounded-xs bg-white/5  inset-shadow-fuchsia-700 inset-ring-1 inset-ring-blue-500 inset-shadow-sm`,
      loading && "animate-pulse"
    )}
  >
    {children}
  </div>
);
