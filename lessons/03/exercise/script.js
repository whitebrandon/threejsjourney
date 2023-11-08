import * as THREE from "three";

// Canvas
const canvas = document.querySelector('canvas.webgl');


// console.log('JavaScript is working!')
// console.log(THREE);

const scene = new THREE.Scene();

// a Mesh is a combination of geometry (shape) and material (how it looks)
// const sphereGeometry = new THREE.SphereGeometry(1.5, 32, 32);

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ 
    color: 0xff0000
 });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// Light
// const light = new THREE.PointLight(0xffffff, 1, 1000);
// light.position.set(0, 10, 10);
// scene.add(light);

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, (sizes.width/sizes.height), 0.1, 1000);
camera.position.z = 3;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
    canvas // canvas: canvas
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);