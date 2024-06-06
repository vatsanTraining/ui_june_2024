
var appointment = {}


appointment.attachEvent = function(){


     let btnElement = document.querySelector('button');


     btnElement.addEventListener('click',function(event){

        event.preventDefault();

          let form = document.querySelector('form');

        let slno =form.slno.value
        let doctorName =form.doctorName.value
        let timing = form.timing.value
        let rowData = {slno:slno,doctorName:doctorName,timing:timing}

        appointment.createTable(rowData)
        console.log('inside handler')
     })
}


appointment.createList = function(list,parentNode,listType){

    const unordList = document.createElement(listType)

    list.forEach(eachItem => {
        
        let childElement =document.createElement('li')

           childElement.textContent=eachItem

           unordList.appendChild(childElement)
     
    });

    parentNode.appendChild(unordList);


}
appointment.createRow = function(data){

    const tableRow = document.createElement("tr")

    let columns = Object.keys(data);

     let values =Object.values(data);

    for(let i =0;i<columns.length;i++){
        let tableData = document.createElement('td')
         tableData.textContent= values[i]
         tableRow.appendChild(tableData)
    }
   return tableRow;

}
appointment.createTable = function(...tableData)
{
    let tableRef = document.querySelector('table')
    tableData.forEach((eachItem)=>{

        let row =appointment.createRow(eachItem)
        tableRef.append(row)

    })
     
}
    
    let list = ['appointments must be booked One day Advance',
'call  1800-2000-2000 for assistance']
// let nameList = ['Ramesh',"suresh"]
const parentNode = document.querySelector("article")

appointment.createList(list,parentNode,'ol')

// appointment.createList(nameList,parentNode,'ul')


appointment.createTable(  
      {slno:1,doctorName:'Rakesh',timing:'weekday 7.00 pm and 8.00pm'})

appointment.attachEvent()