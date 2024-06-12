// funzione che genera un numero random con un minimo e un massimo inclusi
function rndNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }



// funzione che somma i risultati dei due numeri e controlla chi ha vinto
function poD(user, pc, scelta) {

    // sommo i due numeri
    let result = user + pc;

    // esito delle varie condizioni
    if (result % 2 === 0 && scelta === "pari") {
        let rispostaFinale = "Hai vinto!"
        return rispostaFinale;
    }   else if (result % 2 === 1 && scelta === "dispari") {
        let rispostaFinale = "Hai vinto!"
        return rispostaFinale;
    }   else {
        let rispostaFinale = "Hai perso!"
        return rispostaFinale;
    }


}