// creo la variabile input, button e risposta
let inputParola = document.getElementById("parola");
const button = document.getElementById("btn");
let risposta = document.getElementById("risultato");

// creo evento per inviare la parola
button.addEventListener ("click",

    function () {
        // creo variabile per riceve l'input
        let parola = inputParola.value;
        
        // if,else con la funzione per stampare il risultato
        if (checkPalindrome(parola) === true) {
            risposta.innerHTML=("La parola è palindroma");
        } else {
            risposta.innerHTML=("La parola non è palindroma");
        }
        
    }


)
