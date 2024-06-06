
var appointment = {}



appointment.createList = function(list,parentNode,listType){

    const unordList = document.createElement(listType)

    list.forEach(eachItem => {
        
        let childElement =document.createElement('li')

           childElement.textContent=eachItem

           unordList.appendChild(childElement)
     
    });

    parentNode.appendChild(unordList);


}
let list = ['appointments must be booked One day Advance',
'call  1800-2000-2000 for assistance']
// let nameList = ['Ramesh',"suresh"]
const parentNode = document.querySelector("article")

appointment.createList(list,parentNode,'ol')

// appointment.createList(nameList,parentNode,'ul')
