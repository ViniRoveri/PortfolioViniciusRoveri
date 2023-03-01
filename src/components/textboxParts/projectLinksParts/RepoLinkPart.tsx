import { reposLinks } from "@/common/globalConstants"
import { useActiveSection } from "@/common/hooks"
import { ArrowUpRightIcon } from "@heroicons/react/24/solid"

type Props = {
   styles: {[key: string]: any}
}

export default function RepoLinkPart({styles}: Props){
   const activeSection = useActiveSection()
   
   return(
      <div className={styles.container}>
         <a className={styles.link} href={reposLinks[activeSection]} target='_blank'>
            <p>Go to the repository</p>

            <ArrowUpRightIcon className={styles.icon}/>
         </a>
      </div>
   )
}