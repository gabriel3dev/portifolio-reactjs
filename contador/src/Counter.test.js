import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('exibe o contador com valor inicial 0', () => {
  const { getByText } = render(<Counter />);
  expect(getByText(/Contador: 0/i)).toBeInTheDocument();
});

test('incrementa o contador ao clicar no botão de incrementar', () => {
  const { getByText } = render(<Counter />);
  const incrementarButton = getByText(/Incrementar/i);
  fireEvent.click(incrementarButton);
  expect(getByText(/Contador: 1/i)).toBeInTheDocument();
});

test('decrementa o contador ao clicar no botão de decrementar', () => {
  const { getByText } = render(<Counter />);
  const decrementarButton = getByText(/Decrementar/i);
  fireEvent.click(decrementarButton);
  expect(getByText(/Contador: -1/i)).toBeInTheDocument();
});
