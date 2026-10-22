function generateBill() {

    // Get patient information
    let name = document.getElementById("patientName").value;

    let cabinCharge = Number(document.getElementById("cabin").value);

    let days = Number(document.getElementById("days").value);

    let medicine = Number(document.getElementById("medicine").value);

    let test = Number(document.getElementById("test").value);


    // Validate input
    if (name.trim() === "" || days <= 0 ||
        document.getElementById("days").value === "" ||
        document.getElementById("medicine").value === "" ||
        document.getElementById("test").value === "" ||
        medicine < 0 || test < 0) {

        document.getElementById("result").innerHTML =
            "<p style='color:red;'>Please enter valid information.</p>";

        return;
    }


    // Calculate cabin charge
    let totalCabinCharge = cabinCharge * days;


    // Calculate subtotal
    let subtotal = totalCabinCharge + medicine + test;


    // Calculate VAT (10%)
    let vat = subtotal * 10 / 100;


    // Calculate grand total
    let grandTotal = subtotal + vat;


    // Display bill receipt
    document.getElementById("result").innerHTML = `

        <h3>Hospital Bill Receipt</h3>

        <p><strong>Patient Name:</strong> ${name}</p>

        <p><strong>Cabin Charge:</strong>
        ${totalCabinCharge.toFixed(2)} Tk</p>

        <p><strong>Medicine Cost:</strong>
        ${medicine.toFixed(2)} Tk</p>

        <p><strong>Test Cost:</strong>
        ${test.toFixed(2)} Tk</p>

        <p><strong>Subtotal:</strong>
        ${subtotal.toFixed(2)} Tk</p>

        <p><strong>VAT (10%):</strong>
        ${vat.toFixed(2)} Tk</p>

        <h3>Grand Total: ${grandTotal.toFixed(2)} Tk</h3>

    `;

}