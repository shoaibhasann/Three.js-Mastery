import * as Three from "three";

// create a scene
const scene = new Three.Scene();
scene.background = new Three.Color("#1c1c1c");

// create a camera
const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// create and add a cube object
const geometry = new Three.BoxGeometry();
const material = new Three.MeshLambertMaterial({ color: "#468585", emissive: "#468585"});

const cube = new Three.Mesh(geometry, material);
scene.add(cube);

// add lightning
const light = new Three.DirectionalLight(0x9cdba6, 10);
light.position.set(1,1,1);
scene.add(light);

// setup renderer
const renderer = new Three.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

function animate(){
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}