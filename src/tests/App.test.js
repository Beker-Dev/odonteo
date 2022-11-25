import { fireEvent, render, screen } from '@testing-library/react';
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

  it('Should render main page', () => {
    window.history.pushState({}, 'Login', '/login')
    render(<App/>)
    const emailInput = screen.getByTestId('email')
    const passwordInput = screen.getByTestId('password')
    const loginBtn = screen.getByText(/entrar/i);
    
    fireEvent.change(emailInput, { target: {
        value: 'user@user.com'
    }});
    fireEvent.change(passwordInput, { target: {
        value: 'asdfAf@2'
    }});
    fireEvent.click(loginBtn)

    const mainPage = screen.getByTestId('main-page')
    expect(mainPage).toBeInTheDocument()
  });

  it('Should render statement page', () => {
    window.history.pushState({}, 'Login', '/login')
    render(<App/>)
    const emailInput = screen.getByTestId('email')
    const passwordInput = screen.getByTestId('password')
    const loginBtn = screen.getByText(/entrar/i);
    
    fireEvent.change(emailInput, { target: {
        value: 'user@user.com'
    }});
    fireEvent.change(passwordInput, { target: {
        value: 'asdfAf@2'
    }});
    fireEvent.click(loginBtn)

    const statementBtn = screen.getByText(/ver extrato/i)
    fireEvent.click(statementBtn)

    const statementPage = screen.getByTestId('statement-page')
    expect(statementPage).toBeInTheDocument()
  });
});