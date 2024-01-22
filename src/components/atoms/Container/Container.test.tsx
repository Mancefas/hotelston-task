import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Container from './Container';

describe('Container', () => {
    it('renders a Container', () => {
        render(
            <Container>
                <p>some text</p>
            </Container>
        );

        const container = document.querySelector('.container');
        expect(container).toBeInTheDocument();
    });
});
