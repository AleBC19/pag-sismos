import drawGraphicSismosLocation from './js/graficaCantidadSismosLocation';
import drawGraphicSismoMayorYear from './js/graficaMaxMagnitudYear';
import drawGraphicSismosForYear from './js/graficaSismosYear';
import './style.css'


document.addEventListener('DOMContentLoaded', () => {
  renderGraphs()
})

async function renderGraphs() {
  await drawGraphicSismosLocation();
  await drawGraphicSismoMayorYear();
  await drawGraphicSismosForYear();
}

// setupCounter(document.querySelector('#counter'))