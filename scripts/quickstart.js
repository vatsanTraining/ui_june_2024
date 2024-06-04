
//  function greet(){

//     console.log('Hello')
//  }


var obj ={}

obj.greet = function(){

    console.log('Hello')
}

obj.addHeading = function(){

    var headingElment = document.getElementById("heading")
    headingElment.innerHTML="MedLife Hospitals"
   // debugger
}

obj.handleClick = function(){

console.log("hello from method")
event.preventDefault()
}
obj.attachEvent = function(){

    var anchorTagRef = document.getElementById("firstLink")

    //anchorTagRef.addEventListener('click',this.handleClick())

    anchorTagRef.addEventListener('click',this.handleClick)

}
obj.user = 'Ramesh'
obj.greet()
obj.addHeading()
obj.attachEvent()
console.log(obj.user)



// greet() //window.greet()
 //alert()  //window.alert()

