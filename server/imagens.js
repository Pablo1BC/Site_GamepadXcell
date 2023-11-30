function carregarJSON() {
    fetch("dados.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Não foi possível carregar o arquivo JSON");
            }
            return response.json();
        })
        .then(data => {
            exibirImagens(data);
        })
        .catch(error => {
            console.error("Erro ao carregar JSON:", error);
        });
}

function exibirImagens(jsonData) {
    try {
        var links = jsonData.links;

     
          // Cria uma string para armazenar os links
          var linksHTML = "";

          for (var i = 0; i < links.length; i++) {
              var link = links[i];
              // Cria um ID único para cada imagem
              var imgId = "img" + (i + 1);
  
              // Concatena os links na string
              linksHTML += `
                  <div id="${imgId}" class="img_div" onclick="abrirModal('${imgId}', '${link}')" >
                      <img class="imgs" src='${link}' alt='img'>
                  </div>

                  <div class="quadrado">

                    <div class="texto">
                        <p >'${link}'</p>
                    </div>

                    <div onclick="copiarTexto('${link}')" class="btnCopiar">
                        Copiar!
                    </div>
                    
                </div>
              `;
          }
  
          // Injeta a string com os links no elemento com id "content"
          document.getElementById("content").innerHTML = linksHTML;
  

    } catch (error) {
        console.error("Erro ao analisar JSON:", error);
    }
}

// Chama a função para carregar o JSON quando a página carregar
window.onload = carregarJSON;


