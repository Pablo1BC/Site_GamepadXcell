





        document.addEventListener("DOMContentLoaded", function() {

            //var dataIP = Android.getDados();

            var dataID = Android.getDadosID();

            idp(dataID);

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

                  // Transforma o ID Json em uma string
                  var sessionIDString = data.ID_Received.toString();

                  //salvar banco de dados
                    Android.savedID(sessionIDString);



                })
                .catch(error => {
                    console.error('Erro na solicitação:', error);
                    // Lidar com erros, se necessário
                });




        });






function idp(dataID) {
  // Supondo que você tenha um elemento com o ID "meuElemento" no seu HTML
  var meuElemento = document.getElementById("meuElemento");
  // Atualiza o conteúdo do elemento com os dados recebidos
  meuElemento.innerHTML = "Dados recebidos: " + dataID;
}
