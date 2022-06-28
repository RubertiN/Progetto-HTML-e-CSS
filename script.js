document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

emailjs.init("h_4zSj7C_lWH4sdyV");

let formEmail = document.querySelector("form.contact-form");
console.log(formEmail);

formEmail.addEventListener("submit", submitFormEmail);

function submitFormEmail(event) {
    event.preventDefault();

    console.log("Dentro l'evento di submit del form.");

    let tempParams = {
        from_name: document.getElementById("full-name").value,
        email_id: document.getElementById("e-mail").value,
        message: document.getElementById("messaggio").value,
    };

    emailjs.send("service_texfjf6", "template_s97obig", tempParams).then(function (res) {
        console.log("success", res.status);
    });
}

