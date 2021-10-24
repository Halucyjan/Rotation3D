function matrixToVector(m) {
  var v = createVector();
  if (m[0].length == 1) {

    v.x = m[0][0];
    v.y = m[1][0];
    v.z = m[2][0];
  } else if (m.length == 1) {
    v.x = m[0][0];
    v.y = m[0][1];
    v.z = m[0][2];
  } else {
    print("cant convert matrix to vector");
  }
  return v;
}

// function vectorToMatrix(v) {
//   var m = new Array(v.length); //3
//   for (var i = 0; i < m.length+1; i++)
//     m[i] = new Array(1);

//   m[0][0] = v.x;
//   m[0][1] = v.y;
//   m[0][2] = v.z;
//   m[0][3] = 1;

//   return m;
// }

function vectorToRowMatrix(v) {
  var m = [[v.x,v.y, v.z, 1]]
  return m;
}

function vectorToColMatrix(v) { 
  var m = [
    [v.x],
    [v.y],
    [v.z],
    [1]
  ]
  return m;
}

function matrixMulti(a, b) {
  var rowA = a.length; //rows
  var colA = a[0].length; //columns
  var rowB = b.length;
  var colB = b[0].length;

  var i;
  var j;
  var k;

  if (colA != rowB) {
    print("invalid matix size")
    return 0;
  }

  var c = new Array(rowA); //rows of matris c

  for (i = 0; i < rowA; i++) //colmuns of matrix c
    c[i] = new Array(colB)

  for (i = 0; i < rowA; i++) //multiply matrixs
    for (j = 0; j < colB; j++) {
      var sum = 0;
      for (k = 0; k < rowB; k++) //it can be also colA, because its equal
        sum += a[i][k] * b[k][j];
      c[i][j] = sum;
    }
  for (i = 0; i < rowA; i++)
    for (j = 0; j < colB; j++)
      a[i][j] = c[i][j];

  //return c;
  return a;
}

function showMatrix(a, b, c) {
  var rowA = a.length; //rows
  var colA = a[0].length; //columns
  var rowB = b.length;
  var colB = b[0].length;

  var rowC = c.length;
  var colC = c[0].length;

  var i;
  var j;
  var line = "";

  print(colA + " x " + rowA)
  print("-------------------")
  for (i = 0; i < rowA; i++) {
    line = "";
    for (j = 0; j < colA; j++) {
      line = line + a[i][j] + " "
    }
    print(line)
  }
  print("\n")

  print(colB + " x " + rowB)
  print("-------------------")
  for (i = 0; i < rowB; i++) {
    line = "";
    for (j = 0; j < colB; j++) {
      line = line + b[i][j] + " "
    }
    print(line)
  }

  print("\n")

  print(colC + " x " + rowC)
  print("-------------------")
  for (i = 0; i < rowC; i++) {
    line = "";
    for (j = 0; j < colC; j++) {
      line = line + c[i][j] + " "; //tworzenie lini tekstu 
    }
    print(line) //drukowanie lini tekstu
  }
}

// var matrixA = [
//   [11, 12, 0],
//   [0, 13, 14]
// ]

// var matrixB = [
//   [15],
//   [0],
//   [16]
// ]