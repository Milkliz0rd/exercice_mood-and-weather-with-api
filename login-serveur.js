// Imitation d'une réponse serveur
export function loginServeur(userName, password) {

  // #region Le travail du serveur
  const USER_NAME = "Kevin"
  const PASSWORD = "Pass1"

  if (userName === USER_NAME && password === PASSWORD) {
    return Promise.resolve({
      status: 200,
      body: {
        access_token: `${Date.now()}`
      }
    })
  }
  return Promise.resolve({
    status: 404,
  })
  // #endregion Le travail du serveur
}