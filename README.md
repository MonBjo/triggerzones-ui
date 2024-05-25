# triggerzones-ui

a UI for the triggerzone resource to FiveM

## Specification

 -  List of all points with xy-coordinates and index. 
    -  Button to remove a point after it has been selected. 
    - Button to view a point after it has been selected
-  Input data: 
    -  Color, Two groups made with sliders and realtime preview of the color in game.
        -  Active zone of 5 values: R, G, B, A(lines) and A(walls). 
        -  Inactive zone of 5 values: R, G, B, A(lines) and A(walls). 
    -  Area name  
    -  Altitude 
    -  Height 
    -  Drawing mode
    -  Event mode
-  Save button 
-  Cancle button
-  Modal for errors/messages 

## How to use

> **! Note to user !**  
> In the examples below, I have included the getting the elements to make it clearer in case you want to create and use different elements.   
> So if you are using the standard/included elements, you **do not** need to get them.

---

### `getRGBAA(RGBAAinput)`

Input: 
- `RGBAAinput`, the element which holds the input to choose color.  

Output:
```js
{
    color: [],
    lines: 0,
    walls: 0
}
```
RGBAA is *not* a typo, because this is practically two colors in one with different alpha values; one for the walls and one for the lines on the zones.
There are currently two color elements to get input from:
- `activeColorElem`, for the active zone that's being worked on.
- `inactiveColorElem`, for all other zones.

Example: 
```js
let activeColorElems = document.getElementsByClassName("activeZoneColor");
let inactiveColorElems = document.getElementsByClassName("inactiveZoneColor");

let activeColor = getRGBAA(activeColorElems);
let inactiveColor = getRGBAA(inactiveColorElems);
```

---

### `getSingleValue(element)`

Input:   
- `element`, an input with type `text` or `number`.

Output:
- a `string` or `number` depending on the input.

Used to get a single value from an input element. Nothing more. Nothing less.

Example:
```js
let saveButtonElem = document.getElementById("save");

saveButtonElem.addEventListener("click", (event) => {
    event.preventDefault();

    var altitude = getSingleValue(altitudeElem);
    var height = getSingleValue(heightElem);
    var zoneName = getSingleValue(zoneNameElem);
});
```

---

### `isDrawingOn()`

Input:    
- none

Output:
- `boolian`

Use this to get a boolian telling if "Drawing" is checked or not.

Example:
```js
let drawing = isDrawingOn();
```

---

### `isEventOn()`

Input:    
- none

Output:
- `boolian`

Use this to get a boolian telling if "Event" is checked or not.

Example:
```js
let event = isEventOn();
```

---

### `populateTable(table, data)`

Input: 
- `table`, the table element to be populated.
- `data`, an array with arrays of data to fill the table.

Output:   
- none

This function clears the table and adds new data to it with automatic numbering based on index. In case you want to only clear the data, use `clearTable(table)`.

Example:
```js
let tableElem = document.getElementById("table");

// Example data
let tempTableData = [];
for(let i = 1; i <= 5; i++) {
    tempTableData.push(["xxxx", "yyyy"]);
}

populateTable(tableElem, tempTableData);

```

---

### `clearTable(table)`

Input: 
- `table`, the table element to be cleared.

Output:   
- none

This function simply clears the table, leaving the header-row intact. Simple as that.

Example:
```js
let tableElem = document.getElementById("table");

clearTable(tableElem);
```

---

### `getIndexOfActiveRow()`

Input:   
- none

Output
- `index` of the row.

Use this function to get the current selected row in the table. They are already used inside two event listeners in the file `scriptRightSide.js` to view or delete the point.

Example:
```js
let viewButtonElem = document.getElementById("viewButton");
let deleteButtonElem = document.getElementById("deleteButton");

viewButtonElem.addEventListener("click", (event) => {
    console.log("viewButton");
    let activeRowIndex = getIndexOfActiveRow();
});

deleteButtonElem.addEventListener("click", (event) => {
    console.log("deleteButton");
    let activeRowIndex = getIndexOfActiveRow();
});
```

---

### `showModalMessage(modalElem, messageElem, message)`

Input: 
- `modalElem`, the modal element itself.
- `messageElem`, the element containing the message.
- `message`, the message.

Output:  
- none

The only modal (for now) is `alertElem` and it contains the `alertMessageElem`. Also, this function is used in some other functions automagicly. 

Example:
```js
let alertElem = document.getElementById("alert");
let alertMessageElem = document.getElementById("alertMessage");

showModalMessage(alertElem, alertMessageElem, "this message will show in the modal.")
```