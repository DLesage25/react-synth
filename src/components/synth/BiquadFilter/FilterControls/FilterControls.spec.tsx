import React from 'react';
import { cleanup, render } from '@testing-library/react';
import FilterControls from './FilterControls';
import '@testing-library/jest-dom';

describe('FilterControls', () => {
    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    const renderFilterControls = () => {
        const result = render(<FilterControls />);
        return result;
    };

    describe('When component is mounted', () => {
        it('should render filter frequency knob on the screen', () => {
            const { queryByTestId } = renderFilterControls();
            expect(queryByTestId('filter-frequency-knob')).toBeInTheDocument();
        });

        it('should render filter gain knob on the screen', () => {
            const { queryByTestId } = renderFilterControls();
            expect(queryByTestId('filter-gain-knob')).toBeInTheDocument();
        });
    });
});
