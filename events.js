function translation(vector){
    if (cameraActive) {
       cameraTranslation(vector); return;
    }
    else  if(!allKeys) {   
        shapes[activeShape].translate(vector);
    } else {    
        for(var i = 0; i < 9; ++i){
            shapes[i].translate(vector);
        }
    }
    render();
}

function scaling(vector){
    if(!allKeys) {      
        shapes[activeShape].scale(vector);
    } else {           
        for(var i = 0; i < 9; ++i){
            shapes[i].scale(vector);
        }
    }
    render();
}

function rotation(angleInRad, xyz){
    if(!allKeys) {     
        shapes[activeShape].rotate(angleInRad, xyz);
    } else {         
        for(var i = 0; i < 9; ++i){
            shapes[i].rotate(angleInRad, xyz);
        }
    }
    render();
}


var cameraPosition = [0, 0, 0.5];

function cameraTranslation(vector) {
    console.log("Camera Translation Vector:", cameraPosition[0], cameraPosition[1],  cameraPosition[2]);
    cameraPosition[0] += vector[0]/5; //dividing by 5 for smoother translation, because camera is near the figures
    cameraPosition[1] += vector[1]/5;
    cameraPosition[2] += vector[2]/5;
    console.log("Camera Translation Vector:", cameraPosition[0], cameraPosition[1],  cameraPosition[2]);
    mat4.lookAt(viewMatrix, cameraPosition, [0, 0, 0], [0, 1, 0]);
    gl.uniformMatrix4fv(data.uniforms.viewMatrix, gl.FALSE, viewMatrix);
    render();
}


