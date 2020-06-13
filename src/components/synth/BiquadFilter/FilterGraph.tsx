import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'react-vis/dist/style.css';
import { SynthState } from '../../../store/types';
import {
    XYPlot,
    VerticalGridLines,
    HorizontalGridLines,
    XAxis,
    YAxis,
    LineSeries,
} from 'react-vis';

const getGraphData = (gain: number, frequency: number) => {
    const data = [
        { x: 0, y: 0 },
        { x: 1000, y: 0 },
        { x: 2000, y: 0 },
        { x: 3000, y: 0 },
        { x: 4000, y: 0 },
        { x: 5000, y: 0 },
        { x: 6000, y: 0 },
        { x: 7000, y: 0 },
        { x: 8000, y: 0 },
        { x: 9000, y: 0 },
        { x: 10000, y: 0 },
        { x: 11000, y: 0 },
        { x: 12000, y: 0 },
        { x: 13000, y: 0 },
        { x: 14000, y: 0 },
        { x: 15000, y: 0 },
        { x: 16000, y: 0 },
        { x: 17000, y: 0 },
        { x: 18000, y: -3 },
        { x: 19000, y: -6 },
        { x: 20000, y: -10 },
    ];

    const processedData = data.filter((e) => e.x <= frequency);

    processedData.forEach((filterNode: any) => {
        if (filterNode.x === frequency) filterNode.y = gain;
        //add further processing here
    });

    if (gain > -10 && frequency < 19000)
        processedData.push({ x: frequency + 1000, y: -10 });

    return processedData;
};

const FilterGraph = () => {
    const { gain, frequency } = useSelector(
        (state: SynthState) => state.filter
    );

    const [graphData, setGraphData] = useState(getGraphData(gain, frequency));

    useEffect(() => {
        setGraphData(getGraphData(gain, frequency));
    }, [gain, frequency]);

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
            <LineSeries
                data={graphData}
                curve={'curveMonotoneX'}
                color="#e67e22"
            />
        </XYPlot>
    );
};

export default FilterGraph;
