import React, { useRef, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import sinewaveOscilloscope from 'modules/oscilloscope/sinewaveOscilloscope';
import { useKeysPress } from '../../hooks';

interface canvasRef extends HTMLCanvasElement {}

const Oscilloscope = ({ analyser }: { analyser: any }) => {
    let canvasRef = useRef<canvasRef>(null);
    const [key] = useKeysPress();

    console.log({ analyser });

    useEffect(() => {
        if (analyser) {
            // if (canvasRef.current) {
            //     let canvasContext = canvasRef.current.getContext('2d');
            // }
            sinewaveOscilloscope(640, 100, analyser);
        }
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
