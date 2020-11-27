function addToTable() {
    let fn = document.getElementById("firstName").value;

    let ln = document.getElementById("lastName").value;

    let mail = document.getElementById("mail").value;

    let table = document.getElementById("table");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = fn;
    cell2.innerHTML = ln;
    cell3.innerHTML = mail;
}

function delLast() {
    document.getElementById("table").deleteRow(+1);
}