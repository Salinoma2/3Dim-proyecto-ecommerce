import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'; 
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { animate } from '@angular/animations';
import { DirectionalLight } from 'three';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { 
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0277bd);

    //Camera
    const camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 1, 5000);
    //camera.rotation.y = 45/180*Math.PI;
    //camera.rotation.x = 45/180*Math.PI;
    camera.position.x = 5;
    camera.position.y = 0;
    camera.position.z = 0;
    camera.lookAt(0,0,0,);

    //Lighting
    const hlight = new THREE.AmbientLight (0x404040, 10);
    scene.add(hlight);

    const directionalLight = new THREE.DirectionalLight(0xffffff,20);
    directionalLight.position.set(0,1,0);
    directionalLight.castShadow = true;
    //scene.add(directionalLight);
    const light = new THREE.PointLight (0xc4c4c4,10);
    light.position.set(0,300,500);
    //scene.add(light);
    const light2 = new THREE.PointLight (0xc4c4c4,10);
    light2.position.set(500,10,0);
    //scene.add(light2);
    const light3 = new THREE.PointLight (0xc4c4c4,10);
    light3.position.set(0,100,-500);
    //scene.add(light3);
    const light4 = new THREE.PointLight (0xc4c4c4,10);
    light4.position.set(-500,300,500);
    //scene.add(light4);

    //Renderer
    var renderer = new THREE.WebGLRenderer();

    //Controls
    var controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 3;
    controls.maxDistance = 10;
   // controls.enableZoom = true;
    //controls.enableRotate = true;
    controls.enableDamping = true;
    controls.dampingFactor = 0.5;
    controls.maxPolarAngle = Math.PI;
    controls.screenSpacePanning = true;
    //controls.addEventListener('change', renderer);

    var container = document.getElementById('canvas');
    if(container != null) {
      var w = container?.offsetWidth;
      var h = container?.offsetHeight;
      renderer.setSize(w,h);
      container.appendChild(renderer.domElement);
    }

    //loader
      const loader = new GLTFLoader();
      loader.load ('assets/models/house_scene/scene.gltf', function ( gltf ) {
      const car = gltf.scene.children[0];
      car.position.set(.9,-.5,.1);
      car.scale.set(0.086,0.086,0.086);
      scene.add( gltf.scene );

      const animate = () => {
        requestAnimationFrame(animate);
    
        car.rotation.z += 0.001;
        //car.rotation.y += 0.01;
    
        renderer.render(scene, camera);
    };
      animate();
    });
      
    





    /*
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    
    var container = document.getElementById('canvas');

    if(container != null) {
      var w = container?.offsetWidth;
      var h = container?.offsetHeight;
      renderer.setSize(w,h);
      container.appendChild(renderer.domElement);
    }

    const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

const animate = () => {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();*/
    



    /* THIS IS A TEST BUILD FOR THREE.JS
    
    const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

const animate = () => {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();*/


    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems,{
        dist:0,
        numVisible:5,
        fullWidth:true,
        indicators:true
        });
    });
  }

}
