import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { PrimeraApp } from '../PrimeraApp';

describe('Pruebas en PrimeraApp', () => {
  
//   test('debe de mostrar el mensaje "Hola, Jose"', () => {
    
//     const saludo = 'Hola, Jose';
//     const { getByText } = render(<PrimeraApp data={saludo}/>);

//     expect(getByText(saludo)).toBeInTheDocument();
//   });

test('should mostrar <PrimeraApp /> correctamente', () => {
    const saludo = 'Hola, Jose';
    const wrapper = shallow(<PrimeraApp data={saludo} />);

    expect(wrapper).toMatchSnapshot();
});

test('should el subtitulo enviado por props', () => {
  
    const saludo = 'Hola, Jose';
    const subtitulo = 'Soy un subtitulo';
    const wrapper = shallow(<PrimeraApp data={saludo} subtitle={subtitulo} />);

    const textoParrafo = wrapper.find('p').text();
    //console.log(textoParrafo);
    expect(textoParrafo).toBe(subtitulo);
    
});


  
});
