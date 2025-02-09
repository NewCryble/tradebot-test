import React from "react";
import { OptionFilter } from "./shared";
import clsx from "clsx";

interface Props {
  className?: string;
}

const filters = ["24h", "7 days", "30 days", "60 days", "90 days"];

export const Filter: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx(className, "max-h-8", "container-box flex gap-2")}>
      <p className="text-nowrap text-sm self-center grow-1 font-semibold">
        Time Range:
      </p>

      <div
        className={clsx(
          "flex flex-col justify-between flex-wrap gap-2 overflow-x-scroll max-h-8 grow-3",
          "scrollbar-hidden"
        )}
      >
        {filters.map((filter) => (
          <OptionFilter isFilterSet={false} key={filter} option={filter} />
        ))}
      </div>
      <OptionFilter isFilterSet={true} option={"All time"} />
    </div>
  );
};
