import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App'

describe('Test Login Page', () => {
    beforeEach(() => {
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve({})
        }));
    });

    it('Should register billing', async () => {
        render(<App/>)
        
    })
})
