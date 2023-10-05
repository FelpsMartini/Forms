const produtoForm = document.getElementById('produtoForm');
const listaProdutos = document.getElementById('listaProdutos').getElementsByTagName('tbody')[0];

produtoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.getElementById('nomeProduto').value;
  const descricao = document.getElementById('descricaoProduto').value;
  const valor = parseFloat(document.getElementById('valorProduto').value).toFixed(2);
  const disponivel = document.getElementById('disponivelProduto').value;

  const newRow = listaProdutos.insertRow(-1);
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  cell1.textContent = nome;
  cell2.textContent = `R$ ${valor}`;

  // Ordenação da lista por valor
  const rows = Array.from(listaProdutos.rows);
  rows.sort((a, b) => parseFloat(a.cells[1].textContent.slice(3)) - parseFloat(b.cells[1].textContent.slice(3)));
  rows.forEach(row => listaProdutos.appendChild(row));
});

  
