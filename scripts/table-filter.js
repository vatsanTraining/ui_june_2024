var obj = {}


    obj.tableBodyRef = document.querySelector("tbody");
    obj.rowRef = obj.tableBodyRef.querySelectorAll("tr")

    obj.addEventToSearchFld = function () {

        let srchFld = document.querySelector("#srchFld");

        srchFld.addEventListener('keyup', function () {

            let srchString = event.target.value;


            obj.filterTableData(srchString)
        })

    }

    obj.filterTableData = function (value) {



        obj.rowRef.forEach((eachRow) => {

            eachRow.querySelectorAll('td:nth-child(2)').forEach((eachColumn) => {

                eachColumn.textContent.includes(value) ? eachRow.style.display = "table-row" : eachRow.style.display = "none"

            });


        })

    }
    obj.addEventToSearchFld();
