// REMEMBER TO REMOVE THE BACKGROUND

let tableElem = document.getElementById("table");

let mainFormElem = document.getElementById("mainForm");
let zoneNameElem = document.getElementById("zoneName");
let drawButtonElem = document.getElementById("drawButton");
let altitudeElem = document.getElementById("altitude");
let heightElem = document.getElementById("height");
let cancleButtonElem = document.getElementById("cancle");
let saveButtonElem = document.getElementById("save");

let colorFormElem = document.getElementById("colorForm");
let activeColorElems = document.getElementsByClassName("activeZoneColor");
let inactiveColorElems = document.getElementsByClassName("inactiveZoneColor");
let activeRGBAA = getRGBAA(activeColorElems);
let inactiveRGBAA = getRGBAA(inactiveColorElems);

let alertElem = document.getElementById("alert");
let alertMessageElem = document.getElementById("alertMessage");
let alertButtonElem = document.getElementById("alertButton");

// debug info
console.log(tableElem);
let tempTableData = [];

for(let i = 1; i <= 20; i++) {
    tempTableData.push(["xXx", "yYy"]);
}
console.log(tempTableData);

console.log(tableElem.innerHTML);
for(let i = 0; i < tempTableData.length; i++) {
    console.log(i);
    let newRow = tableElem.insertRow(i+1);

    let cell0 = newRow.insertCell(0);    
    let cell1 = newRow.insertCell(1);    
    let cell2 = newRow.insertCell(2);

    cell0.innerHTML = i;
    cell1.innerHTML = tempTableData[i][0];
    cell2.innerHTML = tempTableData[i][1];
}

// Values
altitudeElem.addEventListener("change", (event) => {
    console.log(altitudeElem.value);
});

heightElem.addEventListener("change", (event) => {
    console.log(heightElem.value);
});

// Buttons
alertButtonElem.addEventListener("click", (event) => {
    hideElem(alertElem);
});

cancleButtonElem.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("byebye");
});

drawButtonElem.addEventListener("change", (event) => {
    if(drawButtonElem.firstElementChild.checked) {
        drawButtonElem.style.backgroundColor = "var(--green)";
    } else if (!drawButtonElem.firstElementChild.checked) {
        drawButtonElem.style.backgroundColor = "var(--blue)";
    } else {
        console.log("what the heck is going on with the [drawButton] checkbox?");
    }
});

saveButtonElem.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("saving", event);
    console.log("active color", getRGBAA(activeColorElems));
    console.log("inactive color", getRGBAA(inactiveColorElems));
    console.log("altitude", altitudeElem.value);
    console.log("height", heightElem.value);
    console.log("zoneName", zoneNameElem.value);
    if(zoneNameElem.value.length == 0) {
        showModalMessage(alertElem, alertMessageElem, "Please write a zone name.");
    }
});


function getRGBAA(RGBAAinput) {
    let RGBAAvalues = {
        color: [],
        lines: 0,
        walls: 0
    }

    for(let i = 0; i < RGBAAinput.length; i++){
        if (i < 3) {
            RGBAAvalues.color.push(RGBAAinput[i].value);
        } else if (i == 3) {
            RGBAAvalues.lines = RGBAAinput[i].value;
        } else if (i == 4) {
            RGBAAvalues.walls = RGBAAinput[i].value;
        } else {
            console.log(i);
            console.log("Something odd is happening in the [getRGBAA] function");
        }
    }

    return RGBAAvalues;
}


function hideElem(elem) {
    elem.className = "hidden";
    console.log(`Element [${elem}] is now hidden.`);
}

function showElem(elem) {
    let classes = elem.classList;
    
    for(let className of classes) {
        if(className == "hidden") {
            elem.classList.remove("hidden");
            console.log(`Element [${elem.id}] is visible again`);
        } else {
            console.log(`Element [${elem.id}] is already visible`);
        }
    }
}

function showModalMessage(modalElem, messageElem, message) {
    messageElem.innerHTML = `<p>${message}</p>`;
    showElem(modalElem);
}
