/* 
Print the following pattern 

****
****
****
****

Given value of n = 4
*/

function pattern1(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}
// pattern1(4);

/* 
Print the following pattern 

*
**
***
****

Given value of n = 4
*/

function pattern2(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}
// pattern2(4);

/* 
Print the following pattern 

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

Given value of n = 5
*/

function pattern3(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + (j + 1);
    }
    console.log(row);
  }
}

// pattern3(5);

/* 
Print the following pattern 

1
2 2
3 3 3
4 4 4 4
5 5 5 5 5

Given value of n = 5
*/

function pattern4(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + (i + 1);
    }
    console.log(row);
  }
}

// pattern4(5);

/* 
Print the following pattern 

1 2 3 4 5
1 2 3 4
1 2 3
1 2
1

Given value of n = 5
*/

function pattern5(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row = row + (j + 1);
    }
    console.log(row);
  }
}

// pattern5(5);

/* 
Print the following pattern 

****
***
**
*

Given value of n = 4
*/

function pattern6(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}

// pattern6(4);

/* 
Print the following pattern 

    *
   **
  ***
 ****
*****

Given value of n = 4
*/

// ************ Tricky

function pattern7(n) {
  for (let i = 0; i < n; i++) {
    let rows = "";
    // loop for adding empty spaces
    for (let j = 0; j < n - (i + 1); j++) {
      rows = rows + " ";
    }
    // loop for adding stars
    for (let k = 0; k < i + 1; k++) {
      rows = rows + "*";
    }
    console.log(rows);
  }
}

// pattern7(5);

/* 
Print the following pattern 

1
10
101
1010
10101
101010

Given value of n = 6
*/

function pattern8(n) {
  for (let i = 0; i < n; i++) {
    let rows = "";
    let toggle = 1;
    for (let j = 0; j <= i; j++) {
      rows = rows + toggle;

      // switch toggle
      if (toggle == 0) {
        toggle = 1;
      } else {
        toggle = 0;
      }
    }
    console.log(rows);
  }
}

// pattern8(6);

/* 
Print the following pattern 

1
01
010
1010
10101

Given value of n = 4
*/

function pattern9(n) {
  let toggle = 1;
  for (let i = 0; i < n; i++) {
    let rows = "";
    for (let j = 0; j <= i; j++) {
      rows = rows + toggle;
      if (toggle == 0) {
        toggle = 1;
      } else {
        toggle = 0;
      }
    }
    console.log(rows);
  }
}

pattern9(5);
