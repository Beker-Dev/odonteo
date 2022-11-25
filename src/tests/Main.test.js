import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App'

describe('Test Login Page', () => {
    beforeEach(() => {
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve({})
        }));
    });

    it('Should get amount input value', async () => {
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
        const input = screen.getByTestId('amount')
        fireEvent.change(input, {target: {
            value: 3500
        }});
        expect(input).toHaveValue(3500)
    })

    it('Should get installments input value', async () => {
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
        const input = screen.getByTestId('installments')
        fireEvent.change(input, {target: {
            value: 3
        }});
        expect(input).toHaveValue(3)
    })

    it('Should get billingDay input value', async () => {
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
        const input = screen.getByTestId('billing-day')
        fireEvent.change(input, {target: {
            value: 10
        }});
        expect(input).toHaveValue(10)
    })

    it('Should get firstInstallmentDate input value', async () => {
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
        const input = screen.getByTestId('first-installment-date')
        fireEvent.change(input, {target: {
            value: '2023-04-10'
        }});
        expect(input).toHaveValue('2023-04-10')
    })

    it('Should register billing', async () => {
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

        const amount = screen.getByTestId('amount')
        const installments = screen.getByTestId('installments')
        const billingDay = screen.getByTestId('billing-day')
        const firstInstallmentDate = screen.getByTestId('first-installment-date')
        const registerBillingBtn = screen.getByText(/registrar cobrança/i)
        fireEvent.change(amount, {target: {
            value: 3500
        }});
        fireEvent.change(installments, {target: {
            value: 3
        }});
        fireEvent.change(billingDay, {target: {
            value: 10
        }});
        fireEvent.change(firstInstallmentDate, {target: {
            value: '2023-04-10'
        }})
        fireEvent.click(registerBillingBtn)
        const msg = screen.getByText(/Registro efetuado com sucesso!/i)
        expect(msg).toBeInTheDocument()
    })
})
