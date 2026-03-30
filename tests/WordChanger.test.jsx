import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import WordChanger from '../src/components/word-changer/WordChanger';

describe('WordChanger', () => {
    it('renders word-changer container', () => {
        render(<WordChanger />);
        expect(document.querySelector('.word-changer')).toBeInTheDocument();
    });

    it('has word-changer class', () => {
        render(<WordChanger />);
        expect(document.querySelector('.word-changer')).toHaveClass('word-changer');
    });

    it('renders loader element', () => {
        render(<WordChanger />);
        expect(document.querySelector('.loader')).toBeInTheDocument();
    });

    it('renders Desarrollador text', () => {
        render(<WordChanger />);
        expect(screen.getByText('Desarrollador')).toBeInTheDocument();
    });

    it('renders words container', () => {
        render(<WordChanger />);
        expect(document.querySelector('.words')).toBeInTheDocument();
    });

    it('contains word spans', () => {
        render(<WordChanger />);
        const words = document.querySelectorAll('.word');
        expect(words.length).toBeGreaterThan(0);
    });

    it('renders FullStack word', () => {
        render(<WordChanger />);
        expect(screen.getAllByText('FullStack')[0]).toBeInTheDocument();
    });
});
