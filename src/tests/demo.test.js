
describe('Pruebas en el archivo demo.test.js', () => {

    test('debe de ser iguales los strings', () => {
  
        //1. Inicializacion
        const mensaje = 'Hola mundo';
    
        //2. Estimulo
        const mensajedos = `Hola mundo`;
    
        //3. Observar el comportamiento
    
        expect(mensaje).toBe(mensajedos);
        
    });

});