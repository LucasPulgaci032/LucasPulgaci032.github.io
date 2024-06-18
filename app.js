const formulario = document.getElementById('formulario');
       // Referência ao elemento "formulario" (div)
      const nomeInput = document.getElementById('nome');
      
     
      const emailInput = document.getElementById('email');
      
      const enderecoInput = document.getElementById('endereço');
      
      const senhaInput = document.getElementById('senha');
      
      const formCadastro = document.getElementById('form-cadastro'); // Referência ao formulário

      formCadastro.addEventListener('submit', function(event) { // Evento "submit" adicionado ao formulário
        event.preventDefault(); // Evita o envio padrão do formulário

        const avisos = validarLacunas();

        if (avisos) {
          alert(avisos);
          return;
        }

        // Processar o envio do formulário (por exemplo, enviar para o servidor)

        alert('Cadastro realizado com sucesso!');
        window.location.href = 'paginaentrar.html';
      });

      function validarLacunas() {
        let avisos = '';

        if (!nomeInput.value) {
          avisos += ' - preencher o campo  Nome\n';
        }

        if (!emailInput.value) {
          avisos += ' - preencher o campo Email\n';
          
        }

        if (!enderecoInput.value) {
          avisos += ' - preencher o campo Endereço\n';
        }

        if (!senhaInput.value) {
          avisos += ' - preencher o campo Senha\n';
        }

        return avisos.trim() || null;
      }

       
       
   <script>
    "use strict"

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000;//Quantos milésimos valem 1 segundo?
var cron;

//Inicia o temporizador
function start() {
    cron = setInterval(() => { timer(); }, tempo);
}

//Para o temporizador mas não limpa as variáveis
function pause() {
    clearInterval(cron);
}

//Para o temporizador e limpa as variáveis
function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00:00';
}

//Faz a contagem do tempo e exibição
function timer() {
    ss++; //Incrementa +1 na variável ss

    if (ss == 60) { //Verifica se deu 59 segundos
        ss = 0; //Volta os segundos para 0
        mm++; //Adiciona +1 na variável mm

        if (mm == 60) { //Verifica se deu 59 minutos
            mm = 0;//Volta os minutos para 0
            hh++;//Adiciona +1 na variável hora
        }
    }

    //Cria uma variável com o valor tratado HH:MM:SS
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    
    //Insere o valor tratado no elemento counter
    document.getElementById('counter').innerText = format;

    //Retorna o valor tratado
    return format;
}
      
    
</script>  