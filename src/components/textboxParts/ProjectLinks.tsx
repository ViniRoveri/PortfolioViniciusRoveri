import RepoLinkPart from "./projectLinksParts/RepoLinkPart";
import SiteLinkPart from "./projectLinksParts/SiteLinkPart";

const styles = {
   container: `border-t border-default-darkOrange flex items-center justify-end mt-1.5 overflow-hidden w-full`, 
   link: `cursor-pointer duration-300 flex h-full items-center justify-end pt-1
   hover:tracking-[2px]`,
   icon: `fill-default-darkOrange h-6 ml-2 w-6`
}

export default function ProjectLinks(){
   return (
      <>
      <SiteLinkPart styles={styles}/>
      <RepoLinkPart styles={styles}/>
      </>
   )
}