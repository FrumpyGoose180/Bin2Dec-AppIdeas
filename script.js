let binario = document.getElementById('binary');
let decimale = document.querySelector('#decimal');
let converti = document.querySelector('#converti');
let potenza = 0;


converti.addEventListener('click', function() {
    if (binario.value.match('^[2-9]')) {
        document.querySelector('.alert').style.display = 'block';
        document.querySelector('.alert').innerHTML = 'Type only 0 and 1';
        setTimeout(() => document.querySelector('.alert').style.display = 'none', 2000 );
    } else {
        let decimal = 0;   
        for (let i = 0; i < binario.value.length; i++) {
        decimal = decimal + (binario.value[i] * (Math.pow(2,binario.value.length-i-1)));
        decimale.value = decimal;
    }
    }
})
