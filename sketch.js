var v = new Array(8)
var angle = 1;
var rotationMatrixZ;
var m = new Array(8);

const projection = [
    [1, 0, 0],
    [0, 1, 0],
];

function setup() {
  createCanvas(500, 500);

  rotationMatrixZ = [
    [cos(angle), -sin(angle),  0],
    [sin(angle), cos(angle),   0],
    [0, 0, 1]
  ]

  v[0] = createVector(50, 50, 50)
  v[1] = createVector(-50, 50, 50)
  v[2] = createVector(-50, -50, 50)
  v[3] = createVector(50, -50, 50)

  v[4] = createVector(50, 50, -50)
  v[5] = createVector(-50, 50, -50)
  v[6] = createVector(-50, -50, -50)
  v[7] = createVector(50, -50, -50)

  for (var i = 0; i < 8; i++)
    m[i] = vectorToRowMatrix(v[i]);
  //console.log(m[1])
}

function draw() {
  angleMode(DEGREES)

  rotationMatrixX = [
    [1,  0,           0,          0],
    [0,  cos(angle),  sin(angle), 0],
    [0, -sin(angle),  cos(angle), 0],
    [0,  0,           0,          1],
    

  ]

  rotationMatrixY = [
    [cos(angle), 0,  -sin(angle), 0],
    [0,          1,   0,          0],
    [sin(angle), 0,   cos(angle), 0],
    [0,          0,   0,          1],

  ]

  rotationMatrixZ = [
    [ cos(angle), sin(angle), 0, 0],
    [-sin(angle), cos(angle), 0, 0],
    [ 0,          0,          1, 0],
    [ 0,          0,          0, 1],
  ]
  
  var xPrim = 0.001, yPrim = 0.001;
  
  translationMatrix = [
  [1,     0,      0, 0],
  [0,     1,      0, 0],
  [xPrim, yPrim,  1, 0],
  [0,     0,      0, 1],
  ]
  
  translationMatrixNegative = [
  [1,       0,      0, 0],
  [0,       1,      0, 0],
  [-xPrim, -yPrim,  1, 0],
  [0,       0,      0, 1],
  ]
  
  scaleMatrix = [
  [1.001, 0,  0],
  [0, 1.001,  0],
  [0, 0,  1],
  ]


  background(220);
  stroke(100)
  fill(0)
  translate(width / 2, height / 2)

  for (var i = 0; i < 8; i++) {
    // circle(v[i].x, v[i].y, 5) //dla vektora
    circle(m[i][0][0], m[i][0][1], 5)

    m[i] = matrixMulti(m[i], rotationMatrixZ)
     m[i] = matrixMulti(m[i], rotationMatrixY)
     //m[i] = matrixMulti(m[i], rotationMatrixX)

    
    var z = 1 / (3 - m[i].z);
    const projection = [
      [z, 0, 0],
      [0, z, 0],
    ];
      //https://editor.p5js.org/codingtrain/sketches/r8l8XXD2A
    //let projected2d = matrixMulti(m[i],projection)

    if (i < 3)
      line(m[i][0][0], m[i][0][1], m[i + 1][0][0], m[i + 1][0][1])


    if (i > 3 && i < 7)
      line(m[i][0][0], m[i][0][1], m[i + 1][0][0], m[i + 1][0][1])

  }
  line(m[3][0][0], m[3][0][1], m[0][0][0], m[0][0][1]) //zamkniecie 1
  line(m[7][0][0], m[7][0][1], m[4][0][0], m[4][0][1]) //zamkniecie 2

  line(m[4][0][0], m[4][0][1], m[0][0][0], m[0][0][1])
  line(m[5][0][0], m[5][0][1], m[1][0][0], m[1][0][1])
  line(m[6][0][0], m[6][0][1], m[2][0][0], m[2][0][1])
  line(m[7][0][0], m[7][0][1], m[3][0][0], m[3][0][1])

  //for ( i = 0; i < 8; i++)

}