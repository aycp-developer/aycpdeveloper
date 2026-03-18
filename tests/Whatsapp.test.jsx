import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Whatsapp from '../src/components/whatsapp/Whatsapp';

describe('Whatsapp', () => {
    it('renders whatsapp link', () => {
        render(<Whatsapp />);
        expect(screen.getByRole('link')).toBeInTheDocument();
    });

    it('has correct href', () => {
        render(<Whatsapp />);
        expect(screen.getByRole('link')).toHaveAttribute('href', 'https://wa.me/5533845872?text=¡Hola, Alexander Yosimar!');
    });

    it('opens in new tab', () => {
        render(<Whatsapp />);
        expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
    });

    it('has rel noreferrer for security', () => {
        render(<Whatsapp />);
        expect(screen.getByRole('link')).toHaveAttribute('rel', 'noreferrer');
    });

    it('has whatsapp class', () => {
        render(<Whatsapp />);
        expect(screen.getByRole('link')).toHaveClass('whatsapp');
    });
});
