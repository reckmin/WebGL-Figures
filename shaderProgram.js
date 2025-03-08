function loadShader (shaderText, shaderType){
    var shader = gl.createShader(shaderType);
    gl.shaderSource(shader, shaderText); /// difference
    gl.compileShader(shader);
    
    if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)){
        console.error("Error while compiling shader", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}

function createShaderProgram(vertexShaderText, fragmentShaderText){ // (shadertext shader text)
    const vShader = loadShader(vertexShaderText, gl.VERTEX_SHADER);
    const fShader = loadShader(fragmentShaderText, gl.FRAGMENT_SHADER);

    const program = gl.createProgram();

    gl.attachShader(program, vShader);
    gl.attachShader(program, fShader);

    gl.linkProgram(program);

    if(!gl.getProgramParameter(program, gl.LINK_STATUS)){
        console.error("Error while linking program", gl.getProgramInfoLog(program));
        return false;
    }

    // ONLY FOR DEBUG VERSION -----------------------------
    gl.validateProgram(program);
    if(!gl.getProgramParameter(program, gl.VALIDATE_STATUS)){
        console.error('Error validation program', gl.getProgramInfoLog(program));
        return;
    }

    return program;
}

function basicSetUpGL(canvas){
    gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    gl.enable(gl.DEPTH_TEST);

    gl.viewport(0, 0, canvas.clientWidth, canvas.clientHeight);
    gl.clearColor(0.728, 0.764, 0.674, 1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    return gl;
}