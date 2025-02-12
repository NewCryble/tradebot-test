import React from "react";
import { PagePicker } from "./shared";
import clsx from "clsx";

interface Props {
  className?: string;
}

const pageNames = [
  "Dashboard",
  "Megabot",
  "Bot market",
  "Coin prices",
  "Profile",
];

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div className="bg-white/3 w-screen fixed bottom-0 left-0">
      <div
        className={clsx(
          className,
          "flex flex-row justify-between  gap-2 my-2 mx-4 "
        )}
      >
        {pageNames.map((page) => (
          <PagePicker page={page} notifications={2} className="py-0.5 px-1" />
        ))}
      </div>
    </div>
  );
};
