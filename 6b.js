let myVar = setInterval(function () { myTimer() }, 5000);

function myTimer() {
    let newEl = document.createElement("p");
    let newText = document.createTextNode("This is a Paragraph.");
    newEl.appendChild(newText);
    document.getElementById("p").appendChild(newEl);
}