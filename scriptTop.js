let colorFormElem = document.getElementById("colorForm");
let activeColorElems = document.getElementsByClassName("activeZoneColor");
let inactiveColorElems = document.getElementsByClassName("inactiveZoneColor");

for(let i = 0; i < activeColorElems.length; i++) {
    activeColorElems[i].nextElementSibling.innerHTML = activeColorElems[i].value;

    activeColorElems[i].addEventListener("mousemove", (event) => {
        activeColorElems[i].nextElementSibling.innerHTML = activeColorElems[i].value;
    });
}

for(let i = 0; i < inactiveColorElems.length; i++) {
    inactiveColorElems[i].nextElementSibling.innerHTML = inactiveColorElems[i].value;
        
    inactiveColorElems[i].addEventListener("mousemove", (event) => {
        inactiveColorElems[i].nextElementSibling.innerHTML = inactiveColorElems[i].value;
    });
}


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