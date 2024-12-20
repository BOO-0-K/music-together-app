import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom: persistTokenAtom } = recoilPersist({
  key: "tokenSessionStorage",
  storage: sessionStorage,
});

export const tokenState = atom<string | undefined>({
  key: "token",
  default: undefined,
  effects_UNSTABLE: [persistTokenAtom],
});

export const isLoginSelector = selector({
  key: "isLogin",
  get: ({ get }) => !!get(tokenState),
});
