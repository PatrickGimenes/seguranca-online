document.addEventListener("DOMContentLoaded", () => {
  // Coletando informações do navegador
  const browser = navigator.userAgent;

  // Tentando coletar informações de IP (utilizando uma API externa)
  fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("ip").textContent = data.ip;
    })
    .catch((error) => {
      document.getElementById("ip").textContent =
        "Não foi possível determinar o IP";
    });

  // Coletando informações de rede
  // const network = navigator.connection
  //   ? navigator.connection.effectiveType
  //   : "Desconhecido";
  // document.getElementById("network").textContent = network;

  // Coletando informações de hardware (só informações básicas, como o dispositivo de tela)
  const tela = `${screen.width}x${screen.height}`;
  document.getElementById("tela").textContent = tela;

  //RAM
  const ram = `${navigator.deviceMemory} GB`;
  document.getElementById("ram").textContent = ram;

  //Threads
  const threads = navigator.hardwareConcurrency;
  document.getElementById("threads").textContent = threads;

  // Exibindo o navegador
  document.getElementById("browser").textContent = browser;
});
