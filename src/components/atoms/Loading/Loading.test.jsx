import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Loading from './Loading';

describe('Loading ', () => {
    it('renders a loading ', () => {
        render(<Loading />);
        const loader = document.querySelector('.loader');
        expect(loader).toBeInTheDocument();
    });
});
