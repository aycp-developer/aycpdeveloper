import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../src/components/footer/Footer';

vi.mock('../src/assets/assets', () => ({
    backgroundFooter: 'mock-background.png',
    aycpdeveloperLogo: 'mock-logo.png'
}));

describe('Footer', () => {
    it('renders footer container', () => {
        render(<Footer />);
        expect(document.querySelector('.footer')).toBeInTheDocument();
    });

    it('renders logo', () => {
        render(<Footer />);
        expect(document.querySelector('.aycpdeveloper-logo')).toBeInTheDocument();
    });

    it('renders copyright text', () => {
        render(<Footer />);
        expect(screen.getByText(/Copyright © 2026/)).toBeInTheDocument();
    });

    it('renders recommended pages section', () => {
        render(<Footer />);
        expect(screen.getByText('Páginas Recomendadas')).toBeInTheDocument();
    });

    it('renders MDN link', () => {
        render(<Footer />);
        const mdnLink = screen.getByText('MDN');
        expect(mdnLink).toHaveAttribute('href', 'https://developer.mozilla.org/es/');
    });

    it('renders GeeksforGeeks link', () => {
        render(<Footer />);
        const geeksLink = screen.getByText('GeeksforGeeks');
        expect(geeksLink).toHaveAttribute('href', 'https://www.geeksforgeeks.org/');
    });

    it('renders W3Schools link', () => {
        render(<Footer />);
        const w3Link = screen.getByText('W3Schools');
        expect(w3Link).toHaveAttribute('href', 'https://www.w3schools.com/');
    });

    it('renders daily.dev link', () => {
        render(<Footer />);
        expect(screen.getByText('daily.dev')).toBeInTheDocument();
    });

    it('renders recommended channels section', () => {
        render(<Footer />);
        expect(screen.getByText('Canales de Youtube Recomendados')).toBeInTheDocument();
    });

    it('renders OpenBootcamp link', () => {
        render(<Footer />);
        const openBootcampLink = screen.getByText('OpenBootcamp');
        expect(openBootcampLink).toHaveAttribute('href', 'https://www.youtube.com/@OpenBootcamp');
    });

    it('renders TheNetNinja link', () => {
        render(<Footer />);
        const netNinjaLink = screen.getByText('TheNetNinja');
        expect(netNinjaLink).toHaveAttribute('href', 'https://www.youtube.com/@NetNinja');
    });

    it('renders recommended bootcamps section', () => {
        render(<Footer />);
        expect(screen.getByText('Bootcamps Recomendados')).toBeInTheDocument();
    });

    it('renders UltraCamp link', () => {
        render(<Footer />);
        const ultraCampLink = screen.getByText('UltraCamp');
        expect(ultraCampLink).toHaveAttribute('href', 'https://ultracamp.es/');
    });

    it('renders Fireship link', () => {
        render(<Footer />);
        const fireshipLink = screen.getByText('Fireship');
        expect(fireshipLink).toHaveAttribute('href', 'https://fireship.io/');
    });

    it('renders footer content section', () => {
        render(<Footer />);
        expect(document.querySelector('.content')).toBeInTheDocument();
    });

    it('renders YouTube freeCodeCamp link', () => {
        render(<Footer />);
        const links = screen.getAllByText('freeCodeCamp');
        const youtubeLink = links.find(link => link.getAttribute('href') === 'https://www.youtube.com/@freecodecamp');
        expect(youtubeLink).toBeInTheDocument();
    });
});
