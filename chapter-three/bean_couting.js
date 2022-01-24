function countChars(palavra, char){
    let aux = 0;
    for(var i=0; i<palavra.length; i++){
        if(palavra[i]==char) aux++;
    }
    return aux;
}

var palavra = 'banana'
var char = 'a'

console.log('A quantidade de letras \'' + char + '\' contida na palavra ' + palavra + ' é ' + countChars(palavra, char))