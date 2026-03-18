import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import WhoAmI from '../src/routes/who-am-i/WhoAmI';

vi.mock('../src/exports/exports', () => ({
    DynamicText: () => <span>DynamicText</span>
}));

describe('WhoAmI', () => {
    it('renders who-am-i container', () => {
        render(<WhoAmI />);
        expect(document.querySelector('.who-am-i')).toBeInTheDocument();
    });

    it('renders ¿Quién soy? title', () => {
        render(<WhoAmI />);
        expect(screen.getByText('¿Quién soy?')).toBeInTheDocument();
    });

    it('renders DynamicText component', () => {
        render(<WhoAmI />);
        expect(screen.getByText('DynamicText')).toBeInTheDocument();
    });

    it('renders paragraph with description', () => {
        render(<WhoAmI />);
        expect(screen.getByText(/Autodidacta, cortés y muy entusiasta/)).toBeInTheDocument();
    });

    it('renders quote icons', () => {
        render(<WhoAmI />);
        const quotes = document.querySelectorAll('.quote');
        expect(quotes.length).toBe(2);
    });
});
