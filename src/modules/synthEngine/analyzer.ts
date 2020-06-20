export default class Analyzer {
    public initialize = (context: AudioContext) => {
        const analyser = context.createAnalyser();
        analyser.minDecibels = -90;
        analyser.maxDecibels = -10;
        analyser.smoothingTimeConstant = 0.85;
        analyser.fftSize = 2048;
        return analyser;
    };
}
