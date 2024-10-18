/*document.getElementById('submitButton').addEventListener('click', function () {
    // Obtenha os valores dos campos de entrada
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    var cpf = document.getElementById('cpf').value;
    var dateOfBirth = document.getElementById('date').value;
    var cell = document.getElementById('cell').value;
    var tell = document.getElementById('tell').value;
    var cep = document.getElementById('cep').value;
    var address = document.getElementById('endereco').value;
    var gender = document.querySelector('.custom-select').value;
    var username = document.getElementById('register-username').value;
    var password = document.getElementById('register-password').value;
    var confirmPassword = document.getElementById('confirmpassword').value;

    // Validação simples para verificar se os campos obrigatórios estão preenchidos
    if (
        firstName.trim() === '' ||
        lastName.trim() === '' ||
        cpf.trim() === '' ||
        dateOfBirth.trim() === '' ||
        cell.trim() === '' ||
        tell.trim() === '' ||
        cep.trim() === '' ||
        address.trim() === '' ||
        gender === 'Selecione' ||
        username.trim() === '' ||
        password.trim() === '' ||
        confirmPassword.trim() === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Validações adicionais, por exemplo, para verificar se as senhas coincidem

    if (password !== confirmPassword) {
        alert('As senhas não coincidem. Por favor, tente novamente.');
        return;
    }

    if (username.length < 6) {
        alert('O login deve ter no mínimo 6 caracteres.');
        return;
    }
    else {
        // Se todas as validações passarem, você pode prosseguir com o envio do formulário.
        alert('Cadastro realizado com sucesso!');
        window.location.href = 'index.html'
    }
    
    // Função para salvar um novo cadastro no localStorage
    function salvarCadastroNoLocalStorage() {
        const formularioData = {
        firstname: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value,
        cpf: document.getElementById('cpf').value,
        date: document.getElementById('date').value,
        cell: document.getElementById('cell').value,
        tell: document.getElementById('tell').value,
        cep: document.getElementById('cep').value,
        endereco: document.getElementById('endereco').value,
        genero: document.querySelector('.custom-select').value,
        registerUsername: document.getElementById('register-username').value,
        registerPassword: document.getElementById('register-password').value,
        confirmpassword: document.getElementById('confirmpassword').value,
        };
    
        // Verifique se há dados anteriores no localStorage
        let cadastrosAnteriores = JSON.parse(localStorage.getItem('cadastros')) || [];
    
        // Adicione o novo cadastro ao array de cadastros
        cadastrosAnteriores.push(formularioData);
    
        // Converte o array de cadastros para JSON
        const cadastrosJSON = JSON.stringify(cadastrosAnteriores);
    
        // Armazena o array de cadastros no localStorage
        localStorage.setItem('cadastros', cadastrosJSON);
    
        
    }
    
    // Adicione um evento de envio ao formulário
    const form = document.getElementById('register-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Impede o envio padrão do formulário
        salvarCadastroNoLocalStorage();
        form.reset();
    });
    
});*/

document.getElementById('submitButton').addEventListener('click', function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Obtenha os valores dos campos de entrada
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    var cpf = document.getElementById('cpf').value;
    var dateOfBirth = document.getElementById('date').value;
    var cell = document.getElementById('cell').value;
    var tell = document.getElementById('tell').value;
    var cep = document.getElementById('cep').value;
    var address = document.getElementById('endereco').value;
    var numero = document.getElementById('numero').value;
    var bairro = document.getElementById('bairro').value;
    var cidade = document.getElementById('cidade').value;
    var uf = document.getElementById('uf').value;
    var gender = document.querySelector('.custom-select').value;
    var username = document.getElementById('register-username').value;
    var password = document.getElementById('register-password').value;
    var confirmPassword = document.getElementById('confirmpassword').value;

    // Validação simples para verificar se os campos obrigatórios estão preenchidos
    if (
        firstName.trim() === '' ||
        lastName.trim() === '' ||
        cpf.trim() === '' ||
        dateOfBirth.trim() === '' ||
        cell.trim() === '' ||
        tell.trim() === '' ||
        cep.trim() === '' ||
        address.trim() === '' ||
        numero.trim() ==='' ||
        bairro.trim() ==='' ||
        cidade.trim() ==='' ||
        uf.trim() ==='' ||
        gender === 'Selecione' ||
        username.trim() === '' ||
        password.trim() === '' ||
        confirmPassword.trim() === ''
    ) {
        showNotification('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Validações adicionais, por exemplo, para verificar se as senhas coincidem
    if (password !== confirmPassword) {
        showNotification('As senhas não coincidem. Por favor, tente novamente.');
        return;
    }
    if (firstName.length < 15) {
        showNotification('O nome deve ter no mínimo 15 caracteres.');
        return;
    }

    if (password.length < 8) {
        showNotification('A senha  deve ter no mínimo 8 caracteres.');
        return;
    }

    if (username.length < 6) {
        showNotification('O login deve ter no mínimo 6 caracteres.');
        return;
    } else {
        // Se todas as validações passarem, você pode prosseguir com o envio do formulário.
        showNotification('Cadastro realizado com sucesso!');
        salvarCadastroNoLocalStorage();
        setTimeout(function () {
            window.location.href = 'index.html';
        }, 2000); // Redireciona após 2 segundos (2000 milissegundos)
    }

    // Função para salvar um novo cadastro no localStorage
    function salvarCadastroNoLocalStorage() {
        const formularioData = {
            firstname: document.getElementById('firstname').value,
            lastname: document.getElementById('lastname').value,
            cpf: document.getElementById('cpf').value,
            date: document.getElementById('date').value,
            cell: document.getElementById('cell').value,
            tell: document.getElementById('tell').value,
            cep: document.getElementById('cep').value,
            endereco: document.getElementById('endereco').value,
            numero: document.getElementById('numero').value,
            bairro: document.getElementById('bairro').value,
            cidade: document.getElementById('cidade').value,
            uf: document.getElementById('uf').value,
            genero: document.querySelector('.custom-select').value,
            registerUsername: document.getElementById('register-username').value,
            registerPassword: document.getElementById('register-password').value,
            confirmpassword: document.getElementById('confirmpassword').value,
        };

        // Verifique se há dados anteriores no localStorage
        let cadastrosAnteriores = JSON.parse(localStorage.getItem('cadastros')) || [];

        // Adicione o novo cadastro ao array de cadastros
        cadastrosAnteriores.push(formularioData);

        // Converte o array de cadastros para JSON
        const cadastrosJSON = JSON.stringify(cadastrosAnteriores);

        // Armazena o array de cadastros no localStorage
        localStorage.setItem('cadastros', cadastrosJSON);
    }
});

function showNotification(message) {
    // Crie um elemento de notificação
    var notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

    // Adicione a notificação ao corpo do documento
    document.body.appendChild(notification);

    // Remova a notificação após alguns segundos (opcional)
    setTimeout(function () {
        document.body.removeChild(notification);
    }, 3000); // Remove a notificação após 3 segundos (3000 milissegundos)
}

// para apenas digitar letras e espaço
function ApenasLetras(e, t) {
    try {
        if (window.Event) {
            var charCode = window.event.keyCode;
        } else if (e) {
            var charCode = e.which;
        } else {
            return true;
        }
        if (
            (charCode > 64 && charCode < 91) || 
            (charCode > 96 && charCode < 123) ||
            (charCode > 191 && charCode <= 255) || // letras com acentos
            (charCode === 32 )// permitir digitar a barra de espaço
        ){
            return true;
        } else {
            return false;
        }
    } catch (err) {
        alert(err.Description);
    }
}

// apenas letras sem acentos e sem a tecla barra de espaço
function ApenasLetrassembarra(e, t) {
    try {
        if (window.Event) {
            var charCode = window.event.keyCode;
        } else if (e) {
            var charCode = e.which;
        } else {
            return true;
        }
        if (
            (charCode > 64 && charCode < 91) || 
            (charCode > 96 && charCode < 123) 
        ){
            return true;
        } else {
            return false;
        }
    } catch (err) {
        alert(err.Description);
    }
}

//busca do endereço pelo cep
document.getElementById('cep').addEventListener('blur', function() {
    var cep = document.getElementById('cep').value.replace('-', '');
    var url = `https://viacep.com.br/ws/${cep}/json/`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (!data.erro) {
          document.getElementById('endereco').value = data.logradouro;
          document.getElementById('bairro').value = data.bairro;
          document.getElementById('cidade').value = data.localidade;
          document.getElementById('uf').value = data.uf;
          // Adiciona o foco no campo de número após preencher os dados do CEP
          document.getElementById('numero').focus();
        } else {
          showNotification('CEP não encontrado. Verifique o CEP digitado.');
        }
      })
      .catch(error => {
        console.error('Erro ao buscar o CEP:', error);
      });
  });