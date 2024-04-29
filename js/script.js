// Elemento do botão de cálculo pelo ID 'calculate'
const btnEl = document.getElementById("calculate");

// Elementos de entrada para a conta e a gorjeta pelos IDs 'bill' e 'tip'
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");

// Elemento de exibição do total pelo ID 'total'
const totalSpan = document.getElementById("total");

// Define uma função para calcular o total da conta, incluindo a gorjeta
function calculateTotal() {
  // Valor da conta e a porcentagem da gorjeta dos elementos de entrada
  const billValue = billInput.value;
  const tipValue = tipInput.value;

  // Calcula o valor total da conta, incluindo a gorjeta
  const totalValue = billValue * (1 + tipValue / 100);

  // Exibe o valor total formatado com duas casas decimais
  totalSpan.innerText = totalValue.toFixed(2);
}

// Evento de clique ao botão de cálculo, que chama a função calculateTotal quando clicado
btnEl.addEventListener("click", calculateTotal);
