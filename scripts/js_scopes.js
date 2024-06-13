
// function outer(){

//     var global =50
//     var localX
//     function showValues(){


//          localX = 100;
//         let localY =200

//         console.log(flag)
//          for(var i =0;i<=5;i++){
//             console.log(i)
//          }
//          var flag = 'hoisted'
//          if(true){
    
//             let localZ= 300
    
//             debugger
//             console.log(localX,localY,global)
    
//          }
    
    
//     }
    
//     showValues()

// }

// outer()


// // console.log(localX)

// // console.log(localZ)

// // console.log(global)


// console.log('done')


 var globalScope =100

 function show(){

   var funcScope = 50

   if(true){
      let localScope =25
      const local= 10

   }
   debugger

   console.log(localScope)

 }

 show()
 