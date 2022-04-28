import * as THREE from "three";


const vehicleColors = [0xa52523, 0xbdb638, 0x78b141];

export default function Car(){
    const car = new THREE.Group();

    const backWheel = Wheel();
    backWheel.position.x = -18

    car.add(backWheel);

    const frontWheel = Wheel();

    frontWheel.position.x = 18
    car.add(frontWheel);

    const main = new THREE.Mesh(new THREE.BoxBufferGeometry(60, 30, 15), new THREE.MeshLambertMaterial({color: 0xa52523}));
    main.position.z = 12;
    car.add(main);

    const cabin = new THREE.Mesh(new THREE.BoxBufferGeometry(33, 24, 12), new THREE.MeshLambertMaterial({color: 0xffffff}));
    cabin.position.x = -6;
    cabin.position.z = 25.5;

    car.add(cabin);

    return car;
}

function Wheel(){
    const wheel = new THREE.Mesh(new THREE.BoxBufferGeometry(12, 33, 12), new THREE.MeshLambertMaterial({color: 0x333333}));
    wheel.position.z = 6;

    return wheel;
}


