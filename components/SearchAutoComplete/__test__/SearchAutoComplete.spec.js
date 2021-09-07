import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SearchAutoComplete } from '..';

//simulate api call
//expect input to trigger api call

//simulate user input to search and update state
describe('SearchInput', () => {
  //Test render
  it('should render', async () => {
    render(<SearchAutoComplete />);
    const inputElement = screen.getByPlaceholderText(/search breweries/i);
    expect(inputElement).toBeInTheDocument();
  });

  //Test user input
  it('should capture user input', async () => {
    render(<SearchAutoComplete />);
    const inputElement = screen.getByPlaceholderText(/search breweries/i);
    fireEvent.change(inputElement, { target: { value: 'Maine' } });
    expect(inputElement.value).toBe('Maine');
  });
});
