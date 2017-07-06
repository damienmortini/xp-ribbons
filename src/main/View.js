import Matrix4 from "dlib/math/Matrix4.js";
import GLProgram from "dlib/gl/GLProgram.js";
import GLBuffer from "dlib/gl/GLBuffer.js";
import GLMesh from "dlib/gl/GLMesh.js";
import Camera from "dlib/3d/Camera.js";
import TrackballController from "dlib/3d/controllers/TrackballController.js";
import GLTFLoader from "dlib/gl/GLTFLoader.js";
import GLTFMesh from "dlib/gl/GLTFMesh.js";

let GLTF_DATA;
GLTFLoader.load("src/main/ribbon.gltf").then((data) => {
  GLTF_DATA = data;
  console.log(data);
});

export default class View {
  constructor({canvas} = {}) {
    this.canvas = canvas;
    this.gl = this.canvas.getContext("webgl2", {
      depth: true,
      alpha: false,
      antialias: true
    });

    this.camera = new Camera();

    this.cameraController = new TrackballController({
      matrix: this.camera.transform,
      distance: 5
    });

    this.gl.clearColor(0, 0, 0, 1);
    this.gl.enable(this.gl.CULL_FACE);
    this.gl.cullFace(this.gl.BACK);
    this.gl.enable(this.gl.DEPTH_TEST);

    this.program = new GLProgram({
      gl: this.gl,
      uniforms: [
        ["transform", new Matrix4()]
      ],
      vertexShaderChunks: [
        ["start", `
          uniform mat4 projectionView;
          uniform mat4 transform;

          attribute vec3 normal;
          attribute vec3 position;
          attribute vec3 instancePosition;

          varying vec3 vNormal;
        `],
        ["end", `
          // vec3 position = position * .1;
          // position += instancePosition;
          gl_Position = projectionView * transform * vec4(position, 1.);
          vNormal = normal;
        `]
      ],
      fragmentShaderChunks: [
        ["start", `
          precision highp float;
          varying vec3 vNormal;
        `],
        ["end", `
          gl_FragColor = vec4(vNormal * .5 + .5, 1.);
        `]
      ]
    });

    const testData = new Float32Array(10000 * 3);
    for (var i = 0; i < 10000; i++) {
      testData[i * 3] = (Math.random() * 2 - 1) * 10;
      testData[i * 3 + 1] = (Math.random() * 2 - 1) * 10;
      testData[i * 3 + 2] = (Math.random() * 2 - 1) * 10;
    }

    this.mesh = new GLTFMesh({
      gl: this.gl,
      data: GLTF_DATA.meshes[0],
      // attributes: [
      //   ["instancePosition", {
      //     data: testData,
      //     size: 3,
      //     divisor: 1
      //   }]
      // ]
    });

    this.mesh.attributes.delete("uv");

    // this.mesh = new GLMesh({
    //   gl: this.gl,
    //   attributes: [
    //     ["position", {
    //       data: new Float32Array([-0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5]),
    //       size: 3
    //     }],
    //     ["instancePosition", {
    //       data: testData,
    //       size: 3,
    //       divisor: 1
    //     }],
    //     ["normal", {
    //       data: new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0]),
    //       size: 3
    //     }]
    //   ],
    //   indiceData: new Uint16Array([0, 2, 3, 0, 3, 1, 4, 6, 7, 4, 7, 5, 8, 10, 11, 8, 11, 9, 12, 14, 15, 12, 15, 13, 16, 18, 19, 16, 19, 17, 20, 22, 23, 20, 23, 21])
    // });

    console.log(this.mesh);
  }

  resize(width, height) {
    this.camera.aspectRatio = width / height;
  }
 
  update() {
    this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

    this.cameraController.update();
    
    this.program.use();
    this.program.uniforms.set("projectionView", this.camera.projectionViewMatrix);
    this.program.attributes.set(this.mesh.attributes);

    this.mesh.bind();
    this.mesh.draw({
      // elements: false
      // instanceCount: 10000
    });
  }
}
