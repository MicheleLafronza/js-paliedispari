// creo funzione per checkare la parola
function checkPalindrome(str) {

    // questa linea di codice mi ritorna un valore booleano TRUE assiociato alla variabile check, se la stringa dopo che è stata splittata, messa in reverse e ricostruita, rimane la stessa
    let check = str === str.split('').reverse().join('');

    // qui la funziona mi ritorna "true" se la parola è palindroma, "false" se non lo è
    return check;
  }