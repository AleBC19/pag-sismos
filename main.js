import './style.css'
import drawGraphicSismosLocation from './js/graficaCantidadSismosLocation';
import drawGraphicSismoMayorYear from './js/graficaMaxMagnitudYear';
import drawGraphicSismosForYear from './js/graficaSismosYear';

document.addEventListener('DOMContentLoaded', () => {
  renderGraphs()
})

async function renderGraphs() {
  await drawGraphicSismosLocation();
  await drawGraphicSismoMayorYear();
  await drawGraphicSismosForYear();
}