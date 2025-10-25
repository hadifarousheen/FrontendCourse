// Currying means breaking a function that takes many inputs into a chain of smaller functions, each taking just one input.

function add(a, b, c) {
  return a + b + c;
}

add(1, 2, 3); // gives 6

// using function currying.

function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

add(1)(2)(3); // also gives 6

// function currying is done in two ways
// 1 . Using Bind method
// 2.  Using Closure

// using bind method

// let multiply=function(x,y){
//     console.log(x*y);
// }

// let multiplyByTwo=multiply.bind(this,2);
// multiplyByTwo(2);

// let multiplyByThree=multiply.bind(this,3);
// multiplyByThree(4);

//  what if we pass one more parameter?

// let multiplyByTwo=multiply.bind(this,2,3);
// multiplyByTwo(2); // this argument is ignored so the output = 2*3=6

// if ignored  the values 2 and 3  after this then the values 2 and 2 and considered.

// let multiplyByTwo=multiply.bind(this);
// multiplyByTwo(2,2);  // output - 2*2 =4


// using closures

let multiply=function(x){
    return function(y){
        console.log(x*y)
    }
}

let multiplyByTwo=multiply(2);
multiplyByTwo(3);