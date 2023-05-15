import Chart from 'chart.js/auto';
import countSismosLocation from '../db/countSismosLocation.json';

const SISMOS_LOCATION = []

for(let lugar in countSismosLocation) {
  const cantidad = countSismosLocation[lugar]
  SISMOS_LOCATION.push({ lugar, cantidad })
}

(async function () {
  new Chart(
    document.getElementById('cantidadSismosLocation'), {
    type: 'bar',
    data: {
      labels: SISMOS_LOCATION.map(row => row.lugar),
      datasets: [
        {
          label: 'Sismo de Mayor Magnitud de Cada Año',
          data: SISMOS_LOCATION.map(row => row.cantidad)
        }
      ]
    }
  }
  )
})();