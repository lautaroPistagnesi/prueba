import { JSDOM } from "jsdom"
import * as informacion from "../Ui.js"
import pokedexFixture from "../../fixtures/pokedex.fixture.js"
import bulbasaur from "../../fixtures/bulbasaur.json";

const dom = new JSDOM(pokedexFixture);
global.document = dom.window.document;

jest.mock('node-fetch')

test("manejo de errores e imagenes", () => {
    const fotoNormal = document.querySelector("#pokemonNormal")
    jest.mock("../Ui", ()=>({
        estadisticas: jest.fn()
    }))
    const mockFetch = jest.spyOn(global, 'fetch');

    mockFetch.mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce({bulbasaur})
    });
    mockFetch()
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {

    })
    informacion.CambiarImagenes("bulbasaur")
})