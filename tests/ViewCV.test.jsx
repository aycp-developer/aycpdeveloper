import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ViewCV from '../src/components/view-cv/ViewCV';
import ButtonsContext from '../src/components/buttons-context/ButtonsContext';

vi.mock('../src/assets/assets', () => ({
    cvImage: 'mock-cv.jpg'
}));

vi.mock('react-bootstrap-icons', () => ({
    X: ({ onClick }) => <button onClick={onClick}>X</button>,
    ZoomIn: ({ onClick }) => <button onClick={onClick}>ZoomIn</button>,
    ZoomOut: ({ onClick }) => <button onClick={onClick}>ZoomOut</button>
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

describe('ViewCV', () => {
    it('renders without crashing', () => {
        renderWithContext(<ViewCV imageHeight="100px" imageWidth="100px" />);
        expect(document.querySelector('.view-cv')).toBeInTheDocument();
    });

    it('renders view cv button', () => {
        renderWithContext(<ViewCV imageHeight="100px" imageWidth="100px" />);
        expect(screen.getByRole('button', { name: /visualizar cv/i })).toBeInTheDocument();
    });

    it('opens cv window when button is clicked', async () => {
        const user = userEvent.setup();
        renderWithContext(<ViewCV imageHeight="100px" imageWidth="100px" />);
        
        await user.click(screen.getByRole('button', { name: /visualizar cv/i }));
        expect(document.querySelector('.cv-image-window-container')).toBeInTheDocument();
    });
});
