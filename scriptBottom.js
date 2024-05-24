let mainFormElem = document.getElementById("mainForm");
let zoneNameElem = document.getElementById("zoneName");
let altitudeElem = document.getElementById("altitude");
let heightElem = document.getElementById("height");

let drawButtonElem = document.getElementById("drawButton");
let eventButtonElem = document.getElementById("eventButton");
let cancelButtonElem = document.getElementById("cancel");
let saveButtonElem = document.getElementById("save");



altitudeElem.addEventListener("change", (event) => {
    console.log(altitudeElem.value);

});

heightElem.addEventListener("change", (event) => {
    console.log(heightElem.value);
});

cancelButtonElem.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("byebye");
});

drawButtonElem.addEventListener("change", (event) => {
    toggleBackroundColor(drawButtonElem, "green", "blue");

});

eventButtonElem.addEventListener("change", (event) => {
    toggleBackroundColor(eventButtonElem, "green", "blue");

    // DEBUG
    let tempTableData2 = [];
    let random = Math.floor(Math.random() * 10);
    for(let i = 1; i <= 1001; i++) {
        tempTableData2.push(["aaaaaaa", random*100000]);
    }
    populateTable(tableElem, tempTableData2);
});

saveButtonElem.addEventListener("click", (event) => {
    event.preventDefault();
    
    console.log("=== START OF SAVED DATA ===");
    console.log("active color", getRGBAA(activeColorElems));
    console.log("inactive color", getRGBAA(inactiveColorElems));
    console.log("altitude", altitudeElem.value);
    console.log("height", heightElem.value);
    console.log("zoneName", zoneNameElem.value);
    console.log("points", tableElem);
    console.log("=== END OF SAVED DATA ===");

    if(zoneNameElem.value.length == 0 || !zoneNameElem.value) {
        showModalMessage(alertElem, alertMessageElem, "Please write a zone name.");
    } else {
        // DO AN ACTUAL SAVE
    }
});


function toggleBackroundColor(elem, checkedColor, uncheckedColor) {
    console.log(elem.id);
    if(elem.firstElementChild.checked) {
        elem.style.backgroundColor = `var(--${checkedColor})`;
    } else if (!elem.firstElementChild.checked) {
        elem.style.backgroundColor = `var(--${uncheckedColor})`;
    } else {
        console.log("what the heck is going on with [toggleBackgroundColor] function trying to do its thing in the " + elem.id + "element?");
    }
}