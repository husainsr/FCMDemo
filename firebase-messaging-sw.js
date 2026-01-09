importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyCDO1WDcsEklq3ef3_Ea6DKxj9XBSzUkfw",
  authDomain: "warehouse-barcode-c07ee.firebaseapp.com",
  projectId: "warehouse-barcode-c07ee",
  messagingSenderId: "279969121218",
  appId: "1:279969121218:web:e1c29f44ab886cb27a8c5b"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/assets/icons/icon-72x72.png'
  };

  self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
