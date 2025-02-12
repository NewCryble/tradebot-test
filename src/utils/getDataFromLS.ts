import { TBot } from "../redux/bots/types";

export const getDataFromLS = () => {
  const items = localStorage.getItem("bots");
  const data = items ? JSON.parse(items) : [];

  return {
    data: data as TBot[],
  };
};
