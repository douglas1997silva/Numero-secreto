 const elementoChute = document.querySelector('#chute');
 
 
 
 window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

 const recognition = new SpeechRecognition();
//traduzir para portugues-br
 recognition.lang = 'pt-Br'
 recognition.start()

 recognition.addEventListener('result', onSpeak);
//capitar o reconheceimento de voz 
 function  onSpeak(e) {
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeOchuteEumValorValido(chute);
   
 }
 function  exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
     <div> você disse:</div>
     <span class="box"> ${chute}</span>
    `
 }
 recognition.addEventListener('end', ()=> recognition.start())

 