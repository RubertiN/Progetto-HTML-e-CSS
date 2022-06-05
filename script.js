function SendMail() {
    var params = {
        from_name : document.getElementById("full-name").value,
        email_id : document.geteElementById("e-mail").value,
        message : document.getElementById("messaggio").value
    }
    emailjs.send("service_texfjf6", "template_s97obig", params).then(function (res) {
        alert("Success! " + res.status);
    })
}