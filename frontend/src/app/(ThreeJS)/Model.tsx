import { useGLTF } from '@react-three/drei'
import scene from '../../../public/phone'

useGLTF.preload('/phone.ts')

export default function Model() {
  return (
    <group 
      scale={[1, 1, 1]}
      position={[0, -0.03, 3.1]}
    >
      <primitive object={scene} />
    </group>
  )
}
