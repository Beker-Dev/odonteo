import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App.js';

describe('Tests statement page', () => {

    it('should get statement inputs', async () => {
        render(<App />);
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

        const statementButton = screen.getByText(/Ver extrato/i)

        fireEvent.click(statementButton);

        const statementPage = screen.getByTestId('statement-page');
       

        expect(statementPage).toBeInTheDocument();

        const initialDataInput = screen.getByTestId('initial-date-id');
        const endDataInput = screen.getByTestId('end-date-id');
    
        fireEvent.change(initialDataInput, { target: {
            value: '2022-03-03'
        }});
        fireEvent.change(endDataInput, { target: {
            value: '2022-01-01'
        }});

        expect(initialDataInput).toHaveValue('2022-03-03');
        expect(endDataInput).toHaveValue('2022-01-01');
    });
});