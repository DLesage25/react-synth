import React from 'react';
import { cleanup, render } from '@testing-library/react';
import FrequencyControl from './FrequencyControl';
import '@testing-library/jest-dom';
import { useSelector, useDispatch } from 'react-redux';

const mockedSelector = useSelector as jest.Mock<any>;
const mockedDispatch = useDispatch as jest.Mock<any>;

describe('FrequencyControl', () => {
    let result;

    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    beforeEach(async () => {
        mockedSelector.mockImplementation((selectorFn: any) =>
            selectorFn({
                synth: {
                    masterGain: 1,
                },
            })
        );
        mockedDispatch.mockReturnValue(jest.fn());
    });

    const renderFrequencyControl = () => {
        const result = render(<FrequencyControl />);
        return result;
    };

    describe('When component is mounted', () => {
        it('should render knob on the screen', () => {
            const { queryByTestId } = renderFrequencyControl();
            expect(queryByTestId('knob-frequency')).toBeInTheDocument();
        });
    });
});
