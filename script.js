 function sorteio(){
    // Ler valores e garantir que sejam números inteiros
    const min = parseInt(document.getElementById("minimo").value, 10) || 0;
    const max = parseInt(document.getElementById("maximo").value, 10) || 0;

    // Garante que o sorteio esteja no intervalo [min, max]
    const low = Math.min(min, max);
    const high = Math.max(min, max);
    const sort = Math.floor(Math.random() * (high - low + 1)) + low;

    const resultadoEl = document.getElementById("resultado");
    // Mostrar indicação imediata e aguardar 3 segundos antes de revelar
    resultadoEl.innerHTML = 'Sorteando...';

    setTimeout(() => {
        resultadoEl.innerHTML = sort;
    }, 3000);
 }

 



 

