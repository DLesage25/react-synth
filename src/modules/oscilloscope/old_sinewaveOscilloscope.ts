export default (
    // canvasContext: CanvasRenderingContext2D,
    width: number,
    height: number,
    analyser: AnalyserNode
) => {
    const canvas = document.querySelector('.visualizer') as HTMLCanvasElement;
    const canvasContext = canvas ? canvas.getContext('2d') : null;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyser.getByteTimeDomainData(dataArray);

    if (canvasContext && analyser) {
        canvasContext.clearRect(0, 0, width, height);
        let drawVisual;

        draw(
            canvasContext,
            width,
            height,
            analyser,
            drawVisual,
            canvas,
            bufferLength,
            dataArray
        );
    }
};

const draw = (
    canvasContext: CanvasRenderingContext2D,
    width: number,
    height: number,
    analyser: AnalyserNode,
    drawVisual: any,
    canvas: any,
    bufferLength: any,
    dataArray: any
) => {
    // @ts-ignore
    drawVisual = requestAnimationFrame(() =>
        draw(
            canvasContext,
            width,
            height,
            analyser,
            drawVisual,
            canvas,
            bufferLength,
            dataArray
        )
    );

    analyser.getByteTimeDomainData(dataArray);

    canvasContext.fillStyle = 'rgb(200, 200, 200)';
    canvasContext.fillRect(0, 0, width, height);

    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'rgb(0, 0, 0)';

    canvasContext.beginPath();

    var sliceWidth = (width * 1.0) / bufferLength;
    var x = 0;

    for (var i = 0; i < bufferLength; i++) {
        var v = dataArray[i] / 128.0;
        var y = (v * height) / 2;

        if (i === 0) {
            canvasContext.moveTo(x, y);
        } else {
            canvasContext.lineTo(x, y);
        }

        x += sliceWidth;
    }

    canvasContext.lineTo(width, height / 2);
    canvasContext.stroke();
};
