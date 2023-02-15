
import * as THREE from '/recipe-test/js/three.module.js';

import { GLTFLoader } from '/recipe-test/js/GLTFLoader.js';
import { RGBELoader } from '/recipe-test/js/RGBELoader.js';
let camera = [], scene = [], renderer = [], obj = [], manager = [], progress = [], box = [], container = [], progressPercent = [], progressBar = [], ring = [], light = [], ambient = [];
for (var i = 0; i < 5; i++) {
  init(i, 4, '/recipe-test/adams_place_bridge_1k.hdr', true, '/recipe-test/scene.glb');
  //"Red Apple" (https://skfb.ly/6WTZv) by RPSebb is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/) - modified by Hayato Takai
}
function init(iter, ring_zoom, env, backdrop, model) {
     var box=document.getElementById("background")
  if (iter == 0) {
    camera[iter] = new THREE.PerspectiveCamera(75, (box.offsetWidth / 4) / box.offsetHeight, 0.01, 1000);
  } if (iter == 1) {
    camera[iter] = new THREE.PerspectiveCamera(75, (box.offsetWidth / 8) / box.offsetHeight, 0.01, 1000);
  } if (iter == 2) {
    camera[iter] = new THREE.PerspectiveCamera(75, (box.offsetWidth / 6) / box.offsetHeight, 0.01, 1000);
  } if (iter == 3) {
    camera[iter] = new THREE.PerspectiveCamera(75, (box.offsetWidth / 3) / box.offsetHeight, 0.01, 1000);
  } if (iter == 4) {
    camera[iter] = new THREE.PerspectiveCamera(75, (box.offsetWidth / 6) / box.offsetHeight, 0.01, 1000);
  }
  camera[iter].position.set(0, 0, ring_zoom);
  scene[iter] = new THREE.Scene();
  ambient[iter] = new THREE.AmbientLight(0xffffff),
    light[iter] = new THREE.PointLight(0xcccccc, 2),
    // for(var i=0;i<1;i++){
    new RGBELoader().load(env, function (texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      //   scene[iter].background = new THREE.Color(0xf0f0f0);
      scene[iter].environment = texture;
      ring[iter] = new GLTFLoader(manager[iter]);
      ring[iter].load(model, function (gltf) {
        obj[iter] = gltf.scene;
        if (iter == 0) {
          obj[0].position.z = 0.3;
          obj[0].position.y = -0.25
          obj[0].position.x = -0.04;
        }
        if (iter == 1) {
          obj[1].position.z = 0.1;
          obj[1].position.y = -0.9;
        }
        if (iter == 2) {
          obj[2].position.z = 0.2;
          obj[2].position.y = -0.35;
        }
        if (iter == 3) {
          obj[3].position.z = 0.25;
          obj[3].position.y = -0.3;
        }
        if (iter == 4) {
          obj[4].position.z = 0.2;
          obj[4].position.y = -0.4;
          obj[4].position.x = 0.04;
        }
        scene[iter].add(obj[iter]);
        scene[iter].add(ambient[iter]);
        scene[iter].add(light[iter])
        scene[iter].add(camera[iter])
        animate();
      },);
    }
    );
  renderer[iter] = new THREE.WebGLRenderer({ alpha: true });
  renderer[iter].setPixelRatio(box.devicePixelRatio);
  if (iter == 0) {
    renderer[iter].setSize(box.offsetWidth / 4, box.offsetHeight);
  } if (iter == 1) {
    renderer[iter].setSize(box.offsetWidth / 8, box.offsetHeight);
  } if (iter == 2) {
    renderer[iter].setSize(box.offsetWidth / 6, box.offsetHeight);
  } if (iter == 3) {
    renderer[iter].setSize(box.offsetWidth / 3, box.offsetHeight);
  } if (iter == 4) {
    renderer[iter].setSize(box.offsetWidth / 6, box.offsetHeight);
  }
  // renderer[iter].setSize(box.offsetWidth/8, box.offsetHeight);
  renderer[iter].toneMapping = THREE.ACESFilmicToneMapping;
  renderer[iter].toneMappingExposure = 1;
  renderer[iter].outputEncoding = THREE.sRGBEncoding;
  renderer[iter].setClearColor(0x000000, 0);
  container[iter] = document.getElementById("o" + iter).replaceWith(renderer[iter].domElement);
  window.addEventListener('resize', onboxResize);
  camera[iter].position.z = 0.5;
  light[iter].position.set(10, 10, 10);


  function animate() {
    if (iter == 0) {
      obj[iter].rotation.y += 0.003;
      obj[iter].rotation.x += 0.002;
      obj[iter].rotation.z += 0.002;
      obj[iter].position.y += 0.0001;
    }
    if (iter == 1) {
      obj[iter].rotation.y += 0.003;
      obj[iter].rotation.x -= 0.002;
      obj[iter].rotation.z -= 0.004;
      obj[iter].position.y += 0.0006;
    }
    if (iter == 2) {
      obj[iter].rotation.y += 0.004;
      obj[iter].rotation.x -= 0.004;
      obj[iter].rotation.z += 0.001;
      obj[iter].position.y += 0.0002;
    }
    if (iter == 3) {
      obj[iter].rotation.y -= 0.003;
      obj[iter].rotation.x += 0.002;
      obj[iter].rotation.z -= 0.004;
      obj[iter].position.y += 0.0005;
    }
    if (iter == 4) {
      obj[iter].rotation.y -= 0.005;
      obj[iter].rotation.x += 0.002;
      obj[iter].rotation.z += 0.005;
      obj[iter].position.y += 0.0002;
    }
    if (obj[iter].position.y > (box.offsetWidth / box.offsetHeight) / 3) {
      obj[iter].position.y = -(box.offsetWidth / box.offsetHeight) / 3;
    }
    requestAnimationFrame(animate);
    renderer[iter].render(scene[iter], camera[iter]);
  }
  function onboxResize() {
    if (iter == 0) {
      camera[iter].aspect = (box.offsetWidth / 4) / box.offsetHeight;
      camera[iter].updateProjectionMatrix();
      renderer[iter].setSize((box.offsetWidth / 4), box.offsetHeight);
    }
    if (iter == 1) {
      camera[iter].aspect = (box.offsetWidth / 8) / box.offsetHeight;
      camera[iter].updateProjectionMatrix();
      renderer[iter].setSize((box.offsetWidth / 8), box.offsetHeight);
    }
    if (iter == 2) {
      camera[iter].aspect = (box.offsetWidth / 6) / box.offsetHeight;
      camera[iter].updateProjectionMatrix();
      renderer[iter].setSize((box.offsetWidth / 6), box.offsetHeight);
    }
    if (iter == 3) {
      camera[iter].aspect = (box.offsetWidth / 3) / box.offsetHeight;
      camera[iter].updateProjectionMatrix();
      renderer[iter].setSize((box.offsetWidth / 3), box.offsetHeight);
    }
    if (iter == 4) {
      camera[iter].aspect = (box.offsetWidth / 6) / box.offsetHeight;
      camera[iter].updateProjectionMatrix();
      renderer[iter].setSize((box.offsetWidth / 6), box.offsetHeight);
    }

  }
}