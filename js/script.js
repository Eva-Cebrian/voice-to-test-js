boton_convertir.addEventListener('click',function(){
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;

    
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;  // actualizaciones en tiempo real mientras el usuario habla, en lugar de esperar hasta que termine de hablar para obtener el resultado final.

    recognition.addEventListener('result', e=>{
        const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        // .join(', ');

 

        convertir_texto.innerHTML = transcript;
    })

    if (speech == true) {
        recognition.start();
    }

});









