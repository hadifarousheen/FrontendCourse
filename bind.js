// bind method looks same as the call method but it wil create a copy of the printFullName and bind that to the name object and return a function which can be called latter.


let name={
    firstName:"Hadifa",
    lastName:"Rousheen"
}

let printFullName=function(homeTown){
    console.log(this.firstName+" "+this.lastName+" from "+homeTown)
}

let printMyName=printFullName.bind(name,"Karimnagar");
console.log(printMyName);
printMyName();