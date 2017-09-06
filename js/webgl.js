// Simple three.js example

var mesh, renderer, scene, camera, controls;

init();
animate();

function init() {

    // renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // scene
    scene = new THREE.Scene();

    // camera
    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(20, 20, 20);

    // controls
    controls = new THREE.OrbitControls(camera);

    // ambient
    scene.add(new THREE.AmbientLight(0x222222));

    // light
    var light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(20, 20, 0);
    scene.add(light);

    // axes
    scene.add(new THREE.AxisHelper(20));

    // geometry
    var geometry = new THREE.SphereGeometry(5, 200, 200);

    // material
    var material = new THREE.MeshPhongMaterial({
        color: 0x00ffff,
        shading: THREE.FlatShading,
        transparent: true,
        opacity: 0.7,
    });

    // mesh
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

}

function animate() {

    requestAnimationFrame(animate);

    controls.update();

    renderer.render(scene, camera);

}
