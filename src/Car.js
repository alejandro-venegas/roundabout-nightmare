import * as THREE from "THREE";

function Car(){
    const car = new THREE.Group();

    const backWheel = new THREE.Mesh(new THREE.BoxBufferGeometry(12, 33, 12), new THREE.MeshLambertMaterial({color: 0x333333}));
    backWheel.position.z = 6;
    backWheel.position.x = 18
    car.add(backWheel);

    const frontWheel = new THREE.Mesh(new THREE.BoxBufferGeometry(12, 33, 12), new THREE.MeshLambertMaterial({color: 0x333333}));
    frontWheel.position.z = 6;
    frontWheel.position.x = 18
    car.add(frontWheel);

    const main = new THREE.Mesh(new THREE.BoxBufferGeometry(30, 30, 15), new THREE.MeshLambertMaterial({color: 0xa52523}));
    main.position.z = 12;
    car.add(main);

    const cabin = new THREE.Mesh(new THREE.BoxBufferGeometry(33, 24, 12), new THREE.MeshLambertMaterial({color: 0xffffff}));
    cabin.position.x = -6;
    cabin.position.z = 25.5;

    car.add(cabin);
}


const scene = new THREE.Scene();

const playerCar = Car();
scene.add(playerCar);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

