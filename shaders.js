var VShaderText = `
precision mediump float;

attribute vec4 vertexPosition;
attribute vec4 vertexColor;

uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 modelMatrix;

varying vec4 fragmentColor;

void main(){
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vertexPosition;
    fragmentColor = vertexColor;
}`;

var FShaderText = `
precision mediump float;
varying vec4 fragmentColor;
void main(){
    gl_FragColor = fragmentColor;
}`;
