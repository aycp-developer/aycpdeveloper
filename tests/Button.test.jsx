import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../src/components/button/Button';

describe('Button', () => {
    it('renders button with text', () => {
        render(<Button text="Test Button" />);
        expect(screen.getByText('Test Button')).toBeInTheDocument();
    });

    it('renders with correct className', () => {
        render(<Button text="Test Button" />);
        expect(screen.getByRole('button')).toHaveClass('button');
    });

    it('calls onClick when clicked', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();
        render(<Button text="Click Me" onClick={onClick} />);
        
        await user.click(screen.getByRole('button'));
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('has blob elements', () => {
        render(<Button text="Test" />);
        expect(document.querySelector('.blob1')).toBeInTheDocument();
        expect(document.querySelector('.blob2')).toBeInTheDocument();
    });

    it('renders text element', () => {
        render(<Button text="Test" />);
        expect(document.querySelector('.text')).toBeInTheDocument();
    });
});
