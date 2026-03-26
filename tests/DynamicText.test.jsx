import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import DynamicText from '../src/components/dynamic-text/DynamicText';

describe('DynamicText', () => {
    it('renders with dynamic-text class', () => {
        render(<DynamicText strings="Test string" />);
        expect(document.querySelector('.dynamic-text')).toBeInTheDocument();
    });

    it('renders span element', () => {
        render(<DynamicText strings="Test string" />);
        const spans = document.querySelectorAll('span');
        expect(spans.length).toBeGreaterThan(0);
    });

    it('renders without errors', () => {
        render(<DynamicText strings="Test string" />);
        expect(document.querySelector('.dynamic-text')).toBeInTheDocument();
    });
});
