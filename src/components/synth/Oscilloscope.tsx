import React, { useRef, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import sinewaveOscilloscope from 'modules/oscilloscope/sinewaveOscilloscope';

interface canvasRef extends HTMLCanvasElement {}

const CANVAS_WIDTH = 1040;
const CANVAS_HEIGHT = 150;

const Oscilloscope = ({
    analyser,
    keyPressed,
}: {
    analyser: any;
    keyPressed: string;
}) => {
    let canvasRef = useRef<canvasRef>(null);

    useEffect(() => {
        sinewaveOscilloscope(CANVAS_WIDTH, CANVAS_HEIGHT, analyser);
    }, [keyPressed, analyser]);
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
                    width={CANVAS_WIDTH}
                    height={CANVAS_HEIGHT}
                    ref={canvasRef}
                ></canvas>
            </Grid>
        </Grid>
    );
};

export default Oscilloscope;
