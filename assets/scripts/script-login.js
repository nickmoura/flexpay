document.addEventListener('DOMContentLoaded', function() {
	const loginForm = document.getElementById('flexpay-login-form');
  
	loginForm.addEventListener('submit', function(event) {
	  event.preventDefault();
	  const username = document.getElementById('username').value;
	  const password = document.getElementById('password').value;
  
	  // Simulação de autenticação (substitua por lógica real)
	  if (username === 'seuUsuario' && password === 'suaSenha') {
		alert('Login bem-sucedido!');
		// Redirecionar ou executar ações necessárias após o login
	  } else {
		alert('Credenciais inválidas. Tente novamente.');
	  }
	});
  });