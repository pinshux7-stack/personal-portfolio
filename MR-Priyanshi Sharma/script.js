
/* =================================
   CONTACT FORM FUNCTIONALITY
================================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get visitor details
    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();


    // Check whether fields are empty
    if (name === "" || email === "" || message === "") {

        alert("Please fill in all the fields.");

        return;
    }


    // Display confirmation message
    alert(
        "Thank you, " + name +
        "! Your message has been received."
    );


    // Reset the form
    contactForm.reset();

});


/* =================================
   WEBSITE CONSOLE MESSAGE
================================= */

console.log(
    "Welcome to Priyanshi Sharma's Portfolio Website!"
);
