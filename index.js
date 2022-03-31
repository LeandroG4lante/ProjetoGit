// function meuEscopo() {
//     const form = document.querySelector('.form');
//     const resultado = document.querySelector('.resultado');


//     function recebeEventoForm(evento) {
//         evento.preventDefault();
//     const num1 = document.querySelector('.num1');
//     const num2 = document.querySelector('.num2');
//     const simbolo = document.querySelector('.simbolo');

//         if (simbolo === '+') {
//             resultado.innerHTML = num1 + num2;
//         } else if (simbolo === '-') {
//             resultado.innerHTML = num1 - num2;
//         } else if (simbolo === '*') {
//             resultado.innerHTML = num1 * num2;
//         } else if (simbolo === '/') {
//             resultado.innerHTML = num1 / num2;
//         }

//     }

//     form.addEventListener('submit', recebeEventoForm);

//     resultado.innerHTML += resultado;
// }

// meuEscopo();


// criar funções que quando clicadas

const form = document.querySelector('#form');
// const num1 = e.target.querySelector('.num1');
// const num2 = e.target.querySelector('.num2');   
const somar = document.querySelector('.somar');
const subtrair = document.querySelector('.subtrair');
const multiplicar = document.querySelector('.multiplicar');
const dividir = document.querySelector('.dividir');
const resultado = document.querySelector ('.resultado');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputSimbolo = e.target.querySelector('.simbolo');
    const inputNum1 = e.target.querySelector('.num1');
    const inputNum2 = e.target.querySelector('.num2');
    const num1 = Number(inputNum1.value);
    const num2 = Number(inputNum2.value);
    const simbolo = String(inputSimbolo.value);
    let result;
    // console.log(simbolo);

    if (simbolo === '+'){
        result = num1 + num2;
        resultado.innerHTML += `O resultado da operação é: ${result}`; 
    } else if (simbolo === '-'){
        result = num1 - num2;
        resultado.innerHTML += `O resultado da operação é: ${result}`;
    } else if (simbolo === '*'){
        result = num1 * num2;
        resultado.innerHTML += `O resultado da operação é: ${result}`;
    } else if (simbolo === '/'){
        result = num1 / num2;
        resultado.innerHTML += `O resultado da operação é: ${result}`;
    }

    // resultado.innerHTML = result;
    //Começa aqui

    //Termina aqui
})

// somar.addEventListener('click', function(e){
//     resultado = num1 - num2;
// });

// subtrair.addEventListener('click', function(e){
//     resultado = num1 - num2;
// });

// multiplicar.addEventListener('click', function(e){
//     resultado = num1 * num2;
// });

// dividir.addEventListener('click', function(e){
//     resultado = num1 / num2;
// });



// resultado.innerHtml =`${resultado}`


/// recomeca aqui

// const form = document.querySelector('#form');

// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     console.log('evento prevenido');
// });






// const num1 = e.target.querySelector('.num1');
// const num2 = e.target.querySelector('.num2');
// const somar = document.querySelector('.somar');
// const subtrair = document.querySelector('.subtrair');
// const multiplicar = document.querySelector('.multiplicar');
// const dividir = document.querySelector('.dividir');
// //  nao vale  const resultado = document.querySelector ('.resultado');
// let resultadoFinal;

// somar.addEventListener('click', function(e){
//     resultadoFinal = (num1 + num2);
//     return resultadoFinal
// });

// subtrair.addEventListener('click', function(e){
//     resultadoFinal = num1 - num2;
//     resultado.innerHTML = resultadoFinal;
// });

// multiplicar.addEventListener('click', function(e){
//     resultadoFinal = num1 * num2;
//     resultado.innerHTML = resultadoFinal;
// });

// dividir.addEventListener('click', function(e){
//     resultadoFinal = num1 / num2;
//     resultado.innerHTML = resultadoFinal;
// });

// function setResultado(resultadoFinal){
//     const resultado = document.querySelector('.resultado');
//     resultado.innerHTML = '';
//     const p = document.createElement('p');
//     p.classList.add('paragrafo-resultado');
//     p.innerHTML = 'qulquer coisa';
//     // resultado.appendChild(p);

    
// }

// setResultado();
// //  nao vale resultado.innerHtml =`${resultadoFinal}`