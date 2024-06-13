var obj =(function(){

    // function arrayExampleOne(){

    //     let names = ['ram','shyam','shiv','mani']

    //     names.forEach((value,idxpos)=>{
    //         console.log(value);
    //     })
    // }
   // arrayExampleOne() // accessible and gets invoked

   return function(){

    let names = ['ram','shyam','shiv','mani']

    names.forEach((value,idxpos)=>{
        console.log(value);
    })
}
   
})();

// arrayExampleOne();   reference error not accessible

obj()


function outer(){

    // data hiding
    let firstName ='Ramesh'  // private variable is closed around 
                             // with annonymous function
                            // hiding and encapsulating
    // encapsulation
       return function(){
        console.log(firstName);   // prints ramesh
        return firstName
    }
}
function another(){

    let funcRef = outer();
    console.log(funcRef());    //execption for another method firstName is 
                               // not accessible or its hidden
 
}

//another()


function createInc(startValue) { 

    return function (step) { 
             startValue += step; 
             return startValue; 
     }; 
}

 const funcRef = createInc(10)

 console.log(funcRef(5))
 console.log(funcRef(15))


const printArray =(array) =>{

array.forEach((element,idx) =>{

    console.log(element)
})

}

var obj2 ={}

obj2.firstName = 'ramesh'
obj2.lastName ='kumar'

obj.concat =function(){

    return obj2.firstName + obj2.lastName
}

console.log(obj.concat())

function arrayPush(){


    let cityList = ['chennai','pune','hyderabad','eluru','guntur']

   cityList.push('delhi','mumbai') // adding to end

   cityList.unshift('Agra')   // at the begining

    cityList.forEach((value,idx)=>{

        console.log(value)
     })

     const popularcities = cityList.slice(1,4)

     printArray(popularcities)

     
     const updatedPopulr = popularcities.splice(1)

     printArray(updatedPopulr)
   
    

}

arrayPush();
