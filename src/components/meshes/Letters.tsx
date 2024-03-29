/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 public/assets/3d/Letters.gltf -t -r public
*/

import * as THREE from 'three'
import { useGLTF, useScroll } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useRef, useEffect } from 'react'
import gsap, { Elastic } from 'gsap'
import { animationsDelays, animationsDurations, sectionsScrollOffsets } from '../../common/globalConstants'

type GLTFResult = GLTF & {
	nodes: {
		United_Letters: THREE.Mesh
	}
}

export default function Letters(props: JSX.IntrinsicElements['group']) {
	const letters = useRef<THREE.Mesh>(null)
	const initialYPosition = 8

	useEffect(() => {
		if (letters.current) {
			gsap.fromTo(letters.current.position, {
				y: initialYPosition
			}, {
				delay: animationsDelays.letters,
				duration: animationsDurations.letters,
				ease: Elastic.easeOut.config(0.4, 0.5),
				y: 0
			})
		}
	}, [])

	const scroll = useScroll()
	function scrollToIntroduction() {
		const targetPixel = (scroll.el.scrollHeight - window.innerHeight) * (sectionsScrollOffsets.introduction + 0.01)

		scroll.el.scrollTo({ top: targetPixel, behavior: 'smooth' })
	}

	const { nodes } = useGLTF('/assets/3d/Letters.gltf') as unknown as GLTFResult
	return (
		<group {...props} dispose={null}>
			<mesh geometry={nodes.United_Letters.geometry} onClick={() => scrollToIntroduction()} ref={letters}>
				<meshStandardMaterial color='#ff9316' roughness={0.4} />
			</mesh>
		</group>
	)
}

useGLTF.preload('/assets/3d/Letters.gltf')
