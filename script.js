// REMEMBER TO REMOVE THE BACKGROUND

let tableElem = document.getElementById("table");

let mainFormElem = document.getElementById("mainForm");
let altitudeElem = document.getElementById("altitude");
let heightElem = document.getElementById("height");
let cancleButtonElem = document.getElementById("cancle");

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
console.log(mainFormElem);

// console.log(colorFormElem);
// console.log(activeColorElems);
// console.log(inactiveColorElems);

// console.log(alertElem);
// console.log(alertMessageElem);
// console.log(alertButtonElem);

mainFormElem.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("form was submitted");
    console.log(event);
});

altitudeElem.addEventListener("change", (event) => {
    console.log(altitudeElem.value);
});

heightElem.addEventListener("change", (event) => {
    console.log(heightElem.value);
});

alertButtonElem.addEventListener("click", (event) => {
    hideElem(alertElem);
});

cancleButtonElem.addEventListener("click", (event) => {
    console.log("byebye");
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
