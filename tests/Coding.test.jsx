import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Coding from '../src/routes/coding/Coding';

vi.mock('../src/exports/exports', () => ({
    DynamicText: () => <span>DynamicText</span>
}));

vi.mock('../src/assets/assets', () => ({
    coding: 'mock-coding.mp4',
    algorithms: 'mock-algorithms.mp4'
}));

describe('Coding', () => {
    it('renders coding container', () => {
        render(<Coding />);
        expect(document.querySelector('.coding')).toBeInTheDocument();
    });

    it('renders Codificando title', () => {
        render(<Coding />);
        expect(screen.getByText('Codificando')).toBeInTheDocument();
    });

    it('renders DynamicText component', () => {
        render(<Coding />);
        expect(screen.getByText('DynamicText')).toBeInTheDocument();
    });

    it('renders paragraph about coding', () => {
        render(<Coding />);
        expect(screen.getByText(/Un día normal como programador/)).toBeInTheDocument();
    });

    it('renders coding video', () => {
        render(<Coding />);
        expect(document.querySelector('video.coding')).toBeInTheDocument();
    });

    it('renders algorithms video', () => {
        render(<Coding />);
        expect(document.querySelector('video.algorithms')).toBeInTheDocument();
    });
});
