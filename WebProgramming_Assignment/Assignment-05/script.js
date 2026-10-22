function calculateSalary() {

    // Get employee information
    let name = document.getElementById("name").value.trim();

    let basicSalary = Number(document.getElementById("salary").value);

    let overtimeHours = Number(document.getElementById("overtime").value);


    // Validate input
    if (
        name === "" ||
        document.getElementById("salary").value === "" ||
        document.getElementById("overtime").value === "" ||
        basicSalary <= 0 ||
        overtimeHours < 0
    ) {
        document.getElementById("result").innerHTML =
            "<p style='color:red;'>Please enter valid information.</p>";

        return;
    }


    // Calculate allowances
    let houseRent = basicSalary * 20 / 100;

    let medical = basicSalary * 10 / 100;

    let transport = basicSalary * 5 / 100;


    // Calculate overtime payment
    let overtimePay = overtimeHours * 500;


    // Calculate gross salary
    let grossSalary =
        basicSalary + houseRent + medical + transport + overtimePay;


    // Calculate tax
    let tax = 0;

    if (grossSalary > 100000) {
        tax = grossSalary * 15 / 100;
    }
    else if (grossSalary > 50000) {
        tax = grossSalary * 10 / 100;
    }


    // Calculate net salary
    let netSalary = grossSalary - tax;


    // Display payslip
    document.getElementById("result").innerHTML = `

        <h3>Employee Payslip</h3>

        <p><strong>Employee Name:</strong> ${name}</p>

        <p>Basic Salary: ${basicSalary.toFixed(2)} Tk</p>

        <p>House Rent (20%): ${houseRent.toFixed(2)} Tk</p>

        <p>Medical Allowance (10%): ${medical.toFixed(2)} Tk</p>

        <p>Transport Allowance (5%): ${transport.toFixed(2)} Tk</p>

        <p>Overtime Payment: ${overtimePay.toFixed(2)} Tk</p>

        <hr>

        <p>Gross Salary: ${grossSalary.toFixed(2)} Tk</p>

        <p>Tax: ${tax.toFixed(2)} Tk</p>

        <h3>Net Salary: ${netSalary.toFixed(2)} Tk</h3>

    `;

}