import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import * as dat from 'dat.gui'
import gsap from 'gsap';

const gltfLoader = new GLTFLoader()


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );

const pointLight = new THREE.AmbientLight(0xffffff, 3)
scene.add(pointLight)

const tl = gsap.timeline();

//Phone
gltfLoader.load('/good_Phone.gltf', (gltf) => {
	const model = gltf.scene;
	model.scale.set(1,1,1)
	model.rotation.set(0, 3.3, 0)
	scene.add(model)

	tl.to(model.rotation, {y: 4.7, duration: 1})
	tl.to(model.scale, {x: 0.8, y: 0.8, z: 0.8, duration: 1}, '-=1')
	tl.to(model.position, {x: 1, duration: 1.5})
	tl.to(model.rotation, {y: 3.8, duration: 1})
}, undefined, function (error) {
	console.log(error)
})

function animate() {
	renderer.render( scene, camera );
}

export default scene;