function calculateResult() {

    let name = document.getElementById("studentName").value;

    let java = Number(document.getElementById("java").value);
    let database = Number(document.getElementById("database").value);
    let networking = Number(document.getElementById("networking").value);
    let ai = Number(document.getElementById("ai").value);
    let web = Number(document.getElementById("web").value);

    // Check empty inputs
    if (name === "" ||
        document.getElementById("java").value === "" ||
        document.getElementById("database").value === "" ||
        document.getElementById("networking").value === "" ||
        document.getElementById("ai").value === "" ||
        document.getElementById("web").value === ""
    ) {
        alert("Please fill in all fields!");
        return;
    }

    // Validate marks
    if (
        java < 0 || java > 100 ||
        database < 0 || database > 100 ||
        networking < 0 || networking > 100 ||
        ai < 0 || ai > 100 ||
        web < 0 || web > 100
    ) {
        alert("Marks must be between 0 and 100!");
        return;
    }

    // Calculate Total and Percentage
    let total = java + database + networking + ai + web;

    let percentage = total / 500 * 100;

    // Determine Grade
    let grade;

    if (percentage >= 80) {
        grade = "A+";
    } else if (percentage >= 75) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "A-";
    } else if (percentage >= 65) {
        grade = "B+";
    } else if (percentage >= 60) {
        grade = "B";
    } else if (percentage >= 50) {
        grade = "C";
    } else {
        grade = "F";
    }

    // Calculate GPA (Example mapping)
    let gpa;

    if (percentage >= 80) {
        gpa = 4.00;
    } else if (percentage >= 75) {
        gpa = 3.75;
    } else if (percentage >= 70) {
        gpa = 3.50;
    } else if (percentage >= 65) {
        gpa = 3.25;
    } else if (percentage >= 60) {
        gpa = 3.00;
    } else if (percentage >= 50) {
        gpa = 2.00;
    } else {
        gpa = 0.00;
    }

    // Calculate CGPA (Example assumption)
    let cgpa = gpa;

    // Display Result
    document.getElementById("result").innerHTML = `
        <h2>Student Marksheet</h2>

        <p><b>Student Name:</b> ${name}</p>

        <p><b>Java:</b> ${java}</p>
        <p><b>Database:</b> ${database}</p>
        <p><b>Networking:</b> ${networking}</p>
        <p><b>AI:</b> ${ai}</p>
        <p><b>Web Engineering:</b> ${web}</p>

        <hr>

        <p><b>Total Marks:</b> ${total} / 500</p>

        <p><b>Percentage:</b> ${percentage.toFixed(2)}%</p>

        <p><b>Grade:</b> ${grade}</p>

        <p><b>GPA:</b> ${gpa.toFixed(2)}</p>

        <p><b>CGPA:</b> ${cgpa.toFixed(2)}</p>

        <button onclick="window.print()">Print Marksheet</button>
    `;
}