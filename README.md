Pequeño proyecto para aprender a:

- cada vez que se hace click en el boton se lanza una escucha que crea una constante definida como true
- usar la propiedad webkitSpeechRecognition que viene incluida en navegadores basados en WebKit, como Chrome. No he conseguido hacerlo funcionar en Firefox. Es decir, con esto se activa el microfono del ordenador o dispositivo que se esté usando.
- crear una instancia del objeto SpeechRecognition, para manejar el proceso de reconocimiento de voz

Todo esto gracias al tutorial de Invention Tricks https://www.youtube.com/watch?v=SFGIKucaOZA&list=LL
Pero me encontraba con el problema de que cada pocas decimas de segundo el microfono se paraba, asi que busque informacion sobre la API en MDN, y con esto y con otro tutorial de "10 minutos Programando" de youtube consegui dar con la solucion 🙏

Al cual he añadido
1.- un diccionario para tener los numeros de texto a cifras
