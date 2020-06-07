import React from 'react';

import 'react-vis/dist/style.css';
import {
    XYPlot,
    VerticalGridLines,
    HorizontalGridLines,
    XAxis,
    YAxis,
    LineSeries,
} from 'react-vis';

const FilterGraph = () => {
    const data = [
        { x: 0, y: 0 },
        { x: 2000, y: 0 },
        { x: 4000, y: 0 },
        { x: 6000, y: 0 },
        { x: 8000, y: 0 },
        { x: 10000, y: 0 },
        { x: 12000, y: 0 },
        { x: 14000, y: 0 },
        { x: 16000, y: 0 },
        { x: 18000, y: -5 },
        { x: 20000, y: -10 },
    ];

    return (
        <XYPlot
            height={100}
            width={220}
            xDomain={[20, 20000]}
            yDomain={[-10, 10]}
        >
            <XAxis
                tickFormat={(v) => `${v / 1000}K Hz`}
                style={{ stroke: '#fcfcfc' }}
            />
            <YAxis style={{ stroke: '#fcfcfc' }} />
            <VerticalGridLines />
            <HorizontalGridLines />
            <LineSeries data={data} curve={'curveMonotoneX'} color="#e67e22" />
        </XYPlot>
    );
};

export default FilterGraph;
