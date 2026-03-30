import { describe, it, expect, vi } from 'vitest';
import { render, screen, act, waitFor } from '@testing-library/react';
import React from 'react';
import Root from '../src/routes/root/Root';

vi.mock('../src/exports/exports', async (importOriginal) => {
    const actual = await importOriginal();
    return {
        ...actual,
        Navbar: () => <div data-testid="navbar-mock">Navbar</div>,
        Loading: () => <div data-testid="loading-mock">Loading</div>,
        ScrollToTop: () => <div data-testid="scroll-to-top-mock">ScrollToTop</div>
    };
});

describe('Root', () => {
    it('renders root container', () => {
        render(<Root />);
        expect(document.querySelector('.root')).toBeInTheDocument();
    });

    it('renders Navbar component', async () => {
        render(<Root />);
        await act(async () => {
            await new Promise(resolve => setTimeout(resolve, 100));
        });
        expect(screen.getByTestId('navbar-mock')).toBeInTheDocument();
    });

    it('renders Start component', async () => {
        render(<Root />);
        await waitFor(() => {
            expect(document.querySelector('.start')).toBeInTheDocument();
        });
    });

    it('renders WhoAmI component', async () => {
        render(<Root />);
        await waitFor(() => {
            expect(document.querySelector('.who-am-i')).toBeInTheDocument();
        });
    });

    it('renders TechStack component', async () => {
        render(<Root />);
        await waitFor(() => {
            expect(document.querySelector('.tech-stack')).toBeInTheDocument();
        });
    });

    it('renders Coding component', async () => {
        render(<Root />);
        await waitFor(() => {
            expect(document.querySelector('.coding')).toBeInTheDocument();
        });
    });

    it('renders Technologies component', async () => {
        render(<Root />);
        await waitFor(() => {
            expect(document.querySelector('.technologies')).toBeInTheDocument();
        });
    });

    it('renders Footer component', async () => {
        render(<Root />);
        await waitFor(() => {
            expect(document.querySelector('.footer')).toBeInTheDocument();
        });
    });

    it('renders ScrollToTop component', async () => {
        render(<Root />);
        await act(async () => {
            await new Promise(resolve => setTimeout(resolve, 100));
        });
        expect(screen.getByTestId('scroll-to-top-mock')).toBeInTheDocument();
    });
});
