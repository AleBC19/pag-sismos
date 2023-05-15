import Chart from 'chart.js/auto';
import sismosForYear from '../db/sismosForYear.json';

(async function() {
  new Chart(
    document.getElementById('lugares'), {
      type: 'bar',
      data: {
        labels: sismosForYear.map(row => row.year),
        datasets: [
          {
            label: 'Sismos por año',
            data: sismosForYear.map(row => row.total)
          }
        ]
      }
    }
  )
})();