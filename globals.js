const { mat4 } = glMatrix;
const toRad = glMatrix.glMatrix.toRadian;

const shapes = [];
let gl = null;

const data = {
    attributes: {
        vertexPos: null,
        vertexColor: null
    }, uniforms: {
        viewMatrix: null,
        projectionMatrix: null,
        modelMatrix: null,
    }
}

const viewMatrix = mat4.create();
const projectionMatrix = mat4.create();
var program;

//mouse movements
var drag = false;
var old_x;
var old_y;

var activeShape = -1;
var allKeys = true;
var cameraActive = false;
//var cameraPosition = [0, 0, 0.5];
