import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Root from '../src/routes/root/Root';

vi.mock('../src/exports/exports', () => ({
    Navbar: () => <div>Navbar</div>,
    Start: () => <div>Start</div>,
    WhoAmI: () => <div>WhoAmI</div>,
    TechStack: () => <div>TechStack</div>,
    Coding: () => <div>Coding</div>,
    Technologies: () => <div>Technologies</div>,
    Footer: () => <div>Footer</div>,
    Loading: () => <div>Loading</div>
}));

describe('Root', () => {
    it('renders root container', () => {
        render(<Root />);
        expect(document.querySelector('.root')).toBeInTheDocument();
    });

    it('renders Navbar component', () => {
        render(<Root />);
        expect(screen.getByText('Navbar')).toBeInTheDocument();
    });

    it('renders Start component', () => {
        render(<Root />);
        expect(screen.getByText('Start')).toBeInTheDocument();
    });

    it('renders WhoAmI component', () => {
        render(<Root />);
        expect(screen.getByText('WhoAmI')).toBeInTheDocument();
    });

    it('renders TechStack component', () => {
        render(<Root />);
        expect(screen.getByText('TechStack')).toBeInTheDocument();
    });

    it('renders Coding component', () => {
        render(<Root />);
        expect(screen.getByText('Coding')).toBeInTheDocument();
    });

    it('renders Technologies component', () => {
        render(<Root />);
        expect(screen.getByText('Technologies')).toBeInTheDocument();
    });

    it('renders Footer component', () => {
        render(<Root />);
        expect(screen.getByText('Footer')).toBeInTheDocument();
    });
});
