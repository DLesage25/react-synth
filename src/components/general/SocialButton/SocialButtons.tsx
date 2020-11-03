import React from 'react';
import { Grid } from '@material-ui/core';
import GitHubButton from 'react-github-btn';

const SocialButtons = () => {
    return (
        <Grid item xs={12}>
            <div
                style={{
                    float: 'right',
                    marginRight: '20px',
                    marginTop: '40px',
                }}
                data-testid="social-buttons"
            >
                <GitHubButton
                    href="https://github.com/dlesage25"
                    data-color-scheme="no-preference: light; light: light; dark: dark;"
                    aria-label="@dlesage25"
                    data-testid="socialbtn-profile"
                >
                    @dlesage25
                </GitHubButton>{' '}
                <GitHubButton
                    href="https://github.com/dlesage25/lydia"
                    data-color-scheme="no-preference: light; light: light; dark: dark;"
                    data-icon="octicon-star"
                    aria-label="Star dlesage25/lydia on GitHub"
                    data-testid="socialbtn-repo"
                >
                    Star
                </GitHubButton>
            </div>
        </Grid>
    );
};

export default SocialButtons;
