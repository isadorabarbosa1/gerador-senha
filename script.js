
const campoSenha = document.getElementById("senha");
const campoTamanho = document.getElementById("tamanho");

const campoMaiusculas = document.getElementById("maiusculas");
const campoMinusculas = document.getElementById("minusculas");
const campoNumeros = document.getElementById("numeros");
const campoEspeciais = document.getElementById("especiais");

const botaoGerar = document.querySelector(".gerar");
const botaoLimpar = document.querySelector(".limpar");

function gerarSenha() {

    let caracteres = "";
    let senha = "";

    const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const especiais = "@#$!%&*";

    if (campoMaiusculas.checked) {
        caracteres += letrasMaiusculas;
    }

    if (campoMinusculas.checked) {
        caracteres += letrasMinusculas;
    }

    if (campoNumeros.checked) {
        caracteres += numeros;
    }

    if (campoEspeciais.checked) {
        caracteres += especiais;
    }

    if (caracteres === "") {
        alert("Selecione pelo menos uma opção!");
        return;
    }

    const tamanho = Number(campoTamanho.value);

    if (tamanho < 4 || tamanho > 30 || !tamanho) {
        alert("Escolha um tamanho entre 4 e 30!");
        return;
    }

    for (let i = 0; i < tamanho; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }

    campoSenha.value = senha;
}

function limparSenha() {
    campoSenha.value = "";
}

botaoGerar.addEventListener("click", gerarSenha);
botaoLimpar.addEventListener("click", limparSenha);




