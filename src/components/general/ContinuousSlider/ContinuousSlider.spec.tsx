import React from 'react';
import { cleanup, render } from '@testing-library/react';
import ContinuousSlider, { SliderProps } from './ContinuousSlider';
import '@testing-library/jest-dom';

describe('ContinuousSlider', () => {
    let result;

    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    const renderContinuousSlider = () => {
        const defaultProps: SliderProps = {
            title: '',
            imageSrc: '',
            minIcon: '',
            maxIcon: '',
            max: 1,
            min: 0,
            value: 0,
            handleChange: () => {},
        };
        const result = render(<ContinuousSlider {...defaultProps} />);
        return result;
    };

    describe('When component is mounted', () => {
        it('should render slider on the screen', () => {
            const { queryByTestId } = renderContinuousSlider();
            expect(queryByTestId('continuous-slider')).toBeInTheDocument();
        });
    });
});
