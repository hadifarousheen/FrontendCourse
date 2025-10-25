// the only difference between call and apply is that the way we pass arguments

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