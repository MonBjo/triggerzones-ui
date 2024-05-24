let colorFormElem = document.getElementById("colorForm");
let activeColorElems = document.getElementsByClassName("activeZoneColor");
let inactiveColorElems = document.getElementsByClassName("inactiveZoneColor");


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