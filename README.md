### React-Synth

A React-based monophonic synthetizer built on top of the [WebAudio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API). 

React-Synth is aimed at being a fun synth, and also a proof-of-concept for the capacity and functionality behind some of the new WebAudio nodes available.

Demo available at [lydia.daniellesage.com](https://lydia.daniellesage.com).


#### Overview

Features:
- Multi-waveform oscillator with gain, detune, and frequency controls
- Biquadratic 4-pole filter, with Q and Frequency controls. Can be adjusted to Lowpass, Highpass, and Bandpass.
- Panning controls
- Sinewave Oscilloscope 
- Convolution reverb (soon)
- Compression (soon)

React-Synth utilizes various WebAudio components, namely:

-   [OscillatorNodes](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode) for generating sound
-   [AudioNode](https://developer.mozilla.org/en-US/docs/Web/API/AudioNode) for modulating volume and gain
-   [BiquadFilter](https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode) for generating audio filters, and eventually graphic equalizers
-   [StereoPannerNode](https://developer.mozilla.org/en-US/docs/Web/API/StereoPannerNode) for panning
-   [AnalyzerNode](https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode) for generating an oscilloscope
-   [ConvolverNode](https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode) for generating convolution reverbs using default or user-uploaded wav files
-   [DynamicsCompressorNode](https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode) for compression and dynamics

#### Installation

React-Synth uses Node v10.

1. `npm i`
2. `npm start`

Voilah!
