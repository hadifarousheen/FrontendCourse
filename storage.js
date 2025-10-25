localStorage.setItem("value",10);
localStorage.getItem("value")
localStorage.removeItem("value");
localStorage.clear() // everything becomes empty

localStorage.setItem("user",JSON.stringify(user))  // converts it into the string format
JSON.parse(localStorage.getItem("user"))  // converts back to the object format