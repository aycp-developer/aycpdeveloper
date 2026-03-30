import { describe, it, expect } from 'vitest';
import ButtonsContext from '../src/components/buttons-context/ButtonsContext';

describe('ButtonsContext', () => {
    it('creates a context', () => {
        expect(ButtonsContext).toBeDefined();
    });

    it('is a React context', () => {
        expect(ButtonsContext).toHaveProperty('Provider');
        expect(ButtonsContext).toHaveProperty('Consumer');
    });
});
