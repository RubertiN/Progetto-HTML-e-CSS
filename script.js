emailjs.sendForm(params) 
    var tempParams ={
        from_name : document.getElementById("full-name").value,
        email_id : document.getElementById("e-mail").value,
        message : document.getElementById("messaggio").value,
    };

    emailjs.send('service_texfjf6', 'template_s97obig', tempParams)
    .then(function(res){
        console.log("success", res.status);
    })
