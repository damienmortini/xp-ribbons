import {
  PerspectiveCamera,
  Mesh,
  Vector3,
  BoxGeometry,
  MeshNormalMaterial,
  Scene as THREEScene
} from "three";

import THREELine from "dlib/three/THREELine.js";
import THREERibbon from "dlib/three/THREERibbon.js";
import Particle from "dlib/physics/Particle.js";
import THREEShaderMaterial from "dlib/three/THREEShaderMaterial.js";
import THREETrackballController from "dlib/three/THREETrackballController.js";

export default class Scene extends THREEScene {
  constructor({canvas} = {}) {
    super();

    this.camera = new PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 10000);

    this.controls = new THREETrackballController(this.camera, {
      distance: 10,
      domElement: canvas
    });

    this._vector3 = new Vector3();
    this._time = 0;

    this._cube = new Mesh(new BoxGeometry(.1, .1, .1), new MeshNormalMaterial());
    this.add(this._cube);

    const points = [];
    const SEGMENTS = 20;
    for (let i = 0; i < SEGMENTS; i++) {
      points.push(new Vector3(
        (i - (SEGMENTS - 1) * .5) * .2,
        // Math.cos(i * .5),
        // Math.sin(i * .5)
      ));
    }

    this.line = new THREELine({
      points,
      detail: 3,
      thickness: .5,
      material: new THREEShaderMaterial({
        type: "normal",
        // wireframe: true
      })
    });

    this.add(this.line);

    const material = new THREEShaderMaterial({
      type: "normal",
      // wireframe: true,
    });

    this.ribbons = [];
    this._velocities = [];
    for (let i = 0; i < 1000; i++) {
      let ribbon = new THREERibbon({
        points: new Array(100).fill().map(() => new Vector3(Math.random(), Math.random(), Math.random())),
        detail: 6,
        material
      });
      // this.add(ribbon);
      this.ribbons.push(ribbon);

      let velocity = new Vector3(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1
      ).normalize().multiplyScalar(.1);
      this._velocities.push(velocity);
    }

    this._force = new Vector3();
  }

  resize(width, height) {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  update() {
    this._time += .016;

    this.controls.update();

    // this.line.update();

    this._force.x = Math.cos(this._time * 3) * 3;
    this._force.y = Math.sin(this._time * 2) * 3;
    this._force.z = Math.cos(this._time * 4) * 3;
    this._cube.position.copy(this._force);

    for (let i = 0; i < this.ribbons.length; i++) {
      let ribbon = this.ribbons[i];
      let velocity = this._velocities[i];
      velocity.add(this._vector3.copy(this._force).sub(ribbon.head).multiplyScalar((i % 10 + 1) * .01));
      ribbon.head.add(velocity);
      ribbon.update();
    }
  }
}
