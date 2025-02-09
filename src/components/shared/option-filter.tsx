import clsx from "clsx";
import React from "react";

type Props = {
  option: string;
  isFilterSet: boolean;
  className?: string;
};

export const OptionFilter: React.FC<Props> = ({
  className,
  option,
  isFilterSet,
}) => {
  return (
    <button
      className={clsx(
        className,
        "rounded-full border-1  max-h-6 min-w-18 p-0.5 flex content-center items-center justify-center",
        isFilterSet
          ? "border-white bg-white/10 text-white"
          : "border-white/5 text-white/30"
      )}
    >
      <p
        className={clsx(
          "text-sm",
          isFilterSet ? "font-semibold" : "font-light"
        )}
      >
        {option}
      </p>
    </button>
  );
};
