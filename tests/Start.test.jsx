import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Start from '../src/routes/start/Start';

vi.mock('../src/exports/exports.js', () => ({
    ButtonsContext: {
        Provider: ({ children }) => children
    },
    WordChanger: () => <span data-testid="word-changer">WordChanger</span>,
    DynamicText: ({ strings }) => <span data-testid="dynamic-text">{strings}</span>,
    ViewCV: () => <div data-testid="viewcv">ViewCV</div>,
    DownloadCV: () => <div data-testid="downloadcv">DownloadCV</div>,
    GetToKnowMe: () => <div data-testid="gettoknowme">GetToKnowMe</div>
}));

describe('Start', () => {
    it('renders start container', () => {
        render(<Start />);
        expect(document.querySelector('.start')).toBeInTheDocument();
    });

    it('renders titles container', () => {
        render(<Start />);
        expect(document.querySelector('.titles-container')).toBeInTheDocument();
    });

    it('renders welcome message', () => {
        render(<Start />);
        expect(screen.getByText(/¡Hola, me llamo Alexander Yosimar/)).toBeInTheDocument();
    });

    it('renders WordChanger component', () => {
        render(<Start />);
        expect(screen.getByTestId('word-changer')).toBeInTheDocument();
    });

    it('renders buttons container', () => {
        render(<Start />);
        expect(document.querySelector('.buttons-container')).toBeInTheDocument();
    });

    it('renders ViewCV component', () => {
        render(<Start />);
        expect(screen.getByTestId('viewcv')).toBeInTheDocument();
    });

    it('renders GetToKnowMe component', () => {
        render(<Start />);
        expect(screen.getByTestId('gettoknowme')).toBeInTheDocument();
    });

    it('renders DownloadCV component', () => {
        render(<Start />);
        expect(screen.getByTestId('downloadcv')).toBeInTheDocument();
    });

    it('renders DynamicText component', () => {
        render(<Start />);
        expect(screen.getByTestId('dynamic-text')).toBeInTheDocument();
    });
});
