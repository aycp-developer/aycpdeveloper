import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Image from '../src/components/image/Image';

describe('Image', () => {
    it('renders img element', () => {
        render(<Image image="test.jpg" alt="Test Image" />);
        expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('has correct alt text', () => {
        render(<Image image="test.jpg" alt="Test Alt" />);
        expect(screen.getByAltText('Test Alt')).toBeInTheDocument();
    });

    it('has correct src', () => {
        render(<Image image="test.jpg" alt="Test" />);
        expect(screen.getByRole('img')).toHaveAttribute('src', 'test.jpg');
    });

    it('has image class initially without loaded class', () => {
        render(<Image image="test.jpg" alt="Test" />);
        const img = screen.getByRole('img');
        expect(img).toHaveClass('image');
        expect(img).not.toHaveClass('loaded');
    });

    it('applies custom style', () => {
        const customStyle = { width: '100px' };
        render(<Image image="test.jpg" alt="Test" style={customStyle} />);
        expect(screen.getByRole('img')).toHaveStyle({ width: '100px' });
    });
});
