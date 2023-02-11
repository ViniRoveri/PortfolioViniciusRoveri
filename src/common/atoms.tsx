import { atom } from "recoil";

export const activeSectionState = atom<string>({
   key: 'activeSectionState',
   default: 'initial'
})