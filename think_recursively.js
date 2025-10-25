let user={
    name:"Hadifa",
    address:{
        personal:{
            city:"Knr",
            area:"colony"
        }
        ,
        office:{
         city:"Hyderabad",
         area:{
            landmark:"hitechCity"
         }
        }
    }
}

// Write a function that takes this object and returns an object

// let finalObj={
//     user_name:"Hadifa",
//     user_address_personal_city:"Karimnagar",
//     user_address_personal_area:"colony",
//     user_address_office_city:"Hyderabad",
//     user_address_office_area_landmark:"hitechCity"
// }

let finalObj={}

let magic=(obj,parent)=>{
 for(let key in obj){
    if(typeof obj[key]==='object'){
        magic(obj[key],parent+"_"+key)
    }
    else{
        finalObj[parent+"_"+key]=obj[key]
    }
 }
}
 magic(user,"user");

 console.log(finalObj)