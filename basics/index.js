import * as Three from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const canvas = document.getElementById("canvas");

// 1. Scene
const scene = new Three.Scene();
scene.background = new Three.Color("#1c1c1c");

// 2. Camera
const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3. Object
const geometry = new Three.DodecahedronGeometry();
const material = new Three.MeshLambertMaterial({ color: "#468585", emissive: "#468585"});
const dodecahedron = new Three.Mesh(geometry, material);

const boxGeometry = new Three.BoxGeometry(2, 0.1, 2);
const boxMaterial = new Three.MeshStandardMaterial({ color: "#b4b4b3", emissive: "#b4b4b3"});
const box = new Three.Mesh(boxGeometry, boxMaterial);

box.position.y = -1.5;

scene.add(dodecahedron);
scene.add(box);

// 4. Light
const light = new Three.SpotLight(0x006769, 100);
light.position.set(1,1,1);
scene.add(light);

// 5. Renderer
const renderer = new Three.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// 6. OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;


// 7. Animation
function animate(){
    requestAnimationFrame(animate);

    dodecahedron.rotation.x += 0.01;
    dodecahedron.rotation.y += 0.01;

    box.rotation.y += 0.05;

    controls.update();
    renderer.render(scene, camera);
}

// 8. Handle Window Resizing
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
})

animate();





