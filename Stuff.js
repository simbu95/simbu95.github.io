
/*global, THREE, Coordinates, $, document, window, dat*/

var camera, scene, renderer;
var cameraControls, effectController;
var clock = new THREE.Clock();
var gridX = false;
var gridY = false;
var gridZ = false;
var axes = false;
var ground = true;

function HappyBirthday(){
	var Birthday = new THREE.MeshLambertMaterial( { 
		color: 0xff0000//0xff6600
	} );
	var Mesh=new THREE.Mesh( new THREE.CubeGeometry(50,500,100),Birthday);
	Mesh.position.x=0;
	Mesh.position.y=0;
	Mesh.position.z=0;
	scene.add(Mesh);
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(50,500,100),Birthday);
	Mesh.position.x=200;
	Mesh.position.y=0;
	Mesh.position.z=0;
	scene.add(Mesh);
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(150,50,100),Birthday);
	Mesh.position.x=100;
	Mesh.position.y=0;
	Mesh.position.z=0;
	scene.add(Mesh);
	
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(200,50,100),Birthday);
	Mesh.position.x=450;
	Mesh.position.y=-25;
	Mesh.position.z=0;
	scene.add(Mesh);
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(200,50,100),Birthday);
	Mesh.position.x=450;
	Mesh.position.y=-225;
	Mesh.position.z=0;
	scene.add(Mesh);
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(50,250,100),Birthday);
	Mesh.position.x=350;
	Mesh.position.y=-125;
	Mesh.position.z=0;
	scene.add(Mesh);
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(50,300,100),Birthday);
	Mesh.position.x=550;
	Mesh.position.y=-150;
	Mesh.position.z=0;
	scene.add(Mesh);
	
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(50,500,100),Birthday);
	Mesh.position.x=700;
	Mesh.position.y=-250;
	Mesh.position.z=0;
	scene.add(Mesh);
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(150,50,100),Birthday);
	Mesh.position.x=800;
	Mesh.position.y=-25;
	Mesh.position.z=0;
	scene.add(Mesh);
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(150,50,100),Birthday);
	Mesh.position.x=800;
	Mesh.position.y=-225;
	Mesh.position.z=0;
	scene.add(Mesh);
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(50,250,100),Birthday);
	Mesh.position.x=900;
	Mesh.position.y=-125;
	Mesh.position.z=0;
	scene.add(Mesh);
	
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(50,500,100),Birthday);
	Mesh.position.x=1050;
	Mesh.position.y=-250;
	Mesh.position.z=0;
	scene.add(Mesh);
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(150,50,100),Birthday);
	Mesh.position.x=1150;
	Mesh.position.y=-25;
	Mesh.position.z=0;
	scene.add(Mesh);
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(150,50,100),Birthday);
	Mesh.position.x=1150;
	Mesh.position.y=-225;
	Mesh.position.z=0;
	scene.add(Mesh);
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(50,250,100),Birthday);
	Mesh.position.x=1250;
	Mesh.position.y=-125;
	Mesh.position.z=0;
	scene.add(Mesh);
	
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(50,500,100),Birthday);
	Mesh.position.x=1600;
	Mesh.position.y=-250;
	Mesh.position.z=0;
	scene.add(Mesh);
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(150,50,100),Birthday);
	Mesh.position.x=1500;
	Mesh.position.y=-225;
	Mesh.position.z=0;
	scene.add(Mesh);
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(50,250,100),Birthday);
	Mesh.position.x=1400;
	Mesh.position.y=-125;
	Mesh.position.z=0;
	scene.add(Mesh);
	
	var Birthday = new THREE.MeshLambertMaterial( { 
		color: 0x99ff99
	} );
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(50,500,100),Birthday);
	Mesh.position.x=1900;
	Mesh.position.y=0;
	Mesh.position.z=0;
	scene.add(Mesh);
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(150,50,100),Birthday);
	Mesh.position.x=2000;
	Mesh.position.y=-25;
	Mesh.position.z=0;
	scene.add(Mesh);
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(150,50,100),Birthday);
	Mesh.position.x=2000;
	Mesh.position.y=-225;
	Mesh.position.z=0;
	scene.add(Mesh);
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(50,250,100),Birthday);
	Mesh.position.x=2100;
	Mesh.position.y=-125;
	Mesh.position.z=0;
	scene.add(Mesh);
	
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(50,250,100),Birthday);
	Mesh.position.x=2250;
	Mesh.position.y=-125;
	Mesh.position.z=0;
	scene.add(Mesh);
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(50,50,100),Birthday);
	Mesh.position.x=2250;
	Mesh.position.y=100;
	Mesh.position.z=0;
	scene.add(Mesh);
	
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(50,250,100),Birthday);
	Mesh.position.x=2400;
	Mesh.position.y=-125;
	Mesh.position.z=0;
	scene.add(Mesh);
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(100,50,100),Birthday);
	Mesh.position.x=2475;
	Mesh.position.y=-75;
	Mesh.position.z=0;
	scene.add(Mesh);
	
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(50,500,100),Birthday);
	Mesh.position.x=2700;
	Mesh.position.y=0;
	Mesh.position.z=0;
	scene.add(Mesh);
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(250,50,100),Birthday);
	Mesh.position.x=2700;
	Mesh.position.y=0;
	Mesh.position.z=0;
	scene.add(Mesh);
	
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(50,500,100),Birthday);
	Mesh.position.x=2900;
	Mesh.position.y=0;
	Mesh.position.z=0;
	scene.add(Mesh);
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(150,50,100),Birthday);
	Mesh.position.x=3000;
	Mesh.position.y=-25;
	Mesh.position.z=0;
	scene.add(Mesh);
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(50,250,100),Birthday);
	Mesh.position.x=3100;
	Mesh.position.y=-125;
	Mesh.position.z=0;
	scene.add(Mesh);
	
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(50,500,100),Birthday);
	Mesh.position.x=3450;
	Mesh.position.y=0;
	Mesh.position.z=0;
	scene.add(Mesh);
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(150,50,100),Birthday);
	Mesh.position.x=3350;
	Mesh.position.y=-25;
	Mesh.position.z=0;
	scene.add(Mesh);
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(150,50,100),Birthday);
	Mesh.position.x=3350;
	Mesh.position.y=-225;
	Mesh.position.z=0;
	scene.add(Mesh);
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(50,250,100),Birthday);
	Mesh.position.x=3250;
	Mesh.position.y=-125;
	Mesh.position.z=0;
	scene.add(Mesh);
	
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(200,50,100),Birthday);
	Mesh.position.x=3700;
	Mesh.position.y=-25;
	Mesh.position.z=0;
	scene.add(Mesh);
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(200,50,100),Birthday);
	Mesh.position.x=3700;
	Mesh.position.y=-225;
	Mesh.position.z=0;
	scene.add(Mesh);
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(50,250,100),Birthday);
	Mesh.position.x=3600;
	Mesh.position.y=-125;
	Mesh.position.z=0;
	scene.add(Mesh);
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(50,300,100),Birthday);
	Mesh.position.x=3800;
	Mesh.position.y=-150;
	Mesh.position.z=0;
	scene.add(Mesh);
	 
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(50,500,100),Birthday);
	Mesh.position.x=4150;
	Mesh.position.y=-250;
	Mesh.position.z=0;
	scene.add(Mesh);
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(150,50,100),Birthday);
	Mesh.position.x=4050;
	Mesh.position.y=-225;
	Mesh.position.z=0;
	scene.add(Mesh);
	Mesh=new THREE.Mesh( new THREE.CubeGeometry(50,250,100),Birthday);
	Mesh.position.x=3950;
	Mesh.position.y=-125;
	Mesh.position.z=0;
	scene.add(Mesh);
	


}

function createStairs() {

	// MATERIALS
	var stepMaterialVertical = new THREE.MeshLambertMaterial( { 
		color: 0xA85F35 
	} );
	var stepMaterialHorizontal = new THREE.MeshLambertMaterial( { 
		color: 0xBC7349 
	} );

	var stepWidth = 500;
	var stepSize = 200;
	var stepThickness = 50;
	// height from top of one step to bottom of next step up
	var verticalStepHeight = stepSize;
	var horizontalStepDepth = stepSize*2;

	var stepHalfThickness = stepThickness/2;
	
	// +Y direction is up
	// Define the two pieces of the step, vertical and horizontal
	// THREE.CubeGeometry takes (width, height, depth)
	var stepVertical = new THREE.CubeGeometry(stepWidth, verticalStepHeight, stepThickness);
	var stepHorizontal = new THREE.CubeGeometry(stepWidth, stepThickness, horizontalStepDepth);
	var stepMesh;
	for (var i=0; i<6; i++){
	// Make and position the vertical part of the step
	stepMesh = new THREE.Mesh( stepVertical, stepMaterialVertical );
	// The position is where the center of the block will be put.
	// You can define position as THREE.Vector3(x, y, z) or in the following way:
	stepMesh.position.x = 0;			// centered at origin
	stepMesh.position.y = verticalStepHeight*(i+.5)+stepThickness*i;	// half of height: put it above ground plane
	stepMesh.position.z = i*(horizontalStepDepth-stepThickness)-stepHalfThickness;			// centered at origin
	scene.add( stepMesh );

	// Make and position the horizontal part

	stepMesh = new THREE.Mesh( stepHorizontal, stepMaterialHorizontal );
	stepMesh.position.x = 0;
	// Push up by half of horizontal step's height, plus vertical step's height
	stepMesh.position.y = stepThickness*(i+.5) + (i+1)*verticalStepHeight ;
	// Push step forward by half the depth, minus half the vertical step's thickness
	stepMesh.position.z = (i+.5)*(horizontalStepDepth - stepThickness)-stepHalfThickness ;
	scene.add( stepMesh );}
}

function createCup() {
	var cupMaterial = new THREE.MeshLambertMaterial( { color: 0xFDD017});
	// THREE.CylinderGeometry takes (radiusTop, radiusBottom, height, segmentsRadius)
	var cupGeo = new THREE.CylinderGeometry( 200, 50, 400, 32 );
	var cup = new THREE.Mesh( cupGeo, cupMaterial );
	cup.position.x = 0;
	cup.position.y = 1725;
	cup.position.z = 1925;
	scene.add( cup );
	cupGeo = new THREE.CylinderGeometry( 100, 100, 50, 32 );
	cup = new THREE.Mesh( cupGeo, cupMaterial );
	cup.position.x = 0;
	cup.position.y = 1525;
	cup.position.z = 1925;
	scene.add( cup );
}

function init() {
	var canvasWidth = 846;
	var canvasHeight = 494;
	var canvasRatio = canvasWidth / canvasHeight;

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.gammaInput = true;
	renderer.gammaOutput = true;
	renderer.setSize(canvasWidth, canvasHeight);
	renderer.setClearColorHex( 0xAAAAAA, 1.0 );

	// CAMERA
	camera = new THREE.PerspectiveCamera( 45, canvasRatio, 1, 40000 );
	camera.position.set( 1000, -1000, 3400 );
	// CONTROLS
	cameraControls = new THREE.OrbitAndPanControls(camera, renderer.domElement);
	cameraControls.target.set(2100,0,0);

	// Camera(2) for testing has following values:
	// camera.position.set( 1225, 2113, 1814 );
	// cameraControls.target.set(-1800,180,630);
  
	fillScene();
}
function addToDOM() {
    document.body.appendChild( renderer.domElement );
}
function fillScene() {
	// SCENE
	scene = new THREE.Scene();
	scene.fog = new THREE.Fog( 0x808080, 3000, 6000 );
	// LIGHTS
	var ambientLight = new THREE.AmbientLight( 0x222222 );
	var light = new THREE.DirectionalLight( 0xffffff, 1.0 );
	light.position.set( 200, 400, 500 );
	
	var light2 = new THREE.DirectionalLight( 0xffffff, 1.0 );
	light2.position.set( -400, 200, -300 );

	scene.add(ambientLight);
	scene.add(light);
	scene.add(light2);

	scene.add(camera);

	/*if (ground) {
		Coordinates.drawGround({size:1000});		
	}
	if (gridX) {
		Coordinates.drawGrid({size:1000,scale:0.01});
	}
	if (gridY) {
		Coordinates.drawGrid({size:1000,scale:0.01, orientation:"y"});
	}
	if (gridZ) {
		Coordinates.drawGrid({size:1000,scale:0.01, orientation:"z"});	
	}
	if (axes) {
		Coordinates.drawAllAxes({axisLength:300,axisRadius:2,axisTess:50});
	}
	createCup();*/
	var stairs = HappyBirthday();
	scene.add(stairs);
}
//

function animate() {
	window.requestAnimationFrame(animate);
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	if ( effectController.newGridX !== gridX || effectController.newGridY !== gridY || effectController.newGridZ !== gridZ || effectController.newGround !== ground || effectController.newAxes !== axes)
	{
		gridX = effectController.newGridX;
		gridY = effectController.newGridY;
		gridZ = effectController.newGridZ;
		ground = effectController.newGround;
		axes = effectController.newAxes;

		fillScene();
	}
	renderer.render(scene, camera);
}

function setupGui() {

	effectController = {
	
		newGridX: gridX,
		newGridY: gridY,
		newGridZ: gridZ,
		newGround: ground,
		newAxes: axes,

		dummy: function() {
		}
	};

	var gui = new dat.GUI();
	/*gui.add(effectController, "newGridX").name("Show XZ grid");
	gui.add( effectController, "newGridY" ).name("Show YZ grid");
	gui.add( effectController, "newGridZ" ).name("Show XY grid");
	gui.add( effectController, "newGround" ).name("Show ground");
	gui.add( effectController, "newAxes" ).name("Show axes");*/
}



try {
  init();
  setupGui();
  addToDOM();
  animate();
} catch(e) {
    var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
    $('#container').append(errorReport+e);
}
