'use client'
import IntroAnimation from "@/components/IntroAnimation"
import Meshes from "@/components/Meshes"
import ScrollToStart from "@/components/ScrollToStart"
import Textbox from "@/components/Textbox"
import ScrollSection from "@/domain/types/ScrollSection"
import { useState } from "react"

const main = `h-screen w-screen`

export default function page(){
	const [scrollSection, setScrollSection] = useState<ScrollSection>('initial')
	const [introAnimationFinished, setIntroAnimationFinished] = useState(false)

	return (
		<main className={main}>
			{!introAnimationFinished && 
				<IntroAnimation setIntroAnimationFinished={setIntroAnimationFinished} />
			}

			{scrollSection === 'initial' &&
				<ScrollToStart introAnimationFinished={introAnimationFinished} />
			}

			<Meshes introAnimationFinished={introAnimationFinished} scrollSection={scrollSection} setScrollSection={setScrollSection} />

			{introAnimationFinished ?
            <Textbox scrollSection={scrollSection}/>
         : <></>}
		</main>
	)
}
