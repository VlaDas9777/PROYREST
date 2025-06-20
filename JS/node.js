<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB0HFbOtNh6OFAi_ZnCUoibAF9F1oEjdgw",
    authDomain: "pagweb-8d39b.firebaseapp.com",
    projectId: "pagweb-8d39b",
    storageBucket: "pagweb-8d39b.firebasestorage.app",
    messagingSenderId: "266555012476",
    appId: "1:266555012476:web:c0ed0648cc1c9eedd860f9",
    measurementId: "G-E1MTHRT6BR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>