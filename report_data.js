export function getReports() {
    const reports = JSON.parse(localStorage.getItem('moodReports') || '[]')
  
    return reports
  }
  
  export function saveReport(report) {
    const reports = getReports()
  
    reports.push(report)
    localStorage.setItem('moodReports', JSON.stringify(reports))
  }