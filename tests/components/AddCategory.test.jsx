import { describe, test, expect, jest } from "@jest/globals";
import { AddCategory } from '../../src/component/AddCategory';
import { fireEvent, render, screen } from "@testing-library/react";

describe('Puebas en <AddCategory />', () => {
  
    test('Debe de cambiar el valor de la caja de texto', () => {
      
        render( <AddCategory onNewCategory={ ()=>{}}/>);
        const input = screen.getByRole('textbox');

      
        fireEvent.input( input, { target: { value: 'Dragon Ball Z'}} );
      
        expect( input.value ).toBe('Dragon Ball Z'); 
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
      
        const inputValue = 'Saitama';
   
        const onNewCategory = jest.fn()
        // toDo:

        
        render( <AddCategory onNewCategory={ onNewCategory }/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form'); 

        fireEvent.input( input, { target: { value: inputValue}} );
        fireEvent.submit( form );

        expect( input.value ).toBe('');

   
        expect( onNewCategory ).toHaveBeenCalled();
     
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
      
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    });
    
    test('No debe de llamar el onNewCategory si el input está vacio', () => {
      
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory }/>);

        
        const form = screen.getByRole('form');
        fireEvent.submit( form );

        // expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();
    
    })
    
    
})
