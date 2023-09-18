const form = document.getElementById('form-contatos');
const nomeContato = document.getElementById('nome-contato');
const numeroContato = document.getElementById('numero-contato');
const nomes = [];
const numeros = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    criaLinha();
    atualizaTabela();
});

function criaLinha() {
    if(nomes.includes(nomeContato.value)) {
        alert(`Nome ${nomeContato.value} já cadastrado!`)
    } else if(numeros.includes(numeroContato.value)) {
        alert(`Numero ${numeroContato.value} já cadastrado!`);
    } else {
        nomes.push(nomeContato.value);
        numeros.push(numeroContato.value);
        let linha = '<tr>';
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${numeroContato.value}</td>`;
        linha += `<td><a href="tel:${numeroContato.value}" class="btn-ligar">Ligar</a></td>`;
        linha += '</tr>';
        linhas += linha;      
    }

    nomeContato.value = '';
    numeroContato.value = '';
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}