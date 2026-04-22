import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ScrollToTop from '../src/components/scroll-to-top/ScrollToTop';

describe('ScrollToTop', () => {
    it('renders the scroll to top button', () => {
        render(<ScrollToTop />);
        const button = screen.getByRole('button', { name: /volver al inicio/i });
        expect(button).toBeInTheDocument();
    });

    it('button contains an SVG icon', () => {
        render(<ScrollToTop />);
        const svg = document.querySelector('svg');
        expect(svg).toBeInTheDocument();
    });

    it('initially is not visible', () => {
        render(<ScrollToTop />);
        const container = document.querySelector('.scroll-to-top');
        expect(container).not.toHaveClass('visible');
    });
});
