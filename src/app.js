import Car from "./Car";
import * as THREE from "three";

const scene = new THREE.Scene();

const playerCar = Car();
scene.add(playerCar);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
dirLight.position.set(100, -300, 400)

scene.add(dirLight);

const aspectRatio = window.innerWidth / window.innerHeight;
const cameraWith = 150;
const cameraHeight = cameraWith / aspectRatio;

const camera = new THREE.OrthographicCamera(cameraWith / -2, cameraWith / 2, cameraHeight / 2, cameraHeight / -2);

camera.position.set(200, -200, 300);
camera.up.set(0, 0, 1);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

document.body.appendChild(renderer.domElement);
