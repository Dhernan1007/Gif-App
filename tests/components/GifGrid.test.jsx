import { describe, test, expect, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/component/GifGrid";
import useFetchGifs from "../../src/hooks/useFetchGifs";

// con esto le digo que haga un mock de este path
jest.mock('../../src/hooks/useFetchGifs');
//sirve tambien para probar elementos de terceros

describe('Pruebas en <GifGrid/>', () => {

     const category = 'One Punsh'

    // test('debe de mostrar el loading inicialmente', () => {

    //        // es lo que voy a simular que regresa la función
           
    //        //con esto resuelvo el error de desestructuración de propiedades que muestra
    //        useFetchGifs.mockReturnValue({
    //         images: [],
    //         isLoading: true,
    //     })

    //     render(<GifGrid category={category} />);

    //     // evaluar el estado inicial
    //     expect(screen.getByText(category));
    //     //expect(screen.getByText('L &nbsp; ading'));
    // });

  

    test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', async () => {
        const gifs = [
          {
            id: 'ABC',
            title: 'Saitama',
            url: 'https://localhost/3001/goku',
          },
        ];
      
        useFetchGifs.mockReturnValue({
          images: gifs,
          isLoading: false,
        });
      
        render(<GifGrid category={category} />);
    
         () => {
          const isImage = screen.getAllByRole('img').length;
          expect(isImage).toBe(3);
        };

      });
});
