// OjO a que no se crean constantes con elementos del DOM, ya que resulta que Google ChromE lo hace automaticamente :-))

empezar_grabacion.addEventListener('click',function(){
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;

    
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;  
    recognition.continuous = true;

    recognition.addEventListener('result', e=>{
        const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join(', ');

   

        convertir_texto.innerHTML = transcript;
    })
    

    if (speech == true) {
        recognition.start();
    }

    const btnStopRecord = document.getElementById('terminar_grabacion');

    btnStopRecord.addEventListener('click', function(){
      
        recognition.abort();

    })

});
















