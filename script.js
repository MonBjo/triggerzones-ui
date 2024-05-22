// REMEMBER TO REMOVE THE BACKGROUND

let tableElem = document.getElementById("table");
let mainFormElem = document.getElementById("mainForm");
let colorFormElem = document.getElementById("colorForm");

let alertElem = document.getElementById("alert");
let alertMessageElem = document.getElementById("alertMessage");
let alertButtonElem = document.getElementById("alertButton");

// debug info
console.log(tableElem);
console.log(mainFormElem);
console.log(colorFormElem);
console.log(alertElem);
console.log(alertMessageElem);
console.log(alertButtonElem);

// more debug info
showElem(alertElem);
// setTimeout(() => {
//     showModalMessage(alertElem, alertMessageElem, "this is a message for the alert");
//     console.log("Delayed for 1 second.");
// }, "1000");


alertButtonElem.addEventListener("click", (event) => {
    hideElem(alertElem);
});


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
