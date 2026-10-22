// Initial balance
let balance = Number(localStorage.getItem("balance")) || 1000;

// Transaction history
let history = JSON.parse(localStorage.getItem("history")) || [];

// Deposit function
function deposit() {

    let amount = Number(document.getElementById("depositAmount").value);

    if (amount <= 0 || document.getElementById("depositAmount").value === "") {
        alert("Enter a valid deposit amount");
        return;
    }

    balance = balance + amount;

    history.push("Deposited: " + amount + " Tk");

    updateDashboard();

    document.getElementById("depositAmount").value = "";
}


// Withdraw function
function withdraw() {

    let amount = Number(document.getElementById("withdrawAmount").value);

    if (amount <= 0 || document.getElementById("withdrawAmount").value === "") {
        alert("Enter a valid withdrawal amount");
        return;
    }

    if (amount > balance) {
        alert("Insufficient balance!");
        return;
    }

    balance = balance - amount;

    history.push("Withdrawn: " + amount + " Tk");

    updateDashboard();

    document.getElementById("withdrawAmount").value = "";
}


// Update balance and history
function updateDashboard() {

    document.getElementById("balance").innerText = balance;

    let output = "";

    history.forEach(function(transaction) {
        output += "<p>" + transaction + "</p>";
    });

    document.getElementById("history").innerHTML = output;

    localStorage.setItem("balance", balance);

    localStorage.setItem("history", JSON.stringify(history));

}