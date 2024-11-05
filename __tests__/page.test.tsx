import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from '../app/page';

test('Page', () => {
    it('renders the welcome message', () => {
        render(<Page />);
        const welcomeMessage = screen.getByText(/Welcome to Acme/i);
        console.log(welcomeMessage)
        // expect(weclomeMessage).toBeInTheDocument();
    })
  
  expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined();
});
