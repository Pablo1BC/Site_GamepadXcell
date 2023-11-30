function copiarTexto(path) {
    var texto = document.createElement("textarea");
    texto.value = path;
    document.body.appendChild(texto);
    texto.select();
    document.execCommand("copy");
    document.body.removeChild(texto);

    mostrarMensagem();
}










// Supondo que você tenha um elemento com o ID "meuElemento" no seu HTML
var meuElemento = document.getElementById("mensagem");

// Inserir o HTML usando innerHTML
meuElemento.innerHTML = `

<style>
       .overlay {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      justify-content: center;
      align-items: center;
    }
    
    .confirmation-box {
      background: #fff;
      padding: 20px;
      border-radius: 5px;
      text-align: center;
    }

    .confirmation-buttons {
      margin-top: 10px;
      caret-color: transparent
    }
</style>
<div class="overlay" id="confirmationOverlay">
    <div class="confirmation-box">
      <p>Texto copiado para a área de transferência!</p>
      <div class="confirmation-buttons">
        <button onclick="fecharMensagem()">OK</button>
      </div>
    </div>
  </div>

`;

///////////////////////
  function mostrarMensagem() {
    var overlay = document.getElementById("confirmationOverlay");
    overlay.style.display = "flex";
  }

  function fecharMensagem() {
    var overlay = document.getElementById("confirmationOverlay");
    overlay.style.display = "none";
  }/////////////////////////////