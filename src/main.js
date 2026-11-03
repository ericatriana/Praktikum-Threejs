import * as THREE
  from "three";

import "./style.css";

const scene =
  new THREE.Scene();

  scene.background =
  new THREE.Color(
    0x0b1020
  );

  const sizes = {
  width:
    window.innerWidth,

  height:
    window.innerHeight
};

const camera =
  new THREE.PerspectiveCamera(
    60,
    sizes.width /
      sizes.height,
    0.1,
    100
  );

camera.position.set(
  4,
  3,
  6
);

const renderer =
  new THREE.WebGLRenderer({
    antialias: true
  });

  renderer.setSize(
  sizes.width,
  sizes.height
);

const app =
  document.getElementById(
    "app"
  );

app.appendChild(
  renderer.domElement
);

renderer.render(
  scene,
  camera
);

renderer.render(
  scene,
  camera
);