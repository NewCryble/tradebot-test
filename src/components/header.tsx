import React from "react";

export const Header: React.FC = () => {
  return (
    <div className={"flex justify-between mx-4 pt-8"}>
      <button className="w-[28px] h-[28px] border-0 shadow-none">
        <img
          className="w-full h-full"
          src="../assets/layers/Title_bar/menu_icon.svg"
        />
      </button>
      <h2 className="text-xl text-white/40">Dashboard</h2>
      <button className="w-[28px] h-[28px]">
        <img
          className="w-full h-full"
          src="../assets/layers/Title_bar/refresh.svg"
        />
      </button>
    </div>
  );
};
