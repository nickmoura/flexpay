  const inputCnpj = document.getElementById('cnpj')
  if (inputCnpj) {
	  inputCnpj.addEventListener('keypress', () => {
		  let inputlength = inputCnpj.value.length
		  const keyCode = event.which
  
		  if (keyCode < 48 || keyCode > 57) {
			  event.preventDefault()
		  }
  
		  if (inputlength === 2 || inputlength === 6) {
			  inputCnpj.value += '.'
		  } else if (inputlength === 10) {
			  inputCnpj.value += '/'
		  } else if(inputlength === 15) {
			  inputCnpj.value += '-'
		  }
	  });
  }
  
  
  const inputCel = document.getElementById('cel')
  if (inputCel) {
  
	  inputCel.addEventListener('input', () => {
		  const inputValue = inputCel.value.replace(/\D/g, ''); // Remove caracteres não-numéricos
		  const formattedValue = formatPhoneNumber(inputValue);
		  inputCel.value = formattedValue;
	  });
  
	  function formatPhoneNumber(value) {
		  const match = value.match(/^(\d{2})(\d{5})(\d{0,4})$/);
		  if (match) {
			  return `(${match[1]}) ${match[2]}${match[3] ? `-${match[3]}` : ''}`;
		  }
		  return value;
	  }
  }