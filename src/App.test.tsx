import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders title and logo', () => {
  render(<App />);
  const title1 = screen.getAllByText(/We["']re/i);
  const title2 = screen.getByText(/coming/i)
  const title3 = screen.getByText(/soon/i)
  expect(title1.length).toEqual(2);
  expect(title2).toBeInTheDocument();
  expect(title3).toBeInTheDocument();
  const logo = screen.getAllByAltText('logo');
  expect(logo.length).toEqual(2);
});

test('render description', () => {
  render(<App />);
  const description = screen.getByText(/Hello fellow shoppers! We[']re currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals./i)
  expect(description).toBeInTheDocument()
})

test('render input and submit button', () => {
  render(<App />);
  const input = screen.getByTestId('input');
  const button = screen.getByTestId('button');
  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
})

test('type in wrong email format', () => {
  render(<App />);
  const input = screen.getByTestId('input');
  expect(screen.queryByTestId('error-message')).not.toBeInTheDocument()
  fireEvent.change(input, { target: { value: 'juliapaulmyla@yahoo.com' } });
  expect(input).toHaveValue('juliapaulmyla@yahoo.com');
  expect(screen.queryByTestId('error-message')).not.toBeInTheDocument()
  fireEvent.change(input, { target: { value: 'apple' } });
  expect(input).toHaveValue('apple');
  const button = screen.getByTestId('button');
  expect(button).toBeInTheDocument();
  fireEvent.click(button)
  expect(screen.getByTestId('error-message')).toBeInTheDocument()
})

