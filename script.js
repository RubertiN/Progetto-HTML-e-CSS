// Inizializzazione del componente emailjs.
emailjs.init("h_4zSj7C_lWH4sdyV");

// Selezioni all'interno del DOM il form di contatto con `document.querySelector` e salvo il suo riferimento nella variabile
let formEmail = document.querySelector("form.contact-form");
console.log(formEmail); // Dacci un occhio nella console che può essere interessante

// Aggiungo un evento di tipo submit. https://www.w3schools.com/js/js_events.asp
// A questo evento assegno un Handler, in questo caso la funzione submitFormEmail
// Ogni volta che il form verrà fatto partire, questo handler verrà eseguito
formEmail.addEventListener("submit", submitFormEmail);

/**
 * Invia l'email recuperando i paramentri del form
 * @param event Oggetto Event passato di default da addEventListener.
 *              In questo oggetto ci sono tutte le informazioni dell'evento che ha scatenato l'esecuzione del form
 *              Al 99% dei casi si usa solo per fare `event.preventDefault()` praticamente
 */
function submitFormEmail(event) {
    event.preventDefault();
    // Previene che il form esegua la sua routine classica (inviare le informazioni in get/post all'url specificato da action e fare il reload della pagina
    // Praticamente nessun form fa più questa routine e TUTTI gestiscono i form in modo custom, perchè è più comodo così alla fine

    console.log("Dentro l'evento di submit del form.");

    // Ti ho messo `let` e non `var` per un semplice motivo di Scoping
    // Con `var` se per caso un altro pezzo di codice non tuo usa una variabile di nome tempParams
    // possono esserci dei conflitti e trovare l'errore è praticamente impossibile
    let tempParams = {
        from_name: document.getElementById("full-name").value,
        email_id: document.getElementById("e-mail").value,
        message: document.getElementById("messaggio").value,
    };

    emailjs.send("service_texfjf6", "template_s97obig", tempParams).then(function (res) {
        console.log("success", res.status);
    });
}