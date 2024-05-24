let tableElem = document.getElementById("table");
let viewButtonElem = document.getElementById("viewButton");
let deleteButtonElem = document.getElementById("deleteButton");

let tableRowElems = [];

// Placeholder data
let tempTableData = [];
for(let i = 1; i <= 5; i++) {
    tempTableData.push(["xXx", "yYy"]);
}
populateTable(tableElem, tempTableData);


function createEventListeners(arrayOfElems, eventTrigger, className) {
    for(let i = 0; i < arrayOfElems.length; i++) {
        
        arrayOfElems[i].addEventListener(eventTrigger, (event) => {
            for(let j = 0; j < arrayOfElems.length; j++) {
                arrayOfElems[j].classList.remove(className);
            }
            arrayOfElems[i].classList.add(className);
        });
    }
}

viewButtonElem.addEventListener("click", (event) => {
    console.log("viewButton");
    let activeRow = getActiveRow();
    console.log(activeRow);
});
deleteButtonElem.addEventListener("click", (event) => {
    console.log("deleteButton");
    let activeRow = getActiveRow();
});


function getActiveRow() {
    let activeRow = document.getElementsByClassName("tableRowClicked");
    if(activeRow[0]) {
        return activeRow;
    } else {
        showModalMessage(alertElem, alertMessageElem, "You need to select a row before proceeding with that action.")
    }
}
        
function populateTable(table, data) {
    clearTable(table);
    for(let i = 0; i < data.length; i++) {
        let newRow = table.insertRow(i+1);
        
        let cell0 = newRow.insertCell(0);    
        let cell1 = newRow.insertCell(1);    
        let cell2 = newRow.insertCell(2);
        
        cell0.innerHTML = i;
        cell1.innerHTML = data[i][0];
        cell2.innerHTML = data[i][1];

        newRow.className = "tableRow";
        tableRowElems.push(newRow);
    }
    createEventListeners(tableRowElems, "click", "tableRowClicked");
}


function clearTable(table) {
    const tableLength = table.rows.length;

    for(let i = 1; i < tableLength; i++) {
        table.deleteRow(table.rows.length-1);
    }
}