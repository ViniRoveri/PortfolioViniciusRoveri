/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/assets/3d/Path.gltf -t -r public 
*/

import * as THREE from 'three'
import { useRef } from 'react'
import { Float, useGLTF, useScroll } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'
import { sectionsScrollOffsets, sphereRotations } from '@/common/globalConstants'

type GLTFResult = GLTF & {
	nodes: {
		United_Path: THREE.Mesh
		['1-Letters']: THREE.Mesh
		['2-Profile']: THREE.Mesh
		['3-Computer']: THREE.Mesh
		['3-ComputerScreen']: THREE.Mesh
		['3-ComputerScreenLetters']: THREE.Mesh
		['4-RumoLogo']: THREE.Mesh
		['5-RumoLogo']: THREE.Mesh
		['6-MouseCursor']: THREE.Mesh
		['7-GraduationHat']: THREE.Mesh
		['7-GraduationHatThing']: THREE.Mesh
		['8-Link']: THREE.Mesh
	}
}

const iconsStandardMaterialsConfig = {
	metalness: 1,
	roughness: 0.5
}

export default function Path(props: JSX.IntrinsicElements['group']) {
	const scroll = useScroll()

	const group = useRef<THREE.Group>(null)

	const offsetsKeys = Object.keys(sectionsScrollOffsets)
	const rotationsKeys = Object.keys(sphereRotations)

	useFrame(() => {
		if (scroll.offset <= sectionsScrollOffsets.introduction && group.current) {
			group.current.rotation.z = 0
			return
		}

		offsetsKeys.forEach((key, index) => {
			const previousOffset = sectionsScrollOffsets[offsetsKeys[index - 1]]
			const previousRotation = sphereRotations[rotationsKeys[index - 1]]

			if (index > 0 && scroll.offset <= sectionsScrollOffsets[key] && scroll.offset > previousOffset && group.current) {
				let offsetDifference = previousOffset - sectionsScrollOffsets[key]
				let rotationDifference = sphereRotations[key] - previousRotation

				if (offsetDifference < 0) {
					offsetDifference *= -1
				}

				const newPathZRotation =
					previousRotation
					+ rotationDifference
					* scroll.range(previousOffset, offsetDifference)

				group.current.rotation.z = newPathZRotation
			}
		})
	})

	function scrollToSection(sectionOffset: number) {
		const targetPixel = (scroll.el.scrollHeight - window.innerHeight) * (sectionOffset + 0.01)

		scroll.el.scrollTo({top: targetPixel, behavior: 'smooth'})
	}

	const { nodes } = useGLTF('/assets/3d/Path.glb') as unknown as GLTFResult
	return (
		<group {...props} dispose={null} ref={group}>
			<mesh geometry={nodes.United_Path.geometry}>
				<meshStandardMaterial color='#ffe7cc' roughness={0.1} />
			</mesh>

			<Float floatIntensity={1.5} floatingRange={[0, 2]} rotationIntensity={0.1} speed={2}>
				<mesh geometry={nodes['1-Letters'].geometry} onClick={() => scrollToSection(sectionsScrollOffsets.introduction)}>
					<meshStandardMaterial color='#ccc' {...iconsStandardMaterialsConfig} />
				</mesh>

				<mesh geometry={nodes['2-Profile'].geometry} onClick={() => scrollToSection(sectionsScrollOffsets.aboutMe)}>
					<meshStandardMaterial color='#b2fcff' {...iconsStandardMaterialsConfig} />
				</mesh>

				<mesh geometry={nodes['3-Computer'].geometry} onClick={() => scrollToSection(sectionsScrollOffsets.experience)}>
					<meshStandardMaterial color='#0d0d0d' {...iconsStandardMaterialsConfig} />
				</mesh>

				<mesh geometry={nodes['3-ComputerScreen'].geometry} onClick={() => scrollToSection(sectionsScrollOffsets.experience)}>
					<meshStandardMaterial color='#808080' {...iconsStandardMaterialsConfig} />
				</mesh>

				<mesh geometry={nodes['3-ComputerScreenLetters'].geometry} onClick={() => scrollToSection(sectionsScrollOffsets.experience)}>
					<meshStandardMaterial color='#e5e5e5' {...iconsStandardMaterialsConfig} />
				</mesh>

				<mesh geometry={nodes['4-RumoLogo'].geometry} onClick={() => scrollToSection(sectionsScrollOffsets.experience1)}>
					<meshStandardMaterial color='#0fe8f9' {...iconsStandardMaterialsConfig} />
				</mesh>

				<mesh geometry={nodes['5-RumoLogo'].geometry} onClick={() => scrollToSection(sectionsScrollOffsets.experience2)}>
					<meshStandardMaterial color='#0fe8f9' {...iconsStandardMaterialsConfig} />
				</mesh>

				<mesh geometry={nodes['6-MouseCursor'].geometry} onClick={() => scrollToSection(sectionsScrollOffsets.experience3)}>
					<meshStandardMaterial color='#ccb9a3' {...iconsStandardMaterialsConfig} />
				</mesh>

				<mesh geometry={nodes['7-GraduationHat'].geometry} onClick={() => scrollToSection(sectionsScrollOffsets.education)}>
					<meshStandardMaterial color='#002780' {...iconsStandardMaterialsConfig} />
				</mesh>

				<mesh geometry={nodes['7-GraduationHatThing'].geometry} onClick={() => scrollToSection(sectionsScrollOffsets.education)}>
					<meshStandardMaterial color='#805d00' {...iconsStandardMaterialsConfig} />
				</mesh>

				<mesh geometry={nodes['8-Link'].geometry} onClick={() => scrollToSection(sectionsScrollOffsets.links)}>
					<meshStandardMaterial color='#cc0000' {...iconsStandardMaterialsConfig} />
				</mesh>
			</Float>
		</group>
	)
}

useGLTF.preload('/assets/3d/Path.glb')
