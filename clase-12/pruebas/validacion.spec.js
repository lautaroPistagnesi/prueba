import bulbasaur from "../../fixtures/bulbasaur.json";
import * as informacion from "../Ui.js";
import { validarNombres } from "../validacion";

beforeEach(() => {
    jest.clearAllMocks()
})

jest.mock('node-fetch');

jest.mock('../Ui.js', () => ({
  agregarError: jest.fn(),
  sacarError: jest.fn(),
  buscarImagen: jest.fn()
}));

test("validacion de pokemones", async () => {

  const mockFetch = jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: true,
    json: jest.fn().mockResolvedValue(bulbasaur)
  });


  await validarNombres("bulbasaur");

  expect(informacion.agregarError).not.toHaveBeenCalled();
  expect(informacion.sacarError).toHaveBeenCalled();
  expect(informacion.buscarImagen).toHaveBeenCalledWith("bulbasaur");

  mockFetch.mockRestore();
});

test("fallo la validacion de pokemones", async () => {
    const mockFetch = jest.spyOn(global, 'fetch').mockResolvedValue({
      ok: false,
      json: jest.fn().mockResolvedValue(bulbasaur)
    });
  
    await validarNombres("bulbasaur");
  
    expect(informacion.agregarError).toHaveBeenCalled();
    expect(informacion.sacarError).not.toHaveBeenCalled();
    expect(informacion.buscarImagen).not.toHaveBeenCalledWith("bulbasaur");
  
    // Restaurar el fetch original
    mockFetch.mockRestore();
  });