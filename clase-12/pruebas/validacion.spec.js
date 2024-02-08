import pokedexFixture from "../../fixtures/pokedex.fixture";
import bulbasaur from "../../fixtures/bulbasaur.json";
import * as informacion from "../Ui.js";
import { validarNombres } from "../validacion";

beforeEach(() => {
    jest.clearAllMocks()
})
// Burlar fetch
jest.mock('node-fetch');  // Asegúrate de tener instalada la dependencia 'node-fetch'

// Mockear la implementación de informacion
jest.mock('../Ui.js', () => ({
  agregarError: jest.fn(),
  sacarError: jest.fn(),
  CambiarImagenes: jest.fn()
}));

test("validacion de pokemones", async () => {
  // Configurar respuesta simulada para fetch
  const mockFetch = jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: true,
    json: jest.fn().mockResolvedValue(bulbasaur)
  });

  // Llamar a la función que quieres probar
  await validarNombres("bulbasaur");

  // Verificar que las funciones de informacion se llamaron correctamente
  expect(informacion.agregarError).not.toHaveBeenCalled();
  expect(informacion.sacarError).toHaveBeenCalled();
  expect(informacion.CambiarImagenes).toHaveBeenCalledWith("bulbasaur");

  // Restaurar el fetch original
  mockFetch.mockRestore();
});

test("fallo la validacion de pokemones", async () => {
    // Configurar respuesta simulada para fetch
    const mockFetch = jest.spyOn(global, 'fetch').mockResolvedValue({
      ok: false,
      json: jest.fn().mockResolvedValue(bulbasaur)
    });
  
    // Llamar a la función que quieres probar
    await validarNombres("bulbasaur");
  
    // Verificar que las funciones de informacion se llamaron correctamente
    expect(informacion.agregarError).toHaveBeenCalled();
    expect(informacion.sacarError).not.toHaveBeenCalled();
    expect(informacion.CambiarImagenes).not.toHaveBeenCalledWith("bulbasaur");
  
    // Restaurar el fetch original
    mockFetch.mockRestore();
  });