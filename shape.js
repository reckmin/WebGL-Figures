class Shape{

    constructor() {
        this.vertices = [];
        this.colors = [];

        // initializing of buffers
        this.buffers = {
            vertexBuffer: gl.createBuffer(),
            colorBuffer: gl.createBuffer(),
        }

        // initializing model matrix
        this.modelMatrix = mat4.create();
    }
    
    initData(vertices, colors){

        //flatten & convert data to 32 bit float arrays
        this.vertices = new Float32Array(vertices.flat());
        this.colors = new Float32Array(colors.flat());

        //send data to buffers
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.STATIC_DRAW);

        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.colorBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.colors, gl.STATIC_DRAW);

    }
    
    draw() {

        // set up attribute arrays
        Shape.setupAttribute(this.buffers.vertexBuffer, data.attributes.vertexPos);
        Shape.setupAttribute(this.buffers.colorBuffer, data.attributes.vertexColor);

        //sending modelView matrix to GPU
        gl.uniformMatrix4fv(data.uniforms.modelMatrix, gl.FALSE, this.modelMatrix);
        gl.drawArrays(gl.TRIANGLES, 0, this.vertices.length/4);

    }


    rotate(angle, axes){
        mat4.rotate(this.modelMatrix, this.modelMatrix, angle, axes);
    }

    translate(vector){
        mat4.translate(this.modelMatrix, this.modelMatrix, vector);
    }

    scale(vector){
       mat4.scale(this.modelMatrix, this.modelMatrix, vector);
    }

    static setupAttribute(buffer, location){
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.vertexAttribPointer(
                location, //location of attribute
                4, //number of elements for each attribute/vertex
                gl.FLOAT, //type of the attributes 
                gl.FALSE, // do not normilize the data
                4* Float32Array.BYTES_PER_ELEMENT, // size of one vertex
                0 // offset from the begin of the vertex to the attribute start
        );

        gl.enableVertexAttribArray(location);
    }
 
}


