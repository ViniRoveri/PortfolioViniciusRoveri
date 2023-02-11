import { activeSectionState } from "./atoms";
import {useRecoilValue, useSetRecoilState} from 'recoil'

export function useActiveSection(){
   const activeSection = useRecoilValue(activeSectionState)

   return activeSection
}

export function useSetActiveSection(){
   const setActiveSection = useSetRecoilState(activeSectionState)

   return (newSection: string)=>{
      setActiveSection(newSection)
   }
}