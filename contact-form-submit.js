// Function to allow only numeric input for the phone number field
document.getElementById("contact-no").addEventListener("input", function(event) {
    this.value = this.value.replace(/[^0-9-,+]/g, ""); // Remove non-numeric characters
});

function submitForm() {

    var submitButton = document.getElementById("submit-button");
    submitButton.disabled = true;
    submitButton.textContent = "Processing...";

    var formData = {
        name: document.getElementById("your-name").value,
        email: document.getElementById("your-email").value,
        subject: document.getElementById("purpose-of-contact").value,
        message: document.getElementById("message").value + ' \nmobile - '+ document.getElementById("contact-no").value
    };

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://aksystem.in:8443/contact/racekon", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                document.getElementById("form-message").innerText = "Message sent successfully!";
                // Optionally reset the form
                document.getElementById("contact-form").reset();
            } else {
                document.getElementById("form-message").innerText = "Failed to send message.";
            }
            submitButton.textContent = "SEND MESSAGE";
            submitButton.disabled = false;
        }
    };
    xhr.withCredentials = false;
    xhr.send(JSON.stringify(formData)); // Send form data as JSON
}
