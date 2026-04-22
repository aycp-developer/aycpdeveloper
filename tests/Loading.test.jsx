import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Loading from '../src/components/loading/Loading';

describe('Loading', () => {
    it('renders the loading component', () => {
        render(<Loading />);
        const loading = document.querySelector('.loading');
        expect(loading).toBeInTheDocument();
    });

    it('renders the spinner element', () => {
        render(<Loading />);
        const spinner = document.querySelector('.spinner');
        expect(spinner).toBeInTheDocument();
    });

    it('has both loading and spinner elements', () => {
        render(<Loading />);
        const loading = document.querySelector('.loading');
        const spinner = document.querySelector('.spinner');
        expect(loading).toBeInTheDocument();
        expect(spinner).toBeInTheDocument();
    });
});
