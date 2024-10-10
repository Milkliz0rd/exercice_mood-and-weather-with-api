//--------- Récupération des données dans le local storage----------------

// on créé une fonction qui sera exporté pour récupéré nos donnés du localStorage
export function getReports() {
  // on créé une variable "reports" qui utilise "JSON.parse" pour convertir les données JSON (langage du localStorage) en js
  // ette fonction récupère (getItem) les données d'humeurs stockées dans le localStorage sous la clé 'moodReports'. Si aucune donnée ("||") n'existe, elle retourne un tableau vide ('[]')
    const reports = JSON.parse(localStorage.getItem('moodReports') || '[]')
    // on return la variable
    return reports
  }
  
  //------- Sauvegarde des données dans le localStorage--------------

// on créé une fonction qui sera exporté pour ajouter un nouveau rapport d'humeur à la liste des rapports existants dans le localStorage 
  export function saveReport(report) {
    // on créé la variable "reports" qui fait appel à la fonction "getReports"
    const reports = getReports()
    // "reports.push(report)" ajoute le nouveau rapport à la fin du tableau
    reports.push(report)
    // on sauvegarde celle-ci dans le localstorage
    localStorage.setItem('moodReports', JSON.stringify(reports))
  }