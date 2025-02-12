import clsx from "clsx";
import React from "react";
import dashboardSvg from "/footer-icons/dashboard.svg";
import megaBotSvg from "/footer-icons/megabot.svg";
import botMarketSvg from "/footer-icons/botmarket.svg";
import coinPricesSvg from "/footer-icons/coinPrices.svg";
import profileSvg from "/footer-icons/profile.svg";

interface Props {
  page: string;
  notifications?: number;
  className?: string;
}

const pageNames: Record<string, string> = {
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
  const pageJoined: string = page.slice().split(" ").join("");
  console.log(pageNames[pageJoined]);

  return (
    <div
      className={clsx(
        className,
        "relative flex flex-col items-center justify-center flex-gap-1"
      )}
    >
      <img src={pageNames[pageJoined]} alt={""} width={25} height={25} />
      <p className={clsx("text-xs text-white/50")}>{page}</p>
      {page === "Profile" && notifications ? (
        <div className="absolute top-0 right-0 ">
          <svg width={15} height={15}>
            <circle
              cx="7"
              cy="7"
              r="7"
              stroke="none"
              fill="oklch(0.769 0.188 70.08)"
            />
            <text fontSize={10} x={4.5} y={10} fill="white">
              {notifications}
            </text>
          </svg>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
