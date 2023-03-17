//Definindo as variáveis

var senha = document.getElementById("password");

function geraSenha() {
    let conteudoSenha = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let tamanhoSenha = 12;
    let senha = "";

    for (var i = 0; i <= tamanhoSenha; i++) {
        let randomNumber = Math.floor(Math.random() * conteudoSenha.length);
        senha += conteudoSenha.substring(randomNumber, randomNumber + 1);
    }

    document.getElementById("password").value = senha;
    }

//Definindo botão de copiar

function copiaSenha() {
    let copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copiar");
}