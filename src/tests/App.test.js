import { render, screen } from '@testing-library/react';
import App from '../App'

describe('Test sanity of routes', () => {
  beforeEach(() => {
    const currentState = window.history.state;

    window.history.replaceState(currentState, '', '/');
  });

  it('Should render login page', () => {
      window.history.pushState({}, 'Login', '/login')
      render(<App></App>)
      const loginPage = screen.getByTestId('login-page')
      expect(loginPage).toBeInTheDocument()
  });

  // it('Should render login page', () => {
  //   window.history.pushState({}, 'Statement', '/statement')
  //   render(<App></App>)
  //   const loginPage = screen.getByTestId('statement-page')
  //   expect(loginPage).toBeInTheDocument()
  // });
});