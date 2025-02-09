import clsx from "clsx";
import React from "react";
import dashboardSvg from "/footer-icons/dashboard.svg";
import megaBotSvg from "/footer-icons/megabot.svg";
import botMarketSvg from "/footer-icons/megabot.svg";
import coinPricesSvg from "/footer-icons/megabot.svg";
import profileSvg from "/footer-icons/megabot.svg";

interface Props {
  page: string;
  notifications?: number;
  className?: string;
}

const pageNames = {
  Dashboard: dashboardSvg,
  Megabot: megaBotSvg,
  Botmarket: botMarketSvg,
  Coinprices: coinPricesSvg,
  Profile: profileSvg,
};

export const PagePicker: React.FC<Props> = ({
  className,
  page,
  notifications,
}) => {
  console.log(page.split(" ").join(""));
  return (
    <div
      className={clsx(
        className,
        "relative flex flex-col items-center justify-center flex-gap-1"
      )}
    >
      <img src={pageNames[page]} alt={""} width={25} height={25} />
      <p className={clsx("text-xs text-white/50")}>{page}</p>
      {notifications ? (
        <div className="absolute top-0 right-0 ">
          <svg width={14} height={14}>
            <circle
              cx="7"
              cy="7"
              r="7"
              stroke="none"
              fill="oklch(0.769 0.188 70.08)"
            />
          </svg>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
