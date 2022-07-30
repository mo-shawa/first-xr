import './style.css'

import * as THREE from 'three'
import { VRButton } from 'three/examples/jsm/webxr/VRButton'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, innerWidth/innerHeight, 0.1, 1000)
camera.position.z = 3
scene.add(camera)
const renderer = new THREE.WebGLRenderer()
renderer.setSize(innerWidth,innerHeight)

document.body.append( VRButton.createButton(renderer))
renderer.xr.enabled = true // important


document.body.append(renderer.domElement)


const material = new THREE.MeshNormalMaterial({
  wireframe:true
})
const geometry = new THREE.SphereGeometry(1,100,100)
const mesh = new THREE.Mesh(geometry,material)

scene.add(mesh)

const light = new THREE.AmbientLight()

scene.add(light)

renderer.setAnimationLoop(() => {
  renderer.render(scene,camera)
})



