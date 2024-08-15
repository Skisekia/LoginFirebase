// Configuración de Firebase

const firebaseConfig = {
 apiKey: "AIzaSyBJq2ypR-omjaBjJVTAK4bQASKk149Rsb4",
 authDomain: "loginfirebase-f4cf3.firebaseapp.com",
 projectId: "loginfirebase-f4cf3",
 storageBucket: "loginfirebase-f4cf3.appspot.com",
 messagingSenderId: "654469974629",
 appId: "1:654469974629:web:af875f2fd8193189a0148c",
 measurementId: "G-01FPKMC44F"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Referencia al formulario de inicio de sesión
const loginForm = document.getElementById('loginForm');

// Manejo del formulario
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Autenticación con Firebase
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Sesión iniciada correctamente
            const user = userCredential.user;
            alert('Inicio de sesión exitoso');
            // Redirigir a otra página, si es necesario
        })
        .catch((error) => {
            // Mostrar mensaje de error
            errorMessage.textContent = 'Error: ' + error.message;
        });
});
