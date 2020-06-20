export default (
    // canvasContext: CanvasRenderingContext2D,
    width: number,
    height: number,
    analyser: AnalyserNode
) => {
    const canvas = document.querySelector('.visualizer') as HTMLCanvasElement;
    const canvasContext = canvas ? canvas.getContext('2d') : null;

    if (canvasContext) {
        canvasContext.clearRect(0, 0, width, height);
        let drawVisual;

        console.log({ analyser });

        draw(canvasContext, width, height, analyser, drawVisual, canvas);
    }
};

const draw = (
    canvasContext: CanvasRenderingContext2D,
    width: number,
    height: number,
    analyser: AnalyserNode,
    drawVisual: any,
    canvas: any
) => {
    var bufferLength = analyser.fftSize;
    var dataArray = new Uint8Array(bufferLength);

    // @ts-ignore
    // drawVisual = requestAnimationFrame(draw);

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
