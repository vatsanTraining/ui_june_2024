
var appointment = {}


appointment.tableEntry =[];

appointment.addEntry =function(data){

    appointment.tableEntry.push(data)

    console.log
    return appointment.tableEntry;
}
appointment.attachEvent = function(){

    let form = document.querySelector('form')

     let btnElement = document.querySelector('button')

     console.log(btnElement);

     let btnElementList = document.querySelectorAll('button')


     let addFldElement = document.querySelector('#addFld')

     btnElement.addEventListener('click',function(event){

        event.preventDefault()


        let slno =form.slno.value
        let doctorName =form.doctorName.value
        let timing = form.timing.value
        let rowData = {slno:slno,doctorName:doctorName,timing:timing}

        appointment.addEntry(rowData)
        console.log(rowData)
     })


     addFldElement.addEventListener('click',function(){

        let extraLabel = document.createElement('label');
        extraLabel.textContent="Additonal Info"

        let inputFld = document.createElement('input');
      inputFld.setAttribute('type','text')
      inputFld.setAttribute('name','extra')
      inputFld.setAttribute('id','extra')

          
           form.append(extraLabel)
           form.append(inputFld)

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

    let tdele =document.createElement('td')
    let deleButton = document.createElement('button')
    deleButton.textContent="Delete"
    deleButton.setAttribute('data-id',data)
    tdele.appendChild(deleButton)
    
  var updatedArray=[]
    deleButton.addEventListener('click',function(){

           let nameToDelete =    this.dataset.id;
        
           console.log(nameToDelete.doctorName)


          updatedArray = tableEntry.filter((ele)=>{

            ele.doctorName===nameToDelete
           })

           console.log(updatedArray)


    })


    tableRow.append(tdele)

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