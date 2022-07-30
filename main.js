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


const normalMaterial = new THREE.MeshNormalMaterial({
  // wireframe:true
})
const geometry = new THREE.SphereGeometry(1,100,100)
const mesh = new THREE.Mesh(geometry,normalMaterial)

const box = new THREE.BoxGeometry(30,30,30)
const basicMaterial = new THREE.MeshBasicMaterial({color: 'lightblue', side: THREE.DoubleSide})

const skyBox = new THREE.Mesh(box,basicMaterial)

mesh.position.set(0,1,-3)

scene.add(mesh,skyBox)

const light = new THREE.PointLight('white',100,10)
scene.add(light)

renderer.setAnimationLoop(() => {
  renderer.render(scene,camera)
})



