console.log(Document)
console.log(window.alert("This is example for window😀😀😀!!!"))
console.log(window.confirm(("are you sure you want to leave?confirm message😑😐😐")))
window.alert("your password does not match!!!!! alert message 😮😮😮")

// var a=document.getElementsByTagName("h1")
// console.log(a.innerTEXT)
    

let a=document.createElement("div")        //This is to add tag dynamically...that is DOM

 a.innerHTML="this is dom"      //this is to add content in the tag 

 document.body.append(a) //this is to print in the html document

 console.log(a) 