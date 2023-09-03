
const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (validateForm()) {
        // If validation succeeds, you can submit the form or perform other actions.
        // Here, we'll just show a success message.
        alert("Form submitted successfully!");
    }
});

function validateForm() {
    let isValid = true;

    // Clear all previous error messages
    clearErrorMessages();

    // Validate First Name
    const firstName = document.getElementById("firstName").value;
    if (!firstName) {
        displayError("firstNameError", "Please enter your First Name.");
        isValid = false;
    }

    // Validate Last Name
    const lastName = document.getElementById("lastName").value;
    if (!lastName) {
        displayError("lastNameError", "Please enter your Last Name.");
        isValid = false;
    }

    // Validate Father's Name
    const fatherName = document.getElementById("fatherName").value;
    if (!fatherName) {
        displayError("fatherNameError", "Please enter your Father's Name.");
        isValid = false;
    }

    // Validate Mother's Name
    const motherName = document.getElementById("motherName").value;
    if (!motherName) {
        displayError("motherNameError", "Please enter your Mother's Name.");
        isValid = false;
    }

    // Validate Phone Number
    const phoneNumber = document.getElementById("phoneNumber").value;
    if (!phoneNumber) {
        displayError("phoneNumberError", "Please enter your Phone Number.");
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById("email").value;
    if (!email) {
        displayError("emailError", "Please enter your Email.");
        isValid = false;
    }

    // Validate Gender
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        displayError("genderError", "Please select your Gender.");
        isValid = false;
    }

    // Validate Date of Birth
    const dob = document.getElementById("dob").value;
    if (!dob) {
        displayError("dobError", "Please enter your Date of Birth.");
        isValid = false;
    }

    // Validate Address
    const address = document.getElementById("address").value;
    if (!address) {
        displayError("addressError", "Please enter your Address.");
        isValid = false;
    }

    // Validate Blood Group
    const bloodGroup = document.getElementById("bloodGroup").value;
    if (!bloodGroup) {
        displayError("bloodGroupError", "Please enter your Blood Group.");
        isValid = false;
    }

    // Validate Department
    const department = document.getElementById("department").value;
    if (!department) {
        displayError("departmentError", "Please select your Department.");
        isValid = false;
    }

    // Validate Photo Upload
    const photo = document.getElementById("photo").value;
    if (!photo) {
        displayError("photoError", "Please upload your Photo.");
        isValid = false;
    }

    return isValid;
}

function displayError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
}

function clearErrorMessages() {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach((element) => {
        element.textContent = "";
    });
}
