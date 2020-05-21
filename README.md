### Lydia

A monophonic synthetizer that utilizes the [WebAudio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API).

##### Overview

Lydia is built on ReactJS and Typescript, and utilizes various WebAudio components, namely:

-   [OscillatorNodes](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode) for generating sound
-   [AudioNode](https://developer.mozilla.org/en-US/docs/Web/API/AudioNode) for modulating volume and gain
-   [BiquadFilter](https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode) for generating audio filters, and eventually graphic equalizers
-   [StereoPannerNode](https://developer.mozilla.org/en-US/docs/Web/API/StereoPannerNode) for panning
-   [AnalyzerNode](https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode) for generating an oscilloscope
-   [ConvolverNode](https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode) for generating convolution reverbs using default or user-uploaded wav files

Lydia is aimed at being both a fun synth, and also a proof-of-concept for the capacity and functionality behind some of the new WebAudio nodes available.

##### Installation

Lydia uses Node v10.

1. Clone the repo - `git clone <repoURL>`
2. Install dependencies - `npm i`
3. Run - `npm start`
