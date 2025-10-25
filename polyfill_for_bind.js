// sort of browser fallback function
// our own implementation of bind function

let name={
    firstName:"Hadifa",
    lastName:"Rousheen"
}
let printFullName=function(homeTown,state){
    console.log(this.firstName+" "+this.lastName+" from "+homeTown+" , "+state)
}
Function.prototype.mybind=function(...args){
    let obj=this;
    let params=args.slice(1)
    return function(...args2){
        // obj.call(args[0])
        obj.apply(args[0],[...params,...args2])
    }
}

let printMyName=printFullName.mybind(name,"Karimnagar");
printMyName("Telangana");