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

// obj()


function outer(){

    let firstName ='Ramesh'

    function display(){
        console.log(firstName);   // prints ramesh
    }
    display()
}
function another(){
    console.log(firstName);    //execption for another method firstName is 
                               // not accessible or its hidden
 
}

outer()
another()