import Chart from 'chart.js/auto';
import magnitudMaxYear from '../db/magnitudMaxYear.json';

async function drawGraphicSismoMayorYear() {
  new Chart(
    document.getElementById('sismosMaxYear'), {
    type: 'bar',
    data: {
      labels: magnitudMaxYear.map(row => row.year),
      datasets: [
        {
          label: 'Sismo de Mayor Magnitud de Cada Año',
          data: magnitudMaxYear.map(row => row.magnitudMax)
        }
      ]
    }
  }
  )
}

export default drawGraphicSismoMayorYear;