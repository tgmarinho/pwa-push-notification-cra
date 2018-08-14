import firebase from 'firebase';

/*


<script src="https://www.gstatic.com/firebasejs/5.3.1/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBwwjkw17I0FpXa4e7qTsApNEo7itSaAdo",
    authDomain: "push-notification-teste-65c3f.firebaseapp.com",
    databaseURL: "https://push-notification-teste-65c3f.firebaseio.com",
    projectId: "push-notification-teste-65c3f",
    storageBucket: "push-notification-teste-65c3f.appspot.com",
    messagingSenderId: ""
  };
  firebase.initializeApp(config);
</script>

*/

export const inicializarFirebase = () => {

    firebase.initializeApp({
        messagingSenderId: "552599032267"
    });

    // navigator.serviceWorker
    //     .register('/registerServiceWorker.js')
    //     .then((registration) => {
    //         firebase.messaging().useServiceWorker(registration);
    //     });
}

export const pedirPermissaoParaReceberNotificacoes = async () => {
    try {
      const messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();
      console.log('token do usuário:', token);
      return token;
    } catch (error) {
      console.error(error);
    }
  }


