import 'jsdom-global/register';
import $ from 'jquery';
import * as informacion from '../Ui.js';
import pokedexFixture from '../../fixtures/pokedex.fixture.js';
import bulbasaur from '../../fixtures/bulbasaur.json';

test('manejo de errores e imágenes', async () => {
    const datos = await informacion.buscarImagen("bulbasaur")
    expect(datos).toEqual(bulbasaur)
});
