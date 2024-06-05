var obj={}


obj.attachEventTypeOne= function(){

    var clickBtn = document.getElementById('clickBtn')


    console.log(clickBtn)

    // Passing annonymous function to the addEventListner
    clickBtn.addEventListener('click',function(){

        alert('inside call back')
    })


}

obj.greet = function(){

   // alert('inside call back -But Named Function')

    return function(){
        alert('inside nested function')
    }
}

obj.attachEventTypeTwo= function(){

    var clickBtn = document.getElementById('clickBtn')

    console.log(clickBtn)
    // Passing NAMED function to the addEventListner

    clickBtn.addEventListener('click',obj.greet)


}

obj.attachEventTypeImproper= function(){

    var clickBtn = document.getElementById('clickBtn')

    console.log(clickBtn)
    // Passing NAMED function to the addEventListner improper way notice () in the function Name 

    clickBtn.addEventListener('click',obj.greet())  // function (){ alert('')}


}


//obj.attachEventTypeOne()
//obj.attachEventTypeTwo()
obj.attachEventTypeImproper();
console.log(obj.greet())


