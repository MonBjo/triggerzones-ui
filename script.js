// REMEMBER TO REMOVE THE BACKGROUND

let alertElem = document.getElementById("alert");
let tableElem = document.getElementById("table");
let mainFormElem = document.getElementById("mainForm");
let colorFormElem = document.getElementById("colorForm");

console.log(alertElem);
console.log(tableElem);
console.log(mainFormElem);
console.log(colorFormElem);

// showElem(alertElem);

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