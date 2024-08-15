// Função para exibir um alerta quando o botão na Home for clicado
document.getElementById("botao-home").addEventListener("click", function() {
    alert("Bem-vindo ao nosso site!");
});

// Função para enviar mensagem de confirmação ao enviar o formulário de contato
document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio real do formulário
    alert("Obrigado por entrar em contato, " + document.getElementById("nome").value + "!");
    this.reset(); // Limpa o formulário após o envio
});
