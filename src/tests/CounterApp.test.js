import { shallow } from "enzyme";
import { CounterApp } from "../CounterApp";

describe('Pruebas en CounterApp', () => {

    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });
  
    test('should mostrar el <CounterApp /> correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('should monstrar 100 por defecto', () => {
      const valor = 100;
      const wrapper = shallow(<CounterApp value={valor}/>);
      const counterText = wrapper.find('h2').text().trim();

      //expect( Number(result)).toBe(valor);
      expect(counterText).toBe('100');
    });

    test('should increase con n boton +1', () => {
        
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');
        
    });

    test('should decrementar con n boton -1', () => {
        
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('9');
        
    });
    
    test('should resetear el valor por defecto', () => {
        const wrapper = shallow(<CounterApp value={105}/>);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('105');

    });
    
    
});
