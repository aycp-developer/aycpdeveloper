import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from '../src/App';

describe('App', () => {
    it('renders App container', () => {
        render(<App />);
        expect(document.querySelector('.App')).toBeInTheDocument();
    });
});
