import { getSaludo } from "../../base/02-template-string";
//import '@testing-library/jest-dom';

describe('Pruebas en 02-template-string.js', () => {
  
    test('getSaludo debe retornar Hola Jose', () => {
      
        const nombre = 'Jose';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe(`Hola ${nombre}`);
    });

    test('getSaludo debe retornar Hola Carlos si no hay argumento nombre', () => {
      
        const nombreDefault = 'Carlos';

        const saludo = getSaludo();

        expect(saludo).toBe(`Hola ${nombreDefault}`);

    });
    
    
});
