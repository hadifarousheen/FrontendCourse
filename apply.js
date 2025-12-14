// the only difference between call and apply is that the way we pass arguments
// In the apply method we have to pass the arguments in the form of an array.In call method we just pass the multiple arguments by using a comma ,

let name={
    firstName:"Hadifa",
    lastName:"Rousheen"
}

let name2={
    firstName:"Tom",
    lastName:"Jerry"
}

// let printFullName=function(homeTown){
//     console.log(this.firstName+" "+this.lastName+" from "+homeTown)
// }

// printFullName.call(name,"karimnagar");


// if there are multiple arguments.


let printFullName=function(state,homeTown){
    console.log(this.firstName+" "+this.lastName+" from "+homeTown+" , "+state)
}

printFullName.call(name,"Telangana","karimnagar");

// using apply method

printFullName.apply(name,["Telangana","Karimnagar"]);