// const Expensive=()=>{
//     console.log("Expensive call")
// }

// const throttle=(fun,limit)=>{
//     let flag=true;
//     return function(){
//         if(flag){
//             fun();
//             flag=false;
//             setTimeout(()=>{
//             flag=true;
//             },limit)
//         }
//     }
// }


// for hangling the arguments

const Expensive=(arguments)=>{
    console.log("Expensive")
}
const throttle=(fun,limit)=>{
    let flag=true;
    return function(){
        let context=this;
        let args=arguments;
        if(flag){
            fun.apply(context,args);
            flag=false;
            setTimeout(()=>{
                flag=true;
            },limit)
        }
    }
}

const betterExpensive=throttle(Expensive,600)

window.addEventListener("resize",Expensive)