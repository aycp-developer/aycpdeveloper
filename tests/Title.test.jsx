import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Title from '../src/components/title/Title';

describe('Title', () => {
    it('renders title text', () => {
        render(<Title title="Test Title" />);
        expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('renders h2 element', () => {
        render(<Title title="Test Title" />);
        expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    });

    it('has correct className', () => {
        render(<Title title="Test Title" />);
        expect(screen.getByRole('heading')).toHaveClass('title');
    });

    it('applies degrade-blue-title class to span', () => {
        render(<Title title="Test Title" />);
        expect(screen.getByText('Test Title')).toHaveClass('degrade-blue-title');
    });
});
