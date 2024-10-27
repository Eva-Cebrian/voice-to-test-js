
// Función para construir el diccionario dinámicamente
function createNumberDictionary() {
    const units = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    const teens = ["diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve"];
    const tens = ["", "", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
    
    const dictionary = {};

    // Agregamos unidades y teens al diccionario
    units.forEach((word, index) => dictionary[word] = index.toString());
    teens.forEach((word, index) => dictionary[word] = (10 + index).toString());

    // Agregamos las decenas al diccionario
    tens.forEach((word, index) => {
        if (word) dictionary[word] = (index * 10).toString();  // "veinte" -> "20", etc.
        
        // Agregamos combinaciones de decenas y unidades (ej. "treinta y cuatro" -> "34")
        if (index >= 3) {  // empezamos desde "treinta" (índice 3)
            units.slice(1).forEach((unitWord, unitIndex) => {
                const compoundWord = `${word} y ${unitWord}`;  // Ej. "treinta y cuatro"
                dictionary[compoundWord] = (index * 10 + unitIndex + 1).toString();
            });
        }
    });

    return dictionary;
}

const wordsToNumbers = createNumberDictionary();


//// Parte donde se ejecuta el reconocimiento de voz


boton_convertir.addEventListener('click',function(){
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;

    
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;  // actualizaciones en tiempo real mientras el usuario habla, en lugar de esperar hasta que termine de hablar para obtener el resultado final.

    recognition.addEventListener('result', e=>{
        const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

        // Convertimos palabras numéricas a cifras
        const numericTranscript = convertWordsToNumbers(transcript);

        convertir_texto.innerHTML = numericTranscript;
    })

    if (speech == true) {
        recognition.start();
    }

});

// Función para convertir palabras numéricas a cifras usando el diccionario dinámico
function convertWordsToNumbers(text) {
    const regex = new RegExp(Object.keys(wordsToNumbers).join("|"), "gi");
    return text.replace(regex, matched => wordsToNumbers[matched.toLowerCase()]);
}







