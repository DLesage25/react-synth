import React, { useRef, useEffect } from 'react';
import { Grid } from '@material-ui/core';

interface canvasRef extends HTMLCanvasElement {}

const Oscilloscope = ({ synthEngine }: { synthEngine: any }) => {
    let canvasRef = useRef<canvasRef>(null);

    // useEffect(() => {
    //     if (canvasRef.current) {
    //         let canvasContext = canvasRef.current.getContext('2d');
    //     }
    // }, []);
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
