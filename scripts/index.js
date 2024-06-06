
var obj ={}

obj.createElement = function(tagName,...attributes){

      element =document.createElement(tagName)
     
     attributes.forEach((eachElement,idx)=>{

        console.log(eachElement)
              element.setAttribute(eachElement.attribKey,eachElement.attribValue)

     })

     return element;

}


obj.createHeader = function(){


    let element =obj.createElement('h1',{attribKey:'id',attribValue:'top-head'},
                               {attribKey:'class',attribValue:'head-2x'})

    element.textContent ='MedLife Hospitals'

    const headerElement = document.querySelector("#top-head")

    headerElement.appendChild(element)



    let imgElement =obj.createElement('img',{attribKey:'src',attribValue:'images/logo.png'},
    {attribKey:'class',attribValue:'min-width'},{attribKey:'alt',attribValue:"Company logo"})

    headerElement.append(imgElement)

}

obj.createMenu =function(){

   
    const parentNode =document.querySelector('#top-nav-bar')

    var attribList = [
        {attribKey:'href',attribValue:'register.html',text:"Register"},
        {attribKey:'href',attribValue:'bookappointment.html',text:"Appointment"},
        {attribKey:'href',attribValue:'blog.html',text:"Blogs"},
        {attribKey:'href',attribValue:'doctor.html',text:"Doctors"},
        {attribKey:'href',attribValue:'contact.html',text:"Contact"}

    ]

    attribList.forEach((eachItem,idx)=>{

        let newElement = document.createElement('a');

        newElement.setAttribute(eachItem.attribKey,eachItem.attribValue)

        newElement.textContent=eachItem.text

        parentNode.appendChild(newElement)
    })


}


obj.createHeader()
obj.createMenu()