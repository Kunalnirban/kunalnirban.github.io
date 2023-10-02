function dis(val) {
    document.getElementById("result").value += val;
}

document.addEventListener("keydown", myFunction);

function myFunction(event) {
    event.preventDefault(); // Prevent the default action of the key
    const key = event.key;
    if (/[0-9]/.test(key) || key === '00') {
        document.getElementById("result").value += key;
    }
}

function clr() {
    document.getElementById('result').value = '';
}

var cal = document.getElementById('calculator');
cal.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault(); // Prevent the default action of the key
        console.log("Enter");
        let x = document.getElementById("result").value;
        console.log(x);
        solve();
    }
});

function solve() {
    let x = document.getElementById("result").value;
    let y = math.evaluate(x);
    document.getElementById("result").value = y;
}

function calculateSquareRoot() {
    let x = document.getElementById("result").value;
    let y = Math.sqrt(parseFloat(x));
    document.getElementById("result").value = y;
}

function calculateSquare() {
    let x = document.getElementById("result").value;
    let y = parseFloat(x) * parseFloat(x);
    document.getElementById("result").value = y;
}
