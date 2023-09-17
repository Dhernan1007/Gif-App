import { describe, test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/component/GifItem";

describe('Pruebas sobre el componente GifItem', () => {

    //para fines de ejemplo
    const title = 'Samurai X'
    const url = 'https://samurai-x.com/guerrero.png'


    test(' Debe hacer match con el snapshot ', () => {

        const { container } = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
      
        render( <GifItem title={title} url={url} />)
        // screen.debug();
        // expect( screen.getByRole('img').src).toBe( url );
        // expect( screen.getByRole('img').alt).toBe( title );

        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    })
    

    test('Debe de mostrar el titulo en el componente', () => {
      
        render(<GifItem title={title} url={url} />)
        expect( screen.getByText( title ) ).toBeTruthy();  
    })
    
})
