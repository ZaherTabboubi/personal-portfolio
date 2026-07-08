emailjs.init({
    publicKey: "vqil4Pc7gqGk7HPOl",
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    emailjs.send(
        "service_08u292n",
        "template_t2s1vyg",
        {
            name: name,
            email: email,
            message: message
        }
    )
    .then(function () {

        alert("Message sent successfully!");

        form.reset();

    })
    .catch(function (error) {

        alert("Something went wrong.");

        console.log(error);

    });

});