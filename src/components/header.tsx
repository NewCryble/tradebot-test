import React, { useState } from "react";
import clsx from "clsx";
import refreshSvg from "/refresh.svg";

export const Header: React.FC = () => {
  const [isPageLoading, setIsPageLoading] = useState(false);

  const handleRefreshButton = () => {
    window.location.reload();
    setIsPageLoading((prev) => !prev);
  };

  return (
    <div className={"flex justify-between mx-4 pt-8"}>
      <button className="w-[24px] h-[24px] border-0 shadow-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28px"
          height="28px"
          viewBox="0 0 28 28"
        >
          <path
            fill="rgb(84, 96, 118)"
            d="M33.971,23.1000 L1.029,23.1000 C0.460,23.1000 -0.000,23.539 -0.000,22.971 L-0.000,22.966 C-0.000,22.398 0.460,21.937 1.029,21.937 L33.971,21.937 C34.539,21.937 34.1000,22.398 34.1000,22.966 L34.1000,22.971 C34.1000,23.539 34.539,23.1000 33.971,23.1000 ZM33.971,13.031 L1.029,13.031 C0.460,13.031 -0.000,12.571 -0.000,12.003 L-0.000,11.997 C-0.000,11.429 0.460,10.969 1.029,10.969 L33.971,10.969 C34.539,10.969 34.1000,11.429 34.1000,11.997 L34.1000,12.003 C34.1000,12.571 34.539,13.031 33.971,13.031 ZM33.971,2.062 L1.029,2.062 C0.460,2.062 -0.000,1.602 -0.000,1.034 L-0.000,1.029 C-0.000,0.460 0.460,-0.000 1.029,-0.000 L33.971,-0.000 C34.539,-0.000 34.1000,0.460 34.1000,1.029 L34.1000,1.034 C34.1000,1.602 34.539,2.062 33.971,2.062 Z"
          />
        </svg>
      </button>
      <h2 className="text-xl text-white/40">Dashboard</h2>
      <button className="w-[28px] h-[28px]" onClick={handleRefreshButton}>
        <img
          className={clsx(
            "w-full h-full",
            isPageLoading ? "animate-spin duration-100" : ""
          )}
          src={refreshSvg}
        />
      </button>
    </div>
  );
};
