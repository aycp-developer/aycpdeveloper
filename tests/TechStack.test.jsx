import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TechStack from '../src/routes/tech-stack/TechStack';

vi.mock('../src/exports/exports', () => ({
    DynamicText: () => <span>DynamicText</span>
}));

vi.mock('../src/assets/assets', () => ({
    frontend: 'mock-frontend.png',
    backend: 'mock-backend.png'
}));

describe('TechStack', () => {
    it('renders tech-stack container', () => {
        render(<TechStack />);
        expect(document.querySelector('.tech-stack')).toBeInTheDocument();
    });

    it('renders Tech Stack title', () => {
        render(<TechStack />);
        expect(screen.getByText('Tech Stack')).toBeInTheDocument();
    });

    it('renders paragraph about tech stack', () => {
        render(<TechStack />);
        expect(screen.getByText(/Mi pila tecnológica preferida/)).toBeInTheDocument();
    });

    it('renders frontend and backend images', () => {
        render(<TechStack />);
        const images = screen.getAllByRole('img');
        expect(images.length).toBe(2);
    });

    it('renders DynamicText component', () => {
        render(<TechStack />);
        expect(screen.getByText('DynamicText')).toBeInTheDocument();
    });

    it('frontend image is selected by default', () => {
        render(<TechStack />);
        const frontendImg = document.querySelector('.frontend');
        expect(frontendImg).toHaveStyle({ position: 'absolute' });
    });

    it('toggles image selection on click', async () => {
        const user = userEvent.setup();
        render(<TechStack />);
        
        const backendImg = document.querySelector('.backend');
        await user.click(backendImg);
        
        expect(backendImg).toHaveStyle({ position: 'absolute' });
    });
});
