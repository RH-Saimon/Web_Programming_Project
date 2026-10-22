function calculateBill() {

    // Get electricity units
    let units = Number(document.getElementById("units").value);

    // Check input
    if (document.getElementById("units").value === "" || units <= 0) {
        document.getElementById("result").innerHTML =
            "Please enter a valid number of units.";
        return;
    }

    // Calculate slab-wise bill
    let bill = 0;

    if (units <= 100) {
        bill = units * 5;
    }
    else if (units <= 200 && units > 100) {
        bill = units * 7;
    }
    else if (units <= 300 && units > 200) {
        bill = units * 9;
    }
    else {
        bill = units * 12;
    }

    // Calculate VAT
    let vat = bill * 15 / 100;

    // Service charge
    let serviceCharge = 100;

    // Calculate total bill
    let totalBill = bill + vat + serviceCharge;

    // Show warning if units exceed 300
    let warning = "";

    if (units > 300) {
        warning = "<p style='color:red;'>Warning: Electricity usage exceeds 300 units!</p>";
    }

    // Display bill
    document.getElementById("result").innerHTML = `
        <h3>Electricity Bill Receipt</h3>

        <p>Used Units: ${units}</p>

        <p>Basic Bill: ${bill.toFixed(2)} Tk</p>

        <p>VAT (15%): ${vat.toFixed(2)} Tk</p>

        <p>Service Charge: ${serviceCharge.toFixed(2)} Tk</p>

        <h3>Total Bill: ${totalBill.toFixed(2)} Tk</h3>

        ${warning}
    `;
}