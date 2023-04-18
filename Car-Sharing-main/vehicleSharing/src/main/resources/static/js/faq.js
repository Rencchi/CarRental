var text = document.querySelector('#faq');
var btn = document.querySelector('#faqBtn');
var titolo = document.querySelector('#titoloModal');
var contenuto = document.querySelector('#contenutoModal');

// if(sessionStorage.getItem("username") != null || localStorage.getItem("username") != null){
//     text.removeAttribute('placeholder');
//     text.removeAttribute('readonly');
//     btn.removeAttribute('disabled');
// }

function pulisci(){
    text.value = "";
    mail.value = "";
}

function rispondi(){
    let mail = document.querySelector('#mail');
    let faq = document.querySelector('#faq');

    if(mail.value == ""){
        titolo.textContent = "Errore"
        contenuto.textContent = "La mail non può essere vuota";
    } else if (faq.value == ""){
        titolo.textContent = "Errore"
        contenuto.textContent = "Scrivere una domanda";
    } else {
        titolo.textContent = "Fatto"
        contenuto.textContent = "Domanda inviata con successo! Ti risponderemo alla mail: " + mail.value;
        pulisci();
    }
}

btn.addEventListener('click', rispondi);