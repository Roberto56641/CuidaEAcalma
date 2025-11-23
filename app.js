// Função de teste para confirmar que o app está funcionando
function iniciarApp() {
  alert("O app Cuida & Acalmar está funcionando!");
}

// Associa a função ao botão (quando existe)
document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("btnIniciar");
  if (botao) {
    botao.addEventListener("click", iniciarApp);
  }
});
