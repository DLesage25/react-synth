import React from 'react';
import { cleanup, render } from '@testing-library/react';
import SocialButtons from './SocialButtons';

jest.mock('react-github-btn', () => ({
    __esModule: true,
    default: function GithubButton() {
        return <div data-testid="github-button"></div>;
    },
}));

describe('SocialButtons', () => {
    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    const renderSocialButtons = () => {
        const result = render(<SocialButtons />);
        return result;
    };

    describe('When component is mounted', () => {
        it('should render the social-buttons area', () => {
            const { queryByTestId } = renderSocialButtons();
            expect(queryByTestId('social-buttons')).toBeInTheDocument();
        });
        it('should render two github social buttons', () => {
            const { queryAllByTestId } = renderSocialButtons();
            expect(queryAllByTestId('github-button').length).toBe(2);
        });
    });
});
