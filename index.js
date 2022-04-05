const adicao = document.getElementById("adicao");
const subtracao = document.getElementById("subtracao");
const multiplicacao = document.getElementById("multiplicacao");
const divisao = document.getElementById("divisao");

const p = document.querySelector("p")


adicao.addEventListener("click",()=>{
    const valor1 = document.getElementById("valor1").value;
    const valor2 = document.getElementById("valor2").value;

    let num1 = parseFloat(valor1) ;
    let num2 = parseFloat(valor2);


    resultado = parseFloat(num1) + parseFloat(valor2);

    p.innerHTML = `A soma entre ${num1} e ${num2} é: ${resultado}`
})

subtracao.addEventListener("click",()=>{
    const valor1 = document.getElementById("valor1").value;
    const valor2 = document.getElementById("valor2").value;

    let num1 = parseFloat(valor1) ;
    let num2 = parseFloat(valor2);


    resultado = parseFloat(num1) - parseFloat(valor2);

    p.innerHTML = `A subtracao entre ${num1} e ${num2} é: ${resultado}`
})

multiplicacao.addEventListener("click",()=>{
    const valor1 = document.getElementById("valor1").value;
    const valor2 = document.getElementById("valor2").value;

    let num1 = parseFloat(valor1) ;
    let num2 = parseFloat(valor2);


    resultado = parseFloat(num1) * parseFloat(valor2);

    p.innerHTML = `A multiplicacao entre ${num1} e ${num2} é: ${resultado}`
})

divisao.addEventListener("click",()=>{
    const valor1 = document.getElementById("valor1").value;
    const valor2 = document.getElementById("valor2").value;

    let num1 = parseFloat(valor1) ;
    let num2 = parseFloat(valor2);


    resultado = parseFloat(num1) / parseFloat(valor2);
    let res = resultado.toFixed(0)
    p.innerHTML = `A divisao entre ${num1} e ${num2} é: ${res}`
})

