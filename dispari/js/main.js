// creo variabili 
let userInputNum = document.getElementById("input-user");
let pariDispari = document.getElementById("pari-dispari");
const button = document.getElementById("play");


// creo funzione con click del bottone
button.addEventListener("click",

    function() {

        // prendo il valore dato dall'utente
        let userNum = parseInt(userInputNum.value);
        let stampuser = document.getElementById("numero-utente");
        stampuser.innerHTML="Il tuo numero è " + userNum;
        

        // prendo il valore del pc generato dalla funzione
        let pcNum = rndNum(1, 5)
        let stampPc = document.getElementById("numero-pc");
        stampPc.innerHTML="Il numero del pc è " + pcNum;

        // stampo soltanto per info il totale dei numeri
        let tot = userNum + pcNum;
        let stampTot = document.getElementById("tot");
        stampTot.innerHTML="La somma di entrambi i numeri è " + tot;

        // prendo la scelta dell'utente tra pari o dispari
        let parioDispari = pariDispari.value;

        
        // scrivo la risposta grazie alla funzione
        let esitoPartita = document.getElementById("esito-partita");
        esitoPartita.innerHTML=poD(userNum, pcNum, parioDispari);
    }


)