// Call Method : It is used to do function borrowing.

let name={
    firstName:"Hadifa",
    lastName:"Rousheen",
    // printFullName:function(){
    //     console.log(this.firstName+" "+this.lastName)
    // }
}

// name.printFullName();
let name2={
    firstName:"Tom",
    lastName:"Jerry"
}
//name2.printFullName();
// name.printFullName.call(name2)

//name2 => where this needs to be pointed to 
// using call method we can do function borrowing


// let printFullName=function(){
//     console.log(this.firstName+" "+this.lastName)
// }

// printFullName.call(name);
// printFullName.call(name2);

// what if there are parameters for the function printFullName?

let printFullName=function(homeTown){
    console.log(this.firstName+" "+this.lastName+" from "+homeTown)
}
printFullName.call(name,"karimnagar")
// the first parameter will alwasys be the reference to the this variable

printFullName.call(name2,"cartoon");