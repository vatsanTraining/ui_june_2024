var crud =(function(){

    tableEntry =[];

    attachEvent = function(){

        let form = document.querySelector('form')
    
         let btnElement = document.querySelector('#addBtn')
    
         btnElement.addEventListener('click',(event)=>{
            event.preventDefault();
 
            const buttonText = document.querySelector("#addBtn").innerHTML;

            if(buttonText==='Add'){
            let slno =form.slno.value
            let doctorName =form.doctorName.value
            let timing = form.timing.value
            let rowData = {slno:slno,doctorName:doctorName,timing:timing}

            addEntry(rowData)
         } else {
            alert('Edit action to be performed here')
         }

         })
    }    

addEntry =function(data){

    tableEntry.push(data)


    var row =renderRow(data)


    editButton = createButton(row,data.slno,"Edit") 


    editButton.addEventListener('click',function(){


        const elemToEdit = tableEntry.find((entry) => entry.slno === data.slno);

        console.log(elemToEdit)

        let form = document.querySelector('form')

        form.slno.value =elemToEdit.slno
        form.doctorName.value=elemToEdit.doctorName
        form.timing.value=elemToEdit.timing
    
        let triggerButton = document.querySelector('#addBtn')
        triggerButton.textContent = 'Edit';

    })

   delButton=createButton(row,data.slno,"Delete")

    delButton.addEventListener('click',function(){


        const elemToDelete = tableEntry.find((entry) => entry.slno === data.slno);
        tableEntry.splice(tableEntry.indexOf(elemToDelete),1)


        let table = document.querySelector('table')
        table.deleteRow(this.parentNode.rowIndex);


    })

    reset()
    return tableEntry;
}

reset =function(){

    let form = document.querySelector('form')

    form.slno.value =''
    form.doctorName.value=''
    form.timing.value=''
    

}

renderRow = function(...tableData)
{

    let tableRef = document.querySelector('tbody')
    tableData.forEach((eachItem)=>{

         row =createRow(eachItem)
          tableRef.append(row)

    })

   return row;
     
}

createRow = function(data){



    const tableRow = document.createElement("tr")

    let columns = Object.keys(data);
    let values =Object.values(data);

    
    for(let i =0;i<columns.length;i++){
        let tableData = document.createElement('td')
         tableData.textContent= values[i]
         tableRow.appendChild(tableData)

    }

    


  return tableRow
}

createButton =function(parent,elementToDel,buttonText){


    
    const btnElement = document.createElement("button")
    
    btnElement.setAttribute('data-element',elementToDel)

    btnElement.textContent=buttonText

     parent.append(btnElement);
     
     return btnElement;

}


attachEvent()


})();