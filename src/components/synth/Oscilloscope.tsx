import React, { useRef, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import sinewaveOscilloscope from 'modules/oscilloscope/sinewaveOscilloscope';

interface canvasRef extends HTMLCanvasElement {}

const Oscilloscope = ({ analyser, key }: { analyser: any; key: string }) => {
    let canvasRef = useRef<canvasRef>(null);

    useEffect(() => {
        if (analyser) sinewaveOscilloscope(640, 100, analyser);
    }, [key]);
    return (
        <Grid item container xs={10} style={{ marginBottom: '20px' }}>
            <Grid
                item
                container
                justify="center"
                xs={12}
                style={{ display: 'flex' }}
            >
                <canvas
                    className="visualizer"
                    width="640"
                    height="100"
                    ref={canvasRef}
                ></canvas>
            </Grid>
        </Grid>
    );
};

export default Oscilloscope;
