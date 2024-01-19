import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('input', () => {
    it('renders a Input', () => {
        render(<Input />);

        const input = screen.getByRole('textbox');

        expect(input).toBeInTheDocument();
    });
});
