// Seleciona o formulário de registro
const registroForm = document.getElementById('registro-form');

// Seleciona a mensagem de feedback
const mensagem = document.getElementById('mensagem');

// Array para armazenar os registros de usuário (nome de usuário e senha)
const registros = [];

// Adiciona um ouvinte de eventos para o envio do formulário
registroForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Captura os valores dos campos de entrada
    const usuario = document.getElementById('usuario').value.trim();
    const senha = document.getElementById('senha').value.trim();

    // Verifica se o usuário já existe
    const usuarioExistente = registros.find((registro) => registro.usuario === usuario);

    if (usuarioExistente) {
        mensagem.textContent = 'Este nome de usuário já está em uso.';
        mensagem.style.color = 'red';
    } else {
        // Adiciona o novo registro ao array
        registros.push({ usuario, senha });

        // Limpa os campos de entrada
        document.getElementById('usuario').value = '';
        document.getElementById('senha').value = '';

        mensagem.textContent = 'Registro bem-sucedido. Você pode fazer login agora.';
        mensagem.style.color = 'green';
    }
});