let numero = [97, 45, 49, 32, 2, 5, 9, 99, 1, 7];
    
function arrumar () {
    for (let i = 0; i < numero.length; i++) 
    {
        if (numero[i] > numero[i +1]) 
        {
            let valor1 = numero[i]
            let valor2 = numero[i +1] 
            numero[i] = valor2
            numero[i +1] = valor1
        }
    }
}

for (let j = 0; j < numero.length ; j++) {
    arrumar();
}

console.log(numero)