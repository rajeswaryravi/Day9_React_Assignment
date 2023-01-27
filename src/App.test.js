import * as React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { doDecrement, doIncrement } from "./App";

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
    screen.debug();
  });
});
// describe('App', () => {
//   it('renders App component', () => {
//     render(<App />);

//     expect(screen.getByText('Search:')).toBeInTheDocument();
//     expect(screen.getByRole('textbox')).toBeInTheDocument();
//   });
// })
// describe('App', () => {
//   it('renders App component', async () => {
//     render(<App />);

//     expect(screen.queryByText(/Signed in as/)).toBeNull();

//     expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
//   });
// });
describe('Increment and Decrement functions', ()=> {
  test('should increment the counter in state', () => { 
 const state = { counter: 0 }; 
 const newState = doIncrement(state); 
 expect(newState.counter).toEqual(1); 
 });  
 test('should decrement the counter in state', () => {
  const state = { counter: 0 }; 
 const newState = doDecrement(state); 
 expect(newState.counter).toEqual(-1); 
 });
 });