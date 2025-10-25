// Debouncing means delaying the execution of a function until a certain amount of time has passed since the last time it was called.

let counter=0;
const getData=()=>{
    console.log("Fetching Data",counter++)
}



const doSomeMagic=function(fn,d){
    let timer;
    return function(){
        let context=this,
        args=arguments;
        clearTimeout(timer);
        timer=setTimeout(()=>{
            fn.apply(context,args)
        },d)
    }
}

const betterFunction=doSomeMagic(getData,300);