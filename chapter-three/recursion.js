function isEven(num){
    if(num==0) return true;
    else if(num==1) return false;
    else return isEven(num-2);
}

var num = 5;

if(num<0) console.log('Erro: numero invalido (negativo)');
else if(isEven(num)) console.log(num + ' é par');
else console.log(num + ' é impar');