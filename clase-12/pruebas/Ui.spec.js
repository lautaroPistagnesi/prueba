import 'jsdom-global/register';
import $ from 'jquery';
import * as informacion from '../Ui.js';
import pokedexFixture from '../../fixtures/pokedex.fixture.js';
import bulbasaur from '../../fixtures/bulbasaur.json';

beforeEach(() => {
  jest.clearAllMocks()
})

jest.mock("node-fetch")

global.fetch = jest.fn().mockResolvedValue({
  JSON: () => Promise.resolve(bulbasaur)
});

jest.mock('../Ui', () => ({
  CambiarImagenes: jest.fn(),
  buscarImagen: jest.fn()
}));

test('manejo de errores e imágenes', async () => {
  document.body.innerHTML = pokedexFixture;

  await informacion.buscarImagen('bulbasaur');

  expect(informacion.buscarImagen).toHaveBeenCalledWith('bulbasaur');

  console.log($('#nombreDelPokemon')[0].value)
});
