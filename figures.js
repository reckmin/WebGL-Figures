//for cube I used code from tutorium
function createCube(){
    
    var vertices = [
        // X, Y, Z, W
        0.2, 0.2, 0.2, 1,
        -0.2, 0.2, 0.2, 1,
        0.2, -0.2, 0.2, 1,

        -0.2, 0.2, 0.2, 1,
        -0.2, -0.2, 0.2, 1,
        0.2, -0.2, 0.2, 1, 

        -0.2, -0.2, -0.2, 1,
        -0.2, -0.2, 0.2, 1,
        -0.2, 0.2, 0.2, 1,

        -0.2, -0.2, -0.2, 1,
        -0.2, 0.2, 0.2, 1,
        -0.2, 0.2, -0.2, 1, 

        0.2, 0.2, -0.2, 1,
        -0.2, -0.2, -0.2, 1,
        -0.2, 0.2, -0.2, 1,

        0.2, 0.2, -0.2, 1,
        0.2, -0.2, -0.2, 1,
        -0.2, -0.2, -0.2, 1, 

        0.2, -0.2, 0.2, 1,
        -0.2, -0.2, -0.2, 1,
        0.2, -0.2, -0.2, 1,

        0.2, -0.2, 0.2, 1,
        -0.2, -0.2, 0.2, 1,
        -0.2, -0.2, -0.2, 1, 

        0.2, 0.2, 0.2, 1,
        0.2, -0.2, -0.2, 1,
        0.2, 0.2, -0.2, 1,

        0.2, -0.2, -0.2, 1,
        0.2, 0.2, 0.2, 1,
        0.2, -0.2, 0.2, 1, 

        0.2, 0.2, 0.2, 1,
        0.2, 0.2, -0.2, 1,
        -0.2, 0.2, -0.2, 1,

        0.2, 0.2, 0.2, 1,
        -0.2, 0.2, -0.2, 1,
        -0.2, 0.2, 0.2, 1,     
    ];

    const sideColors = [
        [1.0,  1.0,  1.0,  1.0],    // Front face: white
        [1.0,  0.0,  0.0,  1.0],    // Back face: red
        [0.0,  1.0,  0.0,  1.0],    // Top face: green
        [0.0,  0.0,  1.0,  1.0],    // Bottom face: blue
        [1.0,  1.0,  0.0,  1.0],    // Right face: yellow
        [1.0,  0.0,  1.0,  1.0],    // Left face: purple
    ];

    const colors = [];

    sideColors.forEach( color => {
        for( var i=0; i<6; ++i){
            colors.push(color);
        }

    });

    const cube = new Shape();

    cube.initData(vertices, colors);
    return cube;
}



function createPyramid(){
    
    var vertices = [
        // X      Y    Z
        [ 0.0,  0.3,  0.0, 1],  // 0: Top point
        [-0.2, -0.2, -0.2, 1],  // 1: base
        [-0.2, -0.2,  0.2, 1],  // 2: base
        [ 0.2, -0.2,  0.2, 1],  // 3: base
        [ 0.2, -0.2, -0.2, 1],  // 4: base
    ];

    var triangle1, triangle2, triangle3, triangle4;
    //creating base = triangle + triangle
    var base = vertices[1].concat(vertices[2], vertices[3], vertices[1], vertices[3], vertices[4]);
    // creating 4 sides = 4 triangles
    triangle1 =vertices[0].concat(vertices[2], vertices[3]);
    triangle2 =vertices[0].concat(vertices[3], vertices[4]);
    triangle3 =vertices[0].concat(vertices[1], vertices[4]);
    triangle4 =vertices[0].concat(vertices[1], vertices[2]);

    // array of all trianles points
    var vertices1 = base.concat(triangle1, triangle2, triangle3, triangle4);

    const arrayOfColors = [
        [0.0,  0.0,  1.0,  1.0],    // base: blue
        [0.0,  0.0,  1.0,  1.0],    // base: blue
        [1.0,  1.0,  1.0,  1.0],    // front side: white
        [1.0,  1.0,  0.0,  1.0],    // right side: yellow
        [0.0,  1.0,  0.0,  1.0],    // back face: green
        [1.0,  0.0,  0.0,  1.0],    // left side: red
    ];


    var colors = [];

     for( var i=0; i<6; ++i){
        const color = arrayOfColors[i];
        colors = colors.concat(color, color, color);
    }

    const pyramid = new Shape();
    pyramid.initData(vertices1, colors);
    return pyramid;
}

