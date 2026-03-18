import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Formation from '../src/routes/formation/Formation';

vi.mock('../src/exports/exports', () => ({
    DynamicText: () => <span>DynamicText</span>
}));

describe('Formation', () => {
    it('renders formation container', () => {
        render(<Formation />);
        expect(document.querySelector('.formation')).toBeInTheDocument();
    });

    it('renders Formación title', () => {
        render(<Formation />);
        expect(screen.getByText('Formación')).toBeInTheDocument();
    });

    it('renders DynamicText component', () => {
        render(<Formation />);
        expect(screen.getByText('DynamicText')).toBeInTheDocument();
    });
});
