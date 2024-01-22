import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { IconClockPlus } from '@tabler/icons-react';
import ButtonWithIcon from './ButtonWithIcon';

const mockOnClick = jest.fn();

describe('Button', () => {
    it('renders a button', () => {
        render(
            <ButtonWithIcon
                icon={<IconClockPlus color="green" />}
                onClick={() => mockOnClick()}
            />
        );

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
    });
    it('calls onClick when button is clicked', () => {
        render(
            <ButtonWithIcon
                icon={<IconClockPlus color="green" />}
                onClick={() => mockOnClick()}
            />
        );

        const button = screen.getByRole('button');

        fireEvent.click(button);

        expect(mockOnClick).toHaveBeenCalled();
    });
});
