import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from '../Button';

describe('Button component', () => {
    it('should render text', () => {
        render(Button());

        expect(screen.getByText(/Button/i)).toMatchInlineSnapshot();
    });
});