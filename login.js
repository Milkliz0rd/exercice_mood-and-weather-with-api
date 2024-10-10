import { loginServeur } from './login-serveur.js';

function initializeLoginUser() {
  const loginForm = document.querySelector('.login-form');

  // on ajoute le listener sur l'évènement de notre submit
  loginForm.addEventListener('submit', (event) => {
    // on empêche le refresh de la page après le submit
    event.preventDefault();
    // on créé une variable login qui sera la valeur de l'input de loginForm
    const userName = event.target.querySelector('[name=user-name]').value;
    const password = event.target.querySelector('[name=password]').value;

    //------------------ Send the login to your server here --------------------------

    // On va récupérer notre serveur avec fetch et .then pour la réponse du serveur
    loginServeur(userName, password).then((response) => {
      if (response.status === 404) {
        alert("Erreur login");
        return
      }
      localStorage.setItem('token', response.access_token)
      window.location.href = "/"
    }).catch((error) => {
      alert("Un problème est survenu");
    })
  });
}

initializeLoginUser()