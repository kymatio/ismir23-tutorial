DTFA: Differentiable Time-Frequency Analysis
============================================

The advent of differentiable digital signal processing (DDSP) in music information retrieval has greatly advanced our ability to train neural networks on real-world audio with little or no supervision [1].
Since 2020, DDSP models have found fruitful applications in voice and instrument modelling, synthesizer control, pitch estimation, source separation, and parameter estimation.
We refer to [2] for a recent review of the state of the art in this domain.

A minimal DDSP model requires three operators: a deep neural network $f_W$, a synthesizer $g$, and a perceptual loss function $\mathcal{L}$.
The originality of the DDSP paradigm is that all operators should be differentiable so as to evaluate the gradient of $L$ with respect to neural network weights $W$.
Earlier at ISMIR 2023, tutorial 2 was devoted to the differentiable programming of an audio synthesizer $g$ for musical applications [3].
In this tutorial, we extend the scientific material of [3] by discussing the impact of the choice of loss function $\mathcal{L}$ on representation learning with DDSP.
More specifically, we point out some limitations of the most widespread loss function for DDSP to date; namely, multiscale spectrogram distance (MSS).
We show that replacing MSS by JTFS can help mitigate these limitations, thanks to the ability of JTFS to integrate long-range dependencies over the time–frequency domain.


## References
-------------
1. ["DDSP: Differentiable Digital Signal Processing" by Jesse Engel, Lamtharn Hantrakul, Chenjie Gu, and Adam Roberts](https://arxiv.org/abs/2001.04643)
2. ["A Review of Differentiable Digital Signal Processing for Music \& Speech Synthesis" by Ben Hayes, Jordie Shier, György Fazekas, Andrew McPherson, and Charalampos Saitis](https://arxiv.org/abs/2308.15422)
3. ["Introduction to Differentiable Audio Synthesizer Programming" by Ben Hayes, Jordie Shier, Chin-Yun Yu, David Südhorn, and Rodrigo Diaz](https://ismir2023.ismir.net/tutorials/#2-introduction-to-differentiable-audio-synthesizer-programming)