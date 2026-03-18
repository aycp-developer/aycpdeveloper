import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from '../src/components/navbar/Navbar';

vi.mock('../src/assets/assets', () => ({
    aycpdeveloperLogo: 'mock-logo.png'
}));

vi.mock('../src/exports/exports', () => ({
    Whatsapp: () => <a data-testid="whatsapp-mock">WhatsApp</a>
}));

describe('Navbar', () => {
    it('renders navbar container', () => {
        render(<Navbar />);
        expect(document.querySelector('.navbar')).toBeInTheDocument();
    });

    it('renders logo image', () => {
        render(<Navbar />);
        expect(document.querySelector('.aycpdeveloper-logo')).toBeInTheDocument();
    });

    it('renders contact me button', () => {
        render(<Navbar />);
        expect(screen.getByText('CONTÁCTAME')).toBeInTheDocument();
    });

    it('contact me button is clickable', async () => {
        const user = userEvent.setup();
        render(<Navbar />);
        
        const contactButton = screen.getByText('CONTÁCTAME');
        await user.click(contactButton);
    });

    it('shows whatsapp button after clicking contact me', async () => {
        const user = userEvent.setup();
        render(<Navbar />);
        
        const contactButton = screen.getByText('CONTÁCTAME');
        await user.click(contactButton);
        
        expect(document.querySelector('.whatsapp-button')).toBeInTheDocument();
    });

    it('toggles whatsapp button visibility', async () => {
        const user = userEvent.setup();
        render(<Navbar />);
        
        const contactButton = screen.getByText('CONTÁCTAME');
        
        await user.click(contactButton);
        expect(document.querySelector('.whatsapp-button')).toBeInTheDocument();
        
        await user.click(contactButton);
        expect(document.querySelector('.whatsapp-button')).not.toBeInTheDocument();
    });
});
