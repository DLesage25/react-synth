export default (width: number, height: number, analyser: AnalyserNode) => {
    let drawVisual;

    const init = () => {
        const canvas = document.querySelector(
            '.visualizer'
        ) as HTMLCanvasElement;
        const canvasCtx = canvas ? canvas.getContext('2d') : null;

        if (!canvasCtx) return true;

        const WIDTH = width;
        const HEIGHT = height;

        canvasCtx.fillStyle = 'rgb(87, 75, 144)';
        canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

        if (!analyser) return true;

        analyser.fftSize = 2048;
        const bufferLength = analyser.fftSize;
        const dataArray = new Uint8Array(bufferLength);

        canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

        const draw = function () {
            drawVisual = requestAnimationFrame(draw);

            analyser.getByteTimeDomainData(dataArray);

            canvasCtx.fillStyle = 'rgb(87, 75, 144)';
            canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

            canvasCtx.lineWidth = 2;
            canvasCtx.strokeStyle = 'rgb(225, 95, 65)';

            canvasCtx.beginPath();

            const sliceWidth = (WIDTH * 1.0) / bufferLength;
            let x = 0;

            for (let i = 0; i < bufferLength; i++) {
                const v = dataArray[i] / 128.0;
                const y = (v * HEIGHT) / 2;

                if (i === 0) {
                    canvasCtx.moveTo(x, y);
                } else {
                    canvasCtx.lineTo(x, y);
                }

                x += sliceWidth;
            }

            canvasCtx.lineTo(canvas.width, canvas.height / 2);
            canvasCtx.stroke();
        };
        draw();
    };
    init();
};
