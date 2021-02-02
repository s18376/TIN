function calculate() {
    var data = {
        num1: document.querySelector("#first-input").value,
        num2: document.querySelector("#second-input").value,
        func: document.querySelector("select").value
    };

    console.log(data);

    var xhr = new window.XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            var obj = JSON.parse(xhr.responseText);
            document.querySelector("textarea").value = JSON.stringify(obj);
        }
    };

    xhr.open("POST", "http://localhost:3000/calculator", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(data));
}