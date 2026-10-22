const form = document.getElementById("registrationForm");
const result = document.getElementById("result");

const tuitionPerCredit = 3600;
const discountRate = 15;

// Student ID Validation
function validateStudentId(id) {
    return /^\d{4}$/.test(id);
}

// Registration Form
form.addEventListener("submit", function (event) {

    event.preventDefault();

    // Step 1: Get Student Information
    const studentName = document.getElementById("studentName").value.trim();

    const studentId = document.getElementById("studentId").value.trim();

    // Step 2: Validate Student ID
    if (!validateStudentId(studentId)) {
        result.innerHTML = `
            <p class="error">
                Invalid Student ID! Enter exactly 4 digits.
            </p>
        `;
        return;
    }

    // Step 3: Get Selected Courses
    const selectedCourses = document.querySelectorAll(
        'input[name="course"]:checked'
    );

    // Step 4: Calculate Total Credits
    let totalCredits = 0;

    let courseList = [];

    selectedCourses.forEach(function (course) {

        const credit = Number(course.dataset.credit);

        totalCredits += credit;

        courseList.push(course.value);

    });

    // Step 5: Check Course Selection
    if (selectedCourses.length === 0) {
        result.innerHTML = `
            <p class="error">
                Please select at least one course.
            </p>
        `;
        return;
    }

    // Step 6: Calculate Tuition Fee
    const tuitionFee = totalCredits * tuitionPerCredit;

    // Step 7: Calculate Discount
    let discount = 0;

    if (totalCredits > 12) {
        discount = tuitionFee * discountRate / 100;
    }

    // Step 8: Calculate Final Payment
    const finalPayment = tuitionFee - discount;

    // Step 9: Display Registration Summary
    result.innerHTML = `
        <h2>Registration Summary</h2>

        <p><strong>Student Name:</strong> ${studentName}</p>

        <p><strong>Student ID:</strong> ${studentId}</p>

        <p><strong>Selected Courses:</strong>
            ${courseList.join(", ")}
        </p>

        <p><strong>Total Credits:</strong> ${totalCredits}</p>

        <p><strong>Tuition Fee:</strong> ৳${tuitionFee.toFixed(2)}</p>

        <p><strong>Discount:</strong> ৳${discount.toFixed(2)}</p>

        <p><strong>Final Payment:</strong> ৳${finalPayment.toFixed(2)}</p>

        <p class="success">Registration Successful!</p>
    `;

});

const courses = document.querySelectorAll('input[name="course"]');

courses.forEach(function(course) {
    course.addEventListener("change", calculateCredits);
});

function calculateCredits() {
    let total = 0;

    courses.forEach(function(course) {
        if (course.checked) {
            total += Number(course.dataset.credit);
        }
    });

    document.getElementById("totalCredits").innerText = total;
}