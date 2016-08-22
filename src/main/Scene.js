import THREE from "three";
import "three/examples/js/controls/TrackballControls";

import THREERibbon from "dlib/three/THREERibbon.js";

export default class Scene extends THREE.Scene {
  constructor() {
    super();

    this.camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 10000);

    this.camera.position.z = 5;
    this.controls = new THREE.TrackballControls(this.camera);

    this.ribbon = new THREERibbon();
    this.add(this.ribbon);
  }

  resize(width, height) {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  update() {
    this.controls.update();

    this.ribbon.position.x += .1;

    this.ribbon.update(this.ribbon.position);
  }
}
