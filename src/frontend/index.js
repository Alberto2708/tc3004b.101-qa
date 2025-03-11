function addition(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value; //Probable error for ' instead of ""

    fetch(`http://localhost:8080/add?num1=${num1}&num2=${num2}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = 'Result: ' + data.result;
    })
    .catch(error => console.error('Error: ',error));
    document.getElementById("result").innerText = "Result:" + result;
}

function substraction(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    let result;

    fetch(`http://localhost:8080/subtract?num1=${num1}&num2=${num2}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = 'Result: ' + data.result;
    })
    .catch(error => console.error('Error: ',error));
    document.getElementById("result").innerText = "Result:" + result;
}

function resetFields(){

    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('result').innerText = "";
}

//herro?