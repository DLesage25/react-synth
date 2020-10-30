import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Oscilloscope, { OscilloscopeProps } from './Oscilloscope';
import '@testing-library/jest-dom';

jest.mock('modules/oscilloscope/sinewaveOscilloscope', () => ({
    __esModule: true,
    default: jest.fn().mockReturnValue(true),
}));

describe('Oscilloscope', () => {
    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    const renderOscilloscope = (props: OscilloscopeProps) => {
        const result = render(<Oscilloscope {...props} />);
        return result;
    };

    describe('When component is mounted w/o keypress', () => {
        it('should render oscilloscope to the screen', () => {
            const { queryByTestId } = renderOscilloscope({
                analyser: {} as AnalyserNode,
                keyPressed: undefined,
            });
            expect(queryByTestId('oscilloscope')).toBeInTheDocument();
        });
        it('should show entry message', () => {
            const { queryByTestId } = renderOscilloscope({
                analyser: {} as AnalyserNode,
                keyPressed: undefined,
            });
            expect(queryByTestId('intro-message')).toBeInTheDocument();
        });
    });

    describe('When component is mounted with keypress', () => {
        it('should render oscilloscope to the screen', () => {
            const { queryByTestId } = renderOscilloscope({
                analyser: {} as AnalyserNode,
                keyPressed: 'a',
            });
            expect(queryByTestId('oscilloscope')).toBeInTheDocument();
        });
        it('should show oscilloscope visualizer', () => {
            const { queryByTestId } = renderOscilloscope({
                analyser: {} as AnalyserNode,
                keyPressed: 'a',
            });
            expect(
                queryByTestId('oscilloscope-visualizer')
            ).toBeInTheDocument();
        });
    });
});
