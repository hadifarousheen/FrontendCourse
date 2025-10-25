// Inheritance is liek one object trying to access methods and properties of another object

let arr=["Hadifa","Rousheen"];

let obj={
    name:"Hadifa",
    city:"Karimnagar",
    getIntro:function(){
        console.log(this.name+" from "+this.city)
    }
}

// function fun(){}

// when JS object is created , Js Engine automatically attaches the object with hidden properties and functions.
// not only objects , it also happens with functions ,arrs,variables etc

// console.log(arr.__proto__.__proto__)
// console.log(Array.prototype)
// console.log(obj.__proto__)

// in case of objects
// console.log(obj.__proto__);
// console.log(Object.prototype);
// console.log(obj.__proto__.__proto__)

//in case of functions
// console.log(fun.__proto__)
// console.log(Function.prototype);
// console.log(fun.__proto__.__proto__)
// console.log(Object.prototype)

// In JS everything is object

let obj2={
    name:"safa"
}

// never do this
//obj2.__proto__=obj;
//obj2.__proto__ // it points to the object

// we can access obj properties in obj2
// console.log(obj2.name)
// console.log(obj2.city)
// console.log(obj2.__proto__)
// obj.getIntro();
// obj2.getIntro();

// in poyfill for bind video

Function.prototype.mybind=function(){
    console.log("xxyy")
}
function fun(){

}

fun.__proto__.mybind()
fun.mybind();

// each and every function gets access to the mybind method because of uisng Function.prototype