const grandParent=document.querySelector('.grandParent');
const parent=document.querySelector('.parent');
const child=document.querySelector('.child');


grandParent.addEventListener("click",(e)=>{
 
    console.log("Grand Parent Clicked")
},true)

parent.addEventListener("click",(e)=>{
  
    console.log("Parent Clicked")
},false)

child.addEventListener("click",(e)=>{

    console.log("Child Clicked")
        e.stopPropagation()
},false)