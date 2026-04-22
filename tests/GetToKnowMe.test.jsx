import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GetToKnowMe from '../src/components/get-to-know-me/GetToKnowMe';
import ButtonsContext from '../src/components/buttons-context/ButtonsContext';

vi.mock('../src/assets/assets', () => ({
    profilePicture: 'mock-profile.jpg'
}));

vi.mock('react-bootstrap-icons', () => ({
    X: ({ onClick }) => <button onClick={onClick}>X</button>
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

describe('GetToKnowMe', () => {
    it('renders without crashing', () => {
        renderWithContext(<GetToKnowMe imageHeight="100px" imageWidth="100px" />);
        expect(document.querySelector('.get-to-know-me')).toBeInTheDocument();
    });

    it('renders conoceme button', () => {
        renderWithContext(<GetToKnowMe imageHeight="100px" imageWidth="100px" />);
        expect(screen.getByRole('button', { name: /conóceme/i })).toBeInTheDocument();
    });

    it('opens profile picture window when button is clicked', async () => {
        const user = userEvent.setup();
        renderWithContext(<GetToKnowMe imageHeight="100px" imageWidth="100px" />);
        
        await user.click(screen.getByRole('button', { name: /conóceme/i }));
        expect(document.querySelector('.profile-picture-window-container')).toBeInTheDocument();
    });
});
