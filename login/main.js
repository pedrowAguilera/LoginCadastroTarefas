// Seleciona o formulário
const form = document.querySelector('.login-form')

// Seleciona o campo de entrada do usuario
const usuarioINput = form.querySelector("input[type='text']");
// Dessa forma indentifiamos a tag pelo tipo do input dela, usamos o form ao invés do documento para indicar ode o código deve procurar esse input
const senhaInput = form.querySelector("input[type='password']");
// Seleciona o campo de entrada da senha

// Adiciona um ouvinte de eventos ao formuçário para detectar o usuário clicar no botão
form.addEventListener('submit', (event) => {
    //Adicionar  event.preventDefault() evita que a página seja recarregada quando o botão for apertado
    event.preventDefault();

    // Obtém os valores dos campos de entrada do usuário e senha e o trim() remove os espaços em branco tanto no começo quanto no final de cada campo
    const usuario = usuarioINput.value.trim();
    const senha = senhaInput.value.trim();

    // Verifica se os campos de usuário e senha estão preenchidos.
    if(usuario === '' || senha === '') {
        alert("Por favor, preencha os campos")
    } else if (usuario === 'usuario' && senha === 'senha') {
        // Verifica se as informações de login e senha estão corretas
        alert("Bem-vindo!")
        location.replace("/tarefa/index.html", "_self")
    } else {
        //Exibe uma mensagem de erro se as informações estiverem erradas
        alert("Usuáro ou senha incorreto, tente novamente")
    }

})