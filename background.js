
        document.addEventListener("DOMContentLoaded", function() {

            //var dataIP = Android.getDados();

           // var dataID = Android.getDadosID();
           var dataID = "2930c58c-2970-41cd-ba25-5c9f98ee4bb8"
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


  
            // Acessa os campos diretamente do objeto JSON
                var backgroundRecebido = data.background_Received.background;
                var idRecebido = data.background_Received.id;
                var positionRecebido = data.background_Received.position;

                console.log('ID Recebido:', idRecebido);
                console.log('Background Recebido:', backgroundRecebido);
                
                console.log('position Recebido:', positionRecebido);

                // Agora você pode usar backgroundRecebido e idRecebido conforme necessário

                // Chame a função trocarImagemDeFundo com os valores recebidos
                trocarImagemDeFundo(backgroundRecebido);
                trocarPosition(positionRecebido);

                })
                .catch(error => {
                    console.error('Erro na solicitação:', error);
                    // Lidar com erros, se necessário
                });


        });


function trocarImagemDeFundo(data) {

            console.log(data)
  var body = document.body;
  document.body.style.backgroundImage = "url(http://192.168.1.28:6700" + data + ")";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "50% 50%";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.overflow = "hidden";
  document.body.style.position = "fixed";
  document.body.style.top = "50%";
  document.body.style.left = "50%";
  document.body.style.width = "100%";
  document.body.style.height = "100%";
  document.body.style.transform = "translate(-50%, -50%)";
  
}


function trocarPosition(data) {


        var linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        linkElement.type = "text/css";
        linkElement.href = "http://192.168.1.28:6700/" + data;  // Certifique-se de ajustar o caminho conforme necessário
    
        // Adicione o elemento link ao cabeçalho (head) do documento
        document.head.appendChild(linkElement);
}
    

 