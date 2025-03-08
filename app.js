window.onload = async() => {

    let canvas = document.getElementById("canvasGL");
    gl = basicSetUpGL(canvas);

    program = createShaderProgram( VShaderText, FShaderText);
    gl.useProgram(program);

    data.attributes.vertexPos = gl.getAttribLocation(program, "vertexPosition");
    data.attributes.vertexColor = gl.getAttribLocation(program, "vertexColor");
    data.uniforms.modelMatrix = gl.getUniformLocation(program, "modelMatrix");
    data.uniforms.viewMatrix = gl.getUniformLocation(program, "viewMatrix");
    data.uniforms.projectionMatrix = gl.getUniformLocation(program, "projectionMatrix");

    mat4.perspective(projectionMatrix, toRad(45), canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    gl.uniformMatrix4fv(data.uniforms.projectionMatrix, gl.FALSE, projectionMatrix);


    mat4.lookAt(viewMatrix, [0, 0, 0.5], [0, 0, 0], [0, 1, 0]); //where store, eye, center, up
    gl.uniformMatrix4fv(data.uniforms.viewMatrix, gl.FALSE, viewMatrix);

    for(var i=0; i<9; i++){
        if(i%2) shapes.push(createCube());
        else shapes.push(createPyramid());
    }

        //first line
    shapes[0].translate([-0.8, 0.8, -3.0]);
    shapes[1].translate([  0.0, 0.8, -3.0]);
    shapes[2].translate([ 0.8, 0.8, -3.0]);
        //second line
    shapes[3].translate([-0.8, 0.0, -3.0]);
    shapes[4].translate([  0.0, 0.0, -3.0]);
    shapes[5].translate([ 0.8, 0.0, -3.0]);
        //third line
    shapes[6].translate([-0.8, -0.8, -3.0]);
    shapes[7].translate([  0.0, -0.8, -3.0]);
    shapes[8].translate([ 0.8, -0.8, -3.0]);

    render();
    canvas.addEventListener("mousedown", mouseDown, false);
    canvas.addEventListener("mouseup", mouseUp, false);
    canvas.addEventListener("mouseout", mouseUp, false);
    canvas.addEventListener("mousemove", mouseMove, false);
   
}

function render() {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    shapes.forEach(shape => {
        shape.draw();
    });
}


var mouseDown = function (e){
    drag = true;
    old_x = e.pageX;
    old_y = e.pageY;
    e.preventDefault();
}

var mouseUp = function (e){
    drag = false;
    e.preventDefault();
}

var mouseMove = function (e){
    if(!drag) return false;
  
   translation([(e.pageX-old_x)/100, -(e.pageY-old_y)/100, 0]); 
    old_x = e.pageX;
    old_y = e.pageY;
    e.preventDefault();
}


window.onkeydown = function (event){
switch(event.key){
    //choosing the shape or camera
    case ' ':
        cameraActive = !cameraActive;
        break;
    case '0':
        allKeys = true;
        break;
    case '1':
        allKeys = false;
        activeShape = 0;
        break;
    case '2':
        allKeys = false;
        activeShape = 1;
        break;
    case '3':
        allKeys = false;
        activeShape = 2;
        break;
    case '4':
        allKeys = false;
        activeShape = 3;
        break;
    case '5':
        allKeys = false;
        activeShape = 4;
        break;
    case '6':
        allKeys = false;
        activeShape = 5;
        break;
    case '7':
        allKeys = false;
        activeShape = 6;
        break;
    case '8':
        allKeys = false;
        activeShape = 7;
        break;
    case '9':
        allKeys = false;
        activeShape = 8;
        break;   

    // translations
    case "ArrowRight":
        translation([0.1, 0, 0]);
        break;
    case "ArrowLeft":
        translation([-0.1, 0, 0]);
        break;
    case "ArrowUp": 
        translation([0, 0.1, 0]);
        break;
    case "ArrowDown": 
        translation([0, -0.1, 0]);
        break;
    case ".":
        translation([0, 0, 0.1]);
        break;
    case ",":
        translation([0, 0, -0.1]);
        break;

    //scalling
    case 'a':   
        scaling([0.9, 1, 1]);
        break;
    case 'A':
        scaling([1.1, 1, 1]);
        break;
    case 'b':
        scaling([1, 0.9, 1]);
        break;
    case 'B':
        scaling([1, 1.1, 1]);
        break;
    case 'c':
        scaling([1, 1, 0.9]);
        break;
    case 'C':
        scaling([1, 1, 1.1]);
        break;
    
    // rotations
    case 'i':
        rotation(toRad(10), [1,0,0]); 
        break;
    case 'k':
        rotation (toRad(-10), [1,0,0]);
        break;
    case 'o':
        rotation (toRad(10), [0,1,0]);
        break;
    case 'u':
        rotation (toRad(-10), [0,1,0]);
        break;
    case 'l':
        rotation (toRad(10), [0, 0, 1]);
        break;
    case 'j': 
        rotation (toRad(-10), [0,0,1]);
        break; 
    default:
        break;
    }

}