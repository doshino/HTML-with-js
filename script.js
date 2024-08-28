function funcao()
{
    alert("Funcionou");
}

function random(){
    
    const quadrado = document.getElementById("quadrado");
    const cores = ["red", "green", "yellow", "purple", "orange"];
    const corAtual = quadrado.style.backgroundColor;
    let novaCor = corAtual;

    while (novaCor === corAtual) {
            novaCor = cores[Math.floor(Math.random() * cores.length)];
    }

    quadrado.style.backgroundColor = novaCor;
}