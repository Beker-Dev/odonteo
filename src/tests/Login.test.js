import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App'

describe('Test Login Page', () => {
    it('Should get email input value', async () => {
        render(<App/>)
        const emailInput = screen.getByTestId('email')
        fireEvent.change(emailInput, { target: {
            value: 'user@user.com'
        }});
        expect(emailInput).toHaveValue('user@user.com')
    })

    it('Should get password input value', async () => {
        render(<App/>)
        const passwordInput = screen.getByTestId('password')
        fireEvent.change(passwordInput, { target: {
            value: 'asdfAf@2'
        }});
        expect(passwordInput).toHaveValue('asdfAf@2')
    })

    it('Shoud make login', async () => {
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
    })
})
