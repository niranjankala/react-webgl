import React, { Component } from "react";
import * as BABYLON from "babylonjs";
import { Scene, Engine, Axis } from "babylonjs";
import { SkyMaterial, GridMaterial } from "babylonjs-materials";
import "babylonjs-loaders";
import "babylonjs-gui";

class BabylonOBJLoader extends Component {
  constructor(props) {
    super(props);
    this.fieldOfView = 45;
    this.nearClippingPane = 0.01;
    this.farClippingPane = 200;
  }

  componentDidMount() {
    this.props.getPageTitle('Babylon.js');
    // this.canvas = document.getElementById('renderCanvas');
    this.engine = new BABYLON.Engine(this.canvas, true, {
      preserveDrawingBuffer: true,
      stencil: true
    });
    var createScene = () => {
      let scene = new BABYLON.Scene(this.engine);

      // Adding a light
      //let light = new BABYLON.PointLight('Omni', new BABYLON.Vector3(20, 20, 100), scene);
      let light = new BABYLON.PointLight(
        "Omni",
        new BABYLON.Vector3(20, 20, 100),
        scene
      );

      // Adding an Arc Rotate Camera
      this.camera = new BABYLON.ArcRotateCamera(
        "Camera",
        BABYLON.Tools.ToRadians(90),
        BABYLON.Tools.ToRadians(0),
        80,
        new BABYLON.Vector3(0, 0, 0),
        scene
      );
      this.camera.setTarget(new BABYLON.Vector3(20, 3, 4.5));

      this.camera.attachControl(this.canvas, false);
      this.camera.inertia = 0.01;
      this.camera.panningInertia = 0;
      this.camera.wheelPrecision = 3;
      this.camera.panningSensibility =
        (1 / (this.camera.radius * Math.tan(this.camera.fov / 2) * 2)) *
        this.engine.getRenderHeight(true);
      this.createGridPlane(scene);
      this.createSky(scene);

      // The first parameter can be used to specify which mesh to import. Here we import all meshes
      //BABYLON.SceneLoader.ImportMesh('', '/assets/models/', 'WaltHead.obj', scene, (newMeshes) => {
      BABYLON.SceneLoader.ImportMesh(
        "",
        "/assets/files/models/",
        "BLIS_SmallOfficeBldg.obj",
        scene,
        meshes => {
          meshes.forEach(m => (m.rotation.x = -Math.PI / 2));
          //scene.activeCamera = null;
          // Create a default arc rotate camera and light.
          //scene.createDefaultCameraOrLight(true, false, true);
          //scene.activeCamera.attachControl(this.canvas, true);
          this.camera = scene.activeCamera;
          this.camera.beta = Math.PI / 2;
          //this.camera.alpha = Math.PI ;

          //this.camera.target = new BABYLON.Vector3(0, 0, 4.5);
          this.camera.lowerBetaLimit = Math.PI / 3;
          this.camera.upperBetaLimit = Math.PI / 2;
          // this.camera.lowerAlphaLimit = Math.PI/2;
          // this.camera.upperAlphaLimit = Math.PI / 2;
          //this.camera.allowUpsideDown = false;
          //this.camera.position=(new BABYLON.Vector3(5,10,-75  ));
          //this.camera.upVector = (new BABYLON.Vector3(0, 0, 1));
          //console.log(this.camera.wheelPrecision);
          console.log("camera target: " + this.camera.target);
          console.log(this.camera.allowUpsideDown);
          console.log("camera position: " + this.camera.position);
          console.log("camera upVector: " + this.camera.upVector);

          // Positions the camera overwriting alpha, beta, radius
          //this.camera.setPosition(this.camera.position.multiply(new BABYLON.Vector3(-1, -1, -1)));

          //this.camera.upVector =new BABYLON.Vector3(this.camera.position.x, this.camera.position.y +5, this.camera.position.z);
          //this.camera.beta = Math.PI;
          this.camera.alpha = Math.PI / 2;
          light = scene.lights[0];
          light.position = this.camera.position;
        }
      );

      // Move the light with the camera
      scene.registerBeforeRender(() => {
        light.position = this.camera.position;
      });
      //this.showAxis(10, scene);
      // Return the created scene
      return scene;
    };

    let scene = createScene();
    this.scene = scene;
    // run the render loop
    this.engine.runRenderLoop(() => {
      scene.render();
      //console.log('beta - ' + this.camera.beta);
      //console.log('alpha - ' + this.camera.alpha);
    });

    // window.addEventListener('resize', function () {
    //   scene.resize();
    // });
  }
  createGridPlane = scene => {
    const grid = BABYLON.Mesh.CreateGround(
      "grid",
      5000,
      5000,
      1000,
      scene,
      false
    );
    const groundGridMaterial = this.CreateGroundGridMaterial(scene);
    grid.material = groundGridMaterial;
    grid.position.y = -0.1;
  };
  CreateGroundGridMaterial = scene => {
    const groundMaterial = new GridMaterial("grid", scene);
    groundMaterial.gridRatio = 1;
    groundMaterial.mainColor = new BABYLON.Color3(0.296875, 0.2890625, 0.28125);
    groundMaterial.lineColor = BABYLON.Color3.White();
    //groundMaterial.opacity = .8;

    // groundMaterial.diffuseColor = BABYLON.Color3.Gray();
    //groundMaterial.specularColor = BABYLON.Color3.Black();
    //groundMaterial.alpha = .1;
    groundMaterial.backFaceCulling = true;
    return groundMaterial;
  };

  createSky = scene => {
    //Standard texture material

    // // Sky material
    // let skyboxMaterial = new SkyMaterial("skyMaterial", scene);
    // skyboxMaterial.backFaceCulling = false;
    // //skyboxMaterial._cachedDefines.FOG = true;

    // // Sky mesh (box)
    // var skybox = BABYLON.Mesh.CreateBox("skyBox", 1000.0, scene);
    // skybox.material = skyboxMaterial;

    // Skybox
    //let skyboxMaterial = new SkyMaterial('sky', scene);
    //skyboxMaterial.inclination = -0.35;
    const skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture(
      "/assets/files/textures/skybox/skybox",
      scene
    );
    skyboxMaterial.reflectionTexture.coordinatesMode =
      BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    const box = BABYLON.Mesh.CreateBox(
      "SkyBox",
      1000,
      scene,
      false,
      BABYLON.Mesh.BACKSIDE
    );
    box.material = skyboxMaterial;

    // Reflection probe
    var rp = new BABYLON.ReflectionProbe("ref", 512, scene);
    rp.renderList.push(box);
    // End SkyBox
  };

  /***************************************************************/

  // show axis
  showAxis = (size, scene) => {
    var makeTextPlane = function (text, color, size) {
      var dynamicTexture = new BABYLON.DynamicTexture(
        "DynamicTexture",
        50,
        scene,
        true
      );
      dynamicTexture.hasAlpha = true;
      dynamicTexture.drawText(
        text,
        5,
        40,
        "bold 36px Arial",
        color,
        "transparent",
        true
      );
      var plane = BABYLON.Mesh.CreatePlane("TextPlane", size, scene, true);
      let mat = new BABYLON.StandardMaterial("TextPlaneMaterial", scene);
      plane.material = mat;
      mat.backFaceCulling = false;
      mat.specularColor = new BABYLON.Color3(0, 0, 0);
      mat.diffuseTexture = dynamicTexture;
      return plane;
    };

    var axisX = BABYLON.Mesh.CreateLines(
      "axisX",
      [
        BABYLON.Vector3.Zero(),
        new BABYLON.Vector3(size, 0, 0),
        new BABYLON.Vector3(size * 0.95, 0.05 * size, 0),
        new BABYLON.Vector3(size, 0, 0),
        new BABYLON.Vector3(size * 0.95, -0.05 * size, 0)
      ],
      scene
    );
    axisX.color = new BABYLON.Color3(1, 0, 0);
    var xChar = makeTextPlane("X", "red", size / 10);
    xChar.position = new BABYLON.Vector3(0.9 * size, -0.05 * size, 0);
    var axisY = BABYLON.Mesh.CreateLines(
      "axisY",
      [
        BABYLON.Vector3.Zero(),
        new BABYLON.Vector3(0, size, 0),
        new BABYLON.Vector3(-0.05 * size, size * 0.95, 0),
        new BABYLON.Vector3(0, size, 0),
        new BABYLON.Vector3(0.05 * size, size * 0.95, 0)
      ],
      scene
    );
    axisY.color = new BABYLON.Color3(0, 1, 0);
    var yChar = makeTextPlane("Y", "green", size / 10);
    yChar.position = new BABYLON.Vector3(0, 0.9 * size, -0.05 * size);
    var axisZ = BABYLON.Mesh.CreateLines(
      "axisZ",
      [
        BABYLON.Vector3.Zero(),
        new BABYLON.Vector3(0, 0, size),
        new BABYLON.Vector3(0, -0.05 * size, size * 0.95),
        new BABYLON.Vector3(0, 0, size),
        new BABYLON.Vector3(0, 0.05 * size, size * 0.95)
      ],
      scene
    );
    axisZ.color = new BABYLON.Color3(0, 0, 1);
    var zChar = makeTextPlane("Z", "blue", size / 10);
    zChar.position = new BABYLON.Vector3(0, 0.05 * size, 0.9 * size);
  };

  componentWillUnmount() {
    //this.stop();
    //this.mount.removeChild(this.renderer.domElement)
  }

  /* EVENTS */

  onMouseDown = event => {
    console.log("onMouseDown");
    event.preventDefault();
  };

  findAllObjects = (pred, parent) => {
    // NOTE: Better to keep separate array of selected objects
    if (parent.children.length > 0) {
      parent.children.forEach(i => {
        pred.push(i);
        this.findAllObjects(pred, i);
      });
    }
  };

  onMouseUp = event => {
    console.log("onMouseUp");
  };

  onResize = event => {
    this.canvas.style.width = "100%";
    this.canvas.style.height = "100%";
    console.log(
      "onResize: " + this.canvas.clientWidth + ", " + this.canvas.clientHeight
    );
  };

  render() {
    return (
      <canvas
        style={{ width: "100%", height: "100%" }}
        onMouseDown={this.onMouseDown}
        ref={canvas => {
          this.canvas = canvas;
        }}
      />
    );
  }
}

export default BabylonOBJLoader;
