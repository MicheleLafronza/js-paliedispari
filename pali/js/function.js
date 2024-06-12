// creo funzione per checkare la parola
function checkPalindrome(str) {

    // questo linea di codice mi ritorna un valore booleano TRUE se la stringa dopo che è stata splittata, messa in reverse e ricostruita, rimane la stessa
    return str === str.split('').reverse().join('');
  }