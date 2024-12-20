import { atom } from "recoil";

export interface IModal {
  isOpen: boolean;
  title: string;
  type: "confirm" | "alert";
  callBack?: () => void;
}

export const modalState = atom<IModal>({
  key: "modal",
  default: {
    isOpen: false,
    title: "",
    type: "alert",
  },
});
