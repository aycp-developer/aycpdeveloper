import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Navbar from '../src/components/navbar/Navbar';
import { ButtonsContext } from '../src/exports/exports';

vi.mock('../src/assets/assets', () => ({
    aycpdeveloperLogo: 'mock-logo.png'
}));

vi.mock('../src/exports/exports', async (importOriginal) => {
    const actual = await importOriginal();
    return {
        ...actual,
        Whatsapp: () => <a data-testid="whatsapp-mock">WhatsApp</a>
    };
});

const mockButtonsState = { buttonsState: { buttonsState: false } };

const renderWithContext = (component) => {
    return render(
        <ButtonsContext.Provider value={mockButtonsState}>
            {component}
        </ButtonsContext.Provider>
    );
};

describe('Navbar', () => {
    it('renders navbar container', () => {
        renderWithContext(<Navbar />);
        expect(document.querySelector('.navbar')).toBeInTheDocument();
    });

    it('renders logo image', () => {
        renderWithContext(<Navbar />);
        expect(document.querySelector('.aycpdeveloper-logo')).toBeInTheDocument();
    });

    it('renders contact me button', () => {
        renderWithContext(<Navbar />);
        expect(screen.getByText('CONTÁCTAME')).toBeInTheDocument();
    });

    it('contact me button is clickable', async () => {
        const user = userEvent.setup();
        renderWithContext(<Navbar />);
        
        const contactButton = screen.getByText('CONTÁCTAME');
        await user.click(contactButton);
    });

    it('shows whatsapp button after clicking contact me', async () => {
        const user = userEvent.setup();
        renderWithContext(<Navbar />);
        
        const contactButton = screen.getByText('CONTÁCTAME');
        await user.click(contactButton);
        
        expect(document.querySelector('.whatsapp-button')).toBeInTheDocument();
    });

    it('toggles whatsapp button visibility', async () => {
        const user = userEvent.setup();
        renderWithContext(<Navbar />);
        
        const contactButton = screen.getByText('CONTÁCTAME');
        
        await user.click(contactButton);
        expect(document.querySelector('.whatsapp-button')).toBeInTheDocument();
        
        await user.click(contactButton);
        expect(document.querySelector('.whatsapp-button')).not.toBeInTheDocument();
    });
});
