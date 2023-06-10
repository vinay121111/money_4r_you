document.getElementById("signUpForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var firstName = document.querySelector("#signUpForm .first").value;
    var lastName = document.querySelector("#signUpForm .last").value;
    var email = document.querySelector("#signUpForm .email2").value;
    var password = document.querySelector("#signUpForm .password2").value;

    // Email validation using regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isValidEmail = emailRegex.test(email);

    var missingFields = [];
    if (firstName.trim() === "") {
        missingFields.push("First Name");
    }
    if (lastName.trim() === "") {
        missingFields.push("Last Name");
    }
    if (!email || !isValidEmail) {
        missingFields.push("Email");
    }

    if (missingFields.length === 0) {
        var mailtoLink = "mailto:vinaydr20033@gmail.com" +
            "?subject= NEW USER SIGN UP Your Email and Password encrypted 🤝 THANK YOU FOR SIGNING UP! YOUR REGISTRATION IS COMPLETE. OUR TEAM WILL NOW VERIFY YOUR DETAILS, AND YOU CAN EXPECT TO RECEIVE A CONFIRMATION WITHIN 10 HOURS.😊" +
            "&body=First Name: " + firstName +
            "%0D%0ALast Name: " + lastName +
            "%0D%0AEmail: " + email +
            "%0D%0APassword: " + password;

        window.location.href = mailtoLink;

        // Create a <style> element to modify the font-size of the alert
        var styleElement = document.createElement("style");
        document.head.appendChild(styleElement);

        // Display the alert after redirecting
    

        // Clear the form fields
        document.querySelector("#signUpForm .first").value = "";
        document.querySelector("#signUpForm .last").value = "";
        document.querySelector("#signUpForm .email2").value = "";
        document.querySelector("#signUpForm .password2").value = "";
    } else {
        var missingFieldsString = missingFields.join(", ");
        alert("PLEASE FILL IN THE FOLLOWING FIELD(S): " + missingFieldsString);
    }
});
