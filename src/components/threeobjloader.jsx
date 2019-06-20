import React, { Component } from 'react';
import * as THREE from 'three';
import "../EnableThreeExamples";
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
//OBJLoader(THREE);

class ThreeOBJLoader extends Component {
    constructor(props) {
        super(props)
        this.fieldOfView = 45;
        this.nearClippingPane = .01;
        this.farClippingPane = 2000;

        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
        this.animate = this.animate.bind(this)
        this.onModelLoadingCompleted = this.onModelLoadingCompleted.bind(this);
        this.onMTLLoadingCompleted = this.onMTLLoadingCompleted.bind(this);


    }
    createGrondPlane = (scene) => {

        // var floor_geometry = new THREE.PlaneGeometry(1000, 1000);
        // var floor_material = new THREE.MeshPhongMaterial({ color: 0xffffff });
        // var floor = new THREE.Mesh(floor_geometry, floor_material);
        // floor.position.set(0, -2, 0);
        // floor.rotation.x -= Math.PI / 2;
        // floor.receiveShadow = true;
        // floor.castShadow = false;
        // scene.add(floor);

        const groundMaterial = new THREE.MeshBasicMaterial({ color: 0x4C4A48 });
        //const groundMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });
        // ground
        let geometry = new THREE.PlaneGeometry(1000, 1000);
        let ground = new THREE.Mesh(geometry, groundMaterial);
        //ground.position.set(0, -1, 0);
        ground.position.y = -.2;
        ground.rotation.x = - Math.PI / 2;
        //ground.rotation.x = -0.5 * Math.PI;

        //groundMaterial.side = THREE.DoubleSide;
        ground.receiveShadow = true;
        scene.add(ground);
    }

    createGrid = (scene) => {
        const grid = new THREE.GridHelper(1000, 500, 0x000000, 0x808080);
        grid.position.y = -.1;
        const gridMaterial = grid.material;
        //gridMaterial.opacity = 0.2;
        //gridMaterial.polygonOffset = true;
        //gridMaterial.polygonOffsetFactor = -0.1;
        //gridMaterial.transparent = true;
        this.scene.add(grid);
    }
    createSky = (scene) => {
        const urlPrefix = '/assets/files/textures/skybox/skybox_';
        const urls = [urlPrefix + 'px.jpg', urlPrefix + 'nx.jpg',
        urlPrefix + 'py.jpg', urlPrefix + 'ny.jpg',
        urlPrefix + 'pz.jpg', urlPrefix + 'nz.jpg'];

        let materialArray = [];
        for (let index = 0; index < urls.length; index++) {
            const textureFilePath = urls[index];

            let texture = new THREE.TextureLoader().load(textureFilePath);
            // immediately use the texture for material creation
            let material = new THREE.MeshBasicMaterial({ map: texture });
            material.side = THREE.BackSide;
            materialArray.push(material);
        }

        let skyboxGeo = new THREE.BoxGeometry(1000, 1000, 1000);
        let skybox = new THREE.Mesh(skyboxGeo, materialArray);
        scene.add(skybox);
    }

    createScene = () => {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xffffff);
        const axes = new THREE.AxesHelper(50);
        axes.position.y = axes.position.y - .5;
        this.scene.add(axes);
        this.createGrondPlane(this.scene);
        this.createGrid(this.scene);

        window['scene'] = this.scene;

        this.createSky(this.scene);
        let mtlLoader = new MTLLoader();
        mtlLoader.load('./assets/files/models/BLIS_SmallOfficeBldg/BLIS_SmallOfficeBldg.mtl', this.onMTLLoadingCompleted);
        //loader.load('assets/model/BLIS_SmallOfficeBldg.obj', this.onModelLoadingCompleted);
    }

    onMTLLoadingCompleted(materials) {
        materials.preload();
        var loader = new OBJLoader();
        loader.setMaterials(materials);
        loader.load('./assets/files/models/BLIS_SmallOfficeBldg/BLIS_SmallOfficeBldg.obj', this.onModelLoadingCompleted);
    }

    onModelLoadingCompleted(collada) {
        //collada.position.y = -95;
        this.object = collada;
        collada.rotation.x = - Math.PI / 2;
        this.scene.add(collada);
        this.renderScene();
    }

    createLight = () => {
        var ambientLight = new THREE.AmbientLight(0x444444);
        this.scene.add(ambientLight);

        this.directionalLight = new THREE.DirectionalLight(0xffeedd);
        this.directionalLight.position.set(0, 0, 1).normalize();
        this.scene.add(this.directionalLight);

    }

    createCamera = () => {
        let aspectRatio = this.getAspectRatio();
        this.camera = new THREE.PerspectiveCamera(
            this.fieldOfView,
            aspectRatio,
            this.nearClippingPane,
            this.farClippingPane
        );

        var pointLight = new
            THREE.PointLight(0xffffff, 0.8);
        pointLight.position.set(10, 10, 0);
        this.camera.add(pointLight);
        // Set position and look at        
        this.camera.position.x = 0;
        this.camera.position.y = 20;
        this.camera.position.z = 80;
        //this.camera.up = new THREE.Vector3(0,0,1 );

    }

    getAspectRatio = () => {
        let height = this.canvas.clientHeight;
        if (height === 0) {
            return 0;
        }
        return this.canvas.clientWidth / this.canvas.clientHeight;
    }


    startRendering = () => {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        });
        this.renderer.setPixelRatio(devicePixelRatio);
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    }


    componentDidMount() {
        //this.THREE = THREE
        this.createScene();
        this.createLight();
        this.createCamera();
        this.startRendering();
        this.addControls();
        this.start()
    }
    componentWillUnmount() {
        this.stop()
        //this.mount.removeChild(this.renderer.domElement)
    }
    start = () => {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate)
        }
    }
    stop = () => {
        cancelAnimationFrame(this.frameId)
    }
    animate = () => {
        //this.cube.rotation.x += 0.01
        //this.cube.rotation.y += 0.01
        this.renderScene()
        this.frameId = window.requestAnimationFrame(this.animate)
    }
    renderScene = () => {
        this.directionalLight.position.copy(this.camera.position);
        this.renderer.render(this.scene, this.camera)
    }

    addControls = () => {
        this.controls = new OrbitControls(this.camera);
        this.controls.rotateSpeed = 1.0;
        this.controls.zoomSpeed = 1.2;
        // How far you can orbit vertically, upper and lower limits.
        // Range is 0 to Math.PI radians.
        this.controls.minPolarAngle = Math.PI / 4; // radians
        this.controls.maxPolarAngle = Math.PI; // radians

        // How far you can orbit horizontally, upper and lower limits.
        // If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
        //this.controls.minAzimuthAngle = 0; // radians
        //this.controls.maxAzimuthAngle = 0; // radians



        this.controls.addEventListener('change', this.renderScene);

    }

    /* EVENTS */

    onMouseDown = (event) => {
        console.log("onMouseDown");
        event.preventDefault();

        // Example of mesh selection/pick:
        var raycaster = new THREE.Raycaster();
        var mouse = new THREE.Vector2();
        mouse.x = (event.clientX / this.renderer.domElement.clientWidth) * 2 - 1;
        mouse.y = - (event.clientY / this.renderer.domElement.clientHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, this.camera);


        var obj = [];
        this.findAllObjects(obj, this.scene);
        var intersects = raycaster.intersectObjects(obj);
        console.log("Scene has " + obj.length + " objects");
        console.log(intersects.length + " intersected objects found")
        intersects.forEach((i) => {
            console.log(i.object); // do what you want to do with object
        });

    }

    findAllObjects = (pred, parent) => {
        // NOTE: Better to keep separate array of selected objects
        if (parent.children.length > 0) {
            parent.children.forEach((i) => {
                pred.push(i);
                this.findAllObjects(pred, i);
            });
        }
    }

    onMouseUp = (event) => {
        console.log("onMouseUp");
    }

    onResize = (event) => {
        this.canvas.style.width = "100%";
        this.canvas.style.height = "100%";
        console.log("onResize: " + this.canvas.clientWidth + ", " + this.canvas.clientHeight);

        this.camera.aspect = this.getAspectRatio();
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
        this.renderScene();
    }

    render() {
        return (
            <canvas
                style={{ width: '100%', height: '100%' }}
                onMouseDown={this.onMouseDown}
                ref={(canvas) => { this.canvas = canvas }}
            />
        )
    }
}

export default ThreeOBJLoader;