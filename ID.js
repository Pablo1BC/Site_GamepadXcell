document.addEventListener("DOMContentLoaded", function() {

    //var dataIP = Android.getDados();
    //var dataID = Android.getDadosID();
    var dataID ="2930c58c-2970-41cd-ba25-5c9f98ee4bb89k"
    var data = "ID="+dataID;

    // URL do servidor
    var url = "http://192.168.1.28:6700/authentication";

    // Configuração da solicitação
    var requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data,
    };





    // Fazer a solicitação
    fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log('Resposta do servidor:', data);
            insertDataIntoDiv(data)
            // Faça algo com a resposta do servidor, se necessário
        })
        .catch(error => {
            console.error('Erro na solicitação:', error);
            // Lidar com erros, se necessário
        });




});



function insertDataIntoDiv(data) {
// Selecione a div pelo ID (substitua 'nomeDaSuaDiv' pelo ID real da sua div)
var minhaDiv = document.getElementById('Div_id');
// Atualize o conteúdo da div com os dados recebidos
minhaDiv.innerHTML = "ID: " + data.ID_Received;
}