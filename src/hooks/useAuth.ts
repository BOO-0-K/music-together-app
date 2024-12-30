import { useSetRecoilState } from "recoil";
import api from "../utils/api";
import { tokenState } from "../recoils/tokenAtom";
import { useMutation } from "@tanstack/react-query";
import { IModalOpen, useModal } from "./useModal";

export interface IAuth {
  email: string;
  password: string;
}

// 로그인 API 호출 함수
const fetchSignin = (authData: IAuth) => {
  return api.post("/users/signin", authData);
};
// 로그인 커스텀 훅
export const useSigninMutation = () => {
  const { open, close } = useModal();

  const setToken = useSetRecoilState(tokenState);

  return useMutation({
    mutationFn: fetchSignin,
    onSuccess: (response) => {
      const { token } = response.data;
      setToken(token);
    },
    onError: (error) => {
      const errorMessage = error.message;
      const modal: IModalOpen = {
        title: errorMessage,
        type: "alert",
        callBack: close,
      };
      open(modal);
    },
  });
};
