function simple(name,age){

    console.log(name + ','+age)
}

function simpleWithDefaultValue(name='shiv',age=50){

    console.log(name +',' +age)
}

function withArgAndReturn(dlrAmt){

     let  inrAmt = dlrAmt *90    // let means local scored variable

    return inrAmt
}

let namedFunction = function(mark){

    // let response ='fail';
    //  if(mark>50){
    //    let response='pass'
    //  } 
    //  return response

    return mark>60?'pass':'fail'   //ternery operation

}

let functionTakingAnotherFunAsArg =function(funcRef){

    console.log(funcRef)
     const response = funcRef();

     return response;
}

// you can pass a annonymous function
const result = functionTakingAnotherFunAsArg(function(){ return "Thank you"});
console.log(result)

// should not pass non functions like string , if done results in exception
//const result2 = functionTakingAnotherFunAsArg( "Thank you");

// can pass a named function
const result3 =functionTakingAnotherFunAsArg(simpleWithDefaultValue)



simple('ram',45)
simple('shyam')  // first argument is shyam and second become undefined
simple()   // both the argument becomes undefined

simpleWithDefaultValue('ram',45)
simpleWithDefaultValue('shyam')  // first argument is shyam and second becomes shiv
simpleWithDefaultValue() //arguments become shiv and 50

const resp =withArgAndReturn(100)
console.log(resp)

console.log(namedFunction)
namedFunction(60)

console.log(namedFunction(90))