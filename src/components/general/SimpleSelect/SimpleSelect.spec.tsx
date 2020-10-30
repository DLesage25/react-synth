import React from 'react';
import { cleanup, render } from '@testing-library/react';
import SimpleSelect, { SimpleSelectProps } from './SimpleSelect';
import '@testing-library/jest-dom';

describe('SimpleSelect', () => {
    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    const renderContinuousSlider = () => {
        const defaultProps: SimpleSelectProps = {
            title: '',
            value: 1,
            handleChange: () => {},
            items: [{ name: 'item1', value: 1 }],
        };
        const result = render(<SimpleSelect {...defaultProps} />);
        return result;
    };

    describe('When component is mounted', () => {
        it('should render simple select on the screen', () => {
            const { queryByTestId } = renderContinuousSlider();
            expect(queryByTestId('simple-select')).toBeInTheDocument();
        });
    });
});
