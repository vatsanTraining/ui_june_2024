var crud =(function(){

    tableEntry =[];
    var idxPos=0
    var obj ={}

    mapFormData = function(form){

        
        let slno =form.slno.value
        let doctorName =form.doctorName.value
        let timing = form.timing.value
        let rowData = {slno:slno,doctorName:doctorName,timing:timing}

        return rowData;
    }
    attachEvent = function(){

        let form = document.querySelector('form')
    
         let btnElement = document.querySelector('#addBtn')
    
         btnElement.addEventListener('click',(event)=>{
            event.preventDefault();
 
            const buttonText = document.querySelector("#addBtn").innerHTML;

            if(buttonText==='Add'){

                rowData = mapFormData(form);
            addEntry(rowData)
         } else {

            let rowData = mapFormData(form)

            tableEntry[idxPos]=rowData
            let updatedRow=renderRow(rowData)
            let rowToUpdate =document.querySelector('table').rows[idxPos]

            let parent = document.querySelector('table>tbody');

            
            parent.replaceWith(rowToUpdate,updatedRow)

           let editButton = createButton(parent,rowData,"Edit")
           let delButton = createButton(parent,rowData,"Delete")

           updatedRow.append(editButton)
           updatedRow.append(delButton)
         }

         })
    }    

    handleClickToEdit =function(editButton){

        let data =editButton.getAttribute('data-element')


        editButton.addEventListener('click',()=>{


            const elemToEdit = tableEntry.find((entry) => entry.slno === data);
    
    
                      idxPos = tableEntry.indexOf(elemToEdit);
    
    
            let form = document.querySelector('form')
    
            form.slno.value =elemToEdit.slno
            form.doctorName.value=elemToEdit.doctorName
            form.timing.value=elemToEdit.timing
        
            let triggerButton = document.querySelector('#addBtn')
            triggerButton.textContent = 'Edit';
    
        })
    
    
    }

    handleClickToDel = function(delButton){

        let data =delButton.getAttribute('data-element')

        delButton.addEventListener('click',function(){


            const elemToDelete = tableEntry.find((entry) => entry.slno === data.slno);
            tableEntry.splice(tableEntry.indexOf(elemToDelete),1)
    
    
            let table = document.querySelector('table')
            table.deleteRow(this.parentNode.rowIndex);
    
    
        })
    
    }
addEntry =function(data){

    tableEntry.push(data)


    var row =renderRow(data)


    editButton = createButton(row,data.slno,"Edit") 

    handleClickToEdit(editButton)

   delButton=createButton(row,data.slno,"Delete")

   handleClickToDel(delButton)

    
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