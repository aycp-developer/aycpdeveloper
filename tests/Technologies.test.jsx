import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Technologies from '../src/routes/technologies/Technologies';

vi.mock('../src/exports/exports', () => ({
    DynamicText: () => <span>DynamicText</span>
}));

describe('Technologies', () => {
    it('renders technologies container', () => {
        render(<Technologies />);
        expect(document.querySelector('.technologies')).toBeInTheDocument();
    });

    it('renders Tecnologías title', () => {
        render(<Technologies />);
        expect(screen.getByText('Tecnologías')).toBeInTheDocument();
    });

    it('renders DynamicText component', () => {
        render(<Technologies />);
        expect(screen.getByText('DynamicText')).toBeInTheDocument();
    });

    it('renders tech stack names paragraph', () => {
        render(<Technologies />);
        expect(screen.getByText(/Lenguajes de Programación/)).toBeInTheDocument();
    });

    it('renders tech stack icons', () => {
        render(<Technologies />);
        const icons = document.querySelectorAll('.icon');
        expect(icons.length).toBeGreaterThan(0);
    });

    it('renders HTML icon', () => {
        render(<Technologies />);
        const icons = document.querySelectorAll('.svg-icon');
        expect(icons.length).toBeGreaterThan(0);
    });
});
