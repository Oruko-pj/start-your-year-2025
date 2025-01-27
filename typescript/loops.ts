// // for loop 
const MAX = 10;
for (let i = 0; i < MAX; i++) {
    console.log(i);
}


// // while loop 
let d = 0;
while (d < MAX) {
    console.log(d);
    d++;
}

// // do-while loop
d =0;
do {
    console.log(d);
    d++;
}while (d < MAX);

// for loop to iterate over an array 
const arr =[1, 2, 3];
for (let i =0; 1 < arr.length; i++){
    console.log(i, arr[i]);
}

// //  A better way to do it for-in
for (const key in arr) {
    console.log(key, arr[key]);
}

// // use the for-of loop variant when you want to just iterate over the values.
for (const val of arr) {
    console.log(val);
}

// //  collections such as arrays and strings have a forEach method that you can use if you prefer the functional programming syntax.
arr.forEach((x) => console.log(x))



//  loops can use the continue and break keywords to continue and break loop  iteration
for (const val of arr) {
    if (val >= 2) {
      console.log("Break here");
      break;
    }
  }
  
  const arr2 = [25, 100, 50, 150];
  
  for (const val of arr2) {
    if (val === 100) {
      console.log("Continue if 100");
      continue;
    } else if (val === 50) {
      console.log("Break if 50");
      break;
    }
  }




//  The only issue is that you cannot use the continue and break keywords to manipulate the iteration bound by the forEach method.     
// Fortunately, loops inside the forEach method can still use the continue and break keywords.
const arr3 = [10, 15, 2, 12, 26];
arr3.forEach((x) => {
  console.log(`Max iterations for i variable to cover: ${x}`);
  for (let i = 0; i < x; i++) {
    const i2 = i * 2;
    if (i2 > 5) {
      console.log("Break here!");
      console.log(`Value of i before break: ${i}`);
      break;
    } else if ((i % 2) === 0) {
      console.log("Continuing here!");
      continue;
    }
  }
});