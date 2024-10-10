function redirectToLoginIfNotLogged() {
  const token = localStorage.getItem('token')

  if (!token) {
    window.location.href = "/login.html"
    return
  }
}


redirectToLoginIfNotLogged()