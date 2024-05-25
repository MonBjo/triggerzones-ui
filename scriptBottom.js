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

});

saveButtonElem.addEventListener("click", (event) => {
    event.preventDefault();
    
    console.log("=== START OF SAVED DATA ===");
    console.log("active color", getRGBAA(activeColorElems));
    console.log("inactive color", getRGBAA(inactiveColorElems));
    console.log("altitude", getSingleValue(altitudeElem));
    console.log("height", getSingleValue(heightElem));
    console.log("zoneName", getSingleValue(zoneNameElem));
    console.log("=== END OF SAVED DATA ===");

    if(zoneNameElem.value.length == 0 || !zoneNameElem.value) {
        showModalMessage(alertElem, alertMessageElem, "Please write a zone name.");
    } else {
        // DO AN ACTUAL SAVE
    }
});

function getSingleValue(element) {
    if(!isNaN(element.value)) {
        // It's a number
        return +element.value;
    } else if(typeof element.value == "string") {
        return element.value;
    } else {
        console.log("wait what? I think it's something weird with this value inside [getSingleValue] function");
    }
}

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