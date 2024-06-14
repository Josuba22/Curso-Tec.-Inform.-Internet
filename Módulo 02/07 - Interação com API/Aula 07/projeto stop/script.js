
// version 1.0

/*
// JavaScript para capturar os dados do formulário e gerar o arquivo .json
const leadForm = document.getElementById('leadForm');
const successMessage = document.getElementById('successMessage');

leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    // Crie um objeto JSON com os dados capturados
    const leadData = {
        nome,
        email,
        telefone
    };

    // Converta o objeto em uma string JSON
    const jsonLeadData = JSON.stringify(leadData);

    // Simule o envio para um servidor (neste caso, apenas exiba uma mensagem de sucesso)
    successMessage.textContent = 'Cadastro realizado com sucesso!';

    // Salve o arquivo .json (você pode enviar para um servidor ou armazenar localmente)
    const blob = new Blob([jsonLeadData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'clientes.json';
    a.click();
});
*/

//new version 1.1


// JavaScript para capturar os dados do formulário e gerar o arquivo .json
const leadForm = document.getElementById('leadForm');
const successMessage = document.getElementById('successMessage');

// Array para armazenar os dados dos clientes
let clientDataArray = [];

// Função para salvar os dados no arquivo .json
function saveDataToJson() {
    const jsonLeadData = JSON.stringify(clientDataArray);

    // Crie um Blob com os dados
    const blob = new Blob([jsonLeadData], { type: 'application/json' });

    // Crie uma URL temporária para o Blob
    const url = URL.createObjectURL(blob);

    // Crie um link para download e clique automaticamente nele
    const a = document.createElement('a');
    a.href = url;
    a.download = 'clientes.json';
    a.click();
}

leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const produto = document.getElementById('produto servico').value;
    const redeSocial = document.getElementById('rede social').value;

    // Crie um objeto com os dados capturados
    const leadData = {
        nome,
        email,
        telefone,
        produto,
        redeSocial
    };

    // Adicione os dados ao array
    clientDataArray.push(leadData);

    // Salve os dados no arquivo .json
    saveDataToJson();

    // Exiba uma mensagem de sucesso
    successMessage.textContent = 'Cadastro realizado com sucesso!';
});


// new version 1.2

/*
// JavaScript para capturar os dados do formulário e atualizar o arquivo .json
const leadForm = document.getElementById('leadForm');
const successMessage = document.getElementById('successMessage');

// Array para armazenar os dados dos clientes
let clientDataArray = [];

// Função para salvar os dados no arquivo .json
function saveDataToJson() {
    const jsonLeadData = JSON.stringify(clientDataArray);

    // Crie um Blob com os dados
    const blob = new Blob([jsonLeadData], { type: 'application/json' });

    // Crie uma URL temporária para o Blob
    const url = URL.createObjectURL(blob);

    // Crie um link para download e clique automaticamente nele
    const a = document.createElement('a');
    a.href = url;
    a.download = 'clientes.json';
    a.click();
}

// Carregue os dados existentes do arquivo .json (se houver)
fetch('clientes.json')
    .then(response => response.json())
    .then(data => {
        clientDataArray = data;
    })
    .catch(error => {
        console.error('Erro ao carregar dados do arquivo .json:', error);
    });

leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const produto = document.getElementById('produto servico').value;
    const redeSocial = document.getElementById('rede social').value;

    // Crie um objeto com os dados capturados
    const leadData = {
        nome,
        email,
        telefone,
        produto,
        redeSocial
    };

    // Adicione os dados ao array
    clientDataArray.push(leadData);

    // Salve os dados no arquivo .json
    saveDataToJson();

    // Exiba uma mensagem de sucesso
    successMessage.textContent = 'Cadastro realizado com sucesso!';
});
*/