// sum(1)(2)(3)(4)....()
// In Js functions are first class objects

let x=function(){}
function y(x){
    return function(){

    }
}

// sum(1)(2)() //3

// let sum=function(a){
//     return function(b){
//         return a+b;
//     }
// }

// sum(1)(2)(3)() //6

// let sum=function(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// let res=sum(1)(2)(3);
// console.log(res)


// using recursion

// let sum=function(a){
//     return function(b){
//         return sum(a+b)
//     }
// }

// let sum=function(a){
//     return function(b){
//         if(b){
//             return sum(a+b)
//         }
//         return a;
//     }
// }

// console.log(sum(1)(2)(3)(4)())

// using ES6

let sum=a => b =>b? sum(a+b):a;

 console.log(sum(1)(2)(3)(4)())