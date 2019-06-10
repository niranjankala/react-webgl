import React, { Component } from "react";
import * as BABYLON from "babylonjs";
import { Scene, Engine, Axis } from "babylonjs";
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

            //   let skybox = BABYLON.MeshBuilder.CreateBox(
            //     "skyBox",
            //     { size: 100.0 },
            //     scene
            //   );
            //   let skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
            //   skyboxMaterial.backFaceCulling = false;
            //   skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture(
            //     "/assets/files/textures/skybox/skybox",
            //     scene
            //   );
            //   skyboxMaterial.reflectionTexture.coordinatesMode =
            //     BABYLON.Texture.SKYBOX_MODE;
            //   skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
            //   skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
            //   skybox.material = skyboxMaterial;
            // Ground
            let ground = BABYLON.Mesh.CreateGround(
                "ground",
                100,
                100,
                2,
                scene,
                false
            );
            let groundMaterial = new BABYLON.StandardMaterial("ground", scene);
            groundMaterial.diffuseColor = BABYLON.Color3.Gray();
            groundMaterial.specularColor = BABYLON.Color3.Black();

            ground.material = groundMaterial;

            // The first parameter can be used to specify which mesh to import. Here we import all meshes
            //BABYLON.SceneLoader.ImportMesh('', '/assets/models/', 'WaltHead.obj', scene, (newMeshes) => {
            BABYLON.SceneLoader.ImportMesh(
                "",
                "/assets/files/models/BLIS_SmallOfficeBldg/",
                "BLIS_SmallOfficeBldg.obj",
                scene,
                meshes => {
                    scene.activeCamera = null;
                    // Create a default arc rotate camera and light.
                    scene.createDefaultCameraOrLight(true, false, true);
                    scene.activeCamera.attachControl(this.canvas, true);
                    this.camera = scene.activeCamera;
                    this.camera.beta = Math.PI / 2;
                    //this.camera.alpha = Math.PI ;

                    //this.camera.target = new BABYLON.Vector3(0, 0, 4.5);
                    this.camera.wheelPrecision = 10;
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
