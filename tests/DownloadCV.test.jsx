import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import DownloadCV from '../src/components/download-cv/DownloadCV';
import ButtonsContext from '../src/components/buttons-context/ButtonsContext';

vi.mock('../src/assets/assets', () => ({
    cvImage: 'mock-cv.jpg'
}));

vi.mock('file-saver', () => ({
    saveAs: vi.fn()
}));

const mockContextValue = {
    buttonsState: { buttonsState: false },
    buttonsDispatch: vi.fn()
};

const renderWithContext = (component) => {
    return render(
        <ButtonsContext.Provider value={mockContextValue}>
            {component}
        </ButtonsContext.Provider>
    );
};

describe('DownloadCV', () => {
    it('renders without crashing', () => {
        renderWithContext(<DownloadCV />);
        expect(document.querySelector('.download-cv')).toBeInTheDocument();
    });

    it('renders download button', () => {
        renderWithContext(<DownloadCV />);
        expect(document.querySelector('button')).toBeInTheDocument();
    });
});
