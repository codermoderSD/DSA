// basic
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(`i=${i} j=${j}`);
  }
}
// Here loop runs 5x5 times. for every i loop, j runs 5 times

// Twist
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < i; j++) {
    console.log(`i=${i} j=${j}`);
  }
}
// Here j loop runs {i} times

// Small Twist
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    console.log(`i=${i} j=${j}`);
  }
}
// Here j loop runs {i+1} times as it is <=

// Complex
for (let i = 0; i < 3; i++) {
  for (let j = i; j > 0; j--) {
    console.log(`i=${i} j=${j}`);
  }
}
// Here i loop runs normal, but j loop runs as per i but in reverse.
// So j runs i times but j value decreases as i value increases.

// More Complex
for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    console.log(`i=${i} j=${j}`);
  }
}
// Here loop runs i times. value of i decreases so j loop execution will also decrease.
// Check the output yourself.
