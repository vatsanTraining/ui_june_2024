
var obj ={}

obj.createElement = function(tagName,attributes){

      element =document.createElement(tagName)
     
     attributes.forEach((eachElement,idx)=>{

              element.setAttribute(eachElement.attribKey,eachElement.attribValue)

     })

     return element;

}


obj.createHeader = function(){

    let attribList = [{attribKey:'id',attribValue:'top-head'},
                      {attribKey:'class',attribValue:'head-2x'}]

    let element =obj.createElement('h1',attribList)

    element.innerHTML ='MedLife Hospitals'

    const headerElement = document.querySelector("#top-head")

    headerElement.appendChild(element)

}

obj.createMenu =function(){

    
    let attribList = [{attribKey:'href',attribValue:'register.html'}]
 
     let element = obj.createElement('a',attribList);

     element.textContent='Added By Javascript'

     document.querySelector('#top-nav-bar').appendChild(element)
}


obj.createHeader()
obj.createMenu()