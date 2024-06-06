
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

appointment.createRow = function(data){

    const tableRow = document.createElement("tr")

    let colSize = Object.keys(data);

    console.log(colSize)
    console.log(colSize.length)
        
        let tableData = document.createElement('td')
         tableData.textContent= data.doctorName

         tableRow.appendChild(tableData)

   return tableRow;

}

appointment.createTable = function(tableData)
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

let tableData = [{slno:1,doctorName:'rakesh',timing:'weekday 7.00 pm and 8.00pm'}]

appointment.createTable(tableData)