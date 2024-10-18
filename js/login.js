//Login do usuario
/*document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        // Recupere os dados do usuário armazenados no localStorage
        const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];

        // Verifique se o usuário e a senha correspondem aos dados armazenados no localStorage
        const user = cadastros.find((user) => user.registerUsername === username && user.registerPassword === password);

        if (user) {
            alert('Autenticação bem-sucedida.');
            // Redirecione para a página de login ou qualquer outra página desejada
            window.location.href = 'pagina-inicial.html';
        } else {
            alert('Credenciais inválidas. Por favor, tente novamente.');
        }
    });
});*/

/*document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        // Recupere os dados do usuário armazenados no localStorage
        const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];

        // Verifique se o usuário e a senha correspondem aos dados armazenados no localStorage
        const user = cadastros.find((user) => user.registerUsername === username && user.registerPassword === password);

        if (user) {
            showNotification('Autenticação bem-sucedida.');
            setTimeout(function () {
                window.location.href = 'pagina-inicial.html';
            }, 2000); // Redirecione após 2 segundos (2000 milissegundos)
        } else {
            showNotification('Credenciais inválidas. Por favor, tente novamente.');
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
});*/
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const entrarContainer = document.querySelector('.entrar');
    const spinnerContainer = document.getElementById('spinner-container');
  
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      
      document.body.classList.add('loading');
  
      
      const loadingSpinner = createLoadingSpinner();
      spinnerContainer.appendChild(loadingSpinner);
  
      const username = document.getElementById('login-username').value;
      const password = document.getElementById('login-password').value;
  
      // Recupere os dados do usuário armazenados no localStorage
      const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
  
      // Simule um atraso para demonstrar o loading (pode ser removido na implementação real)
      setTimeout(function () {
        // Remova a classe 'loading' do corpo do documento
        document.body.classList.remove('loading');
  
        // Remova o elemento de loading após a autenticação
        spinnerContainer.removeChild(loadingSpinner);
  
        const user = cadastros.find((user) => user.registerUsername === username && user.registerPassword === password);
  
        if (user) {
          showNotification('Autenticação bem-sucedida.');
          setTimeout(function () {
            window.location.href = 'pagina-inicial.html';
          }, 1200); // Redirecione após 1 segundos (1200 milissegundos)
        } else {
          showNotification('Credenciais inválidas. Por favor, tente novamente.');
        }
      }, 1200); 
    });
  
    function createLoadingSpinner() {
      // Crie um elemento de loading com a classe 'spinner'
      const loadingSpinner = document.createElement('div');
      loadingSpinner.className = 'spinner';
  
      return loadingSpinner;
    }
  
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
});

// para apenas digitar letrar no 
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
          (charCode > 191 && charCode <= 255) // letras com acentos
      ){
          return true;
      } else {
          return false;
      }
  } catch (err) {
      alert(err.Description);
  }
}