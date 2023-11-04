DTFA: Differentiable Time-Frequency Analysis
============================================

The advent of differentiable digital signal processing (DDSP) in music information retrieval has greatly advanced our ability to train neural networks on real-world audio with little or no supervision [1].
Since 2020, DDSP models have found fruitful applications in voice and instrument modelling, synthesizer control, pitch estimation, source separation, and parameter estimation.
We refer to [2] for a recent review of the state of the art in this domain.

A minimal DDSP model requires three operators: a deep neural network $f_W$, a synthesizer $g$, and a perceptual loss function $\mathcal{L}$.
The originality of the DDSP paradigm is that all operators should be differentiable so as to evaluate the gradient of $L$ with respect to neural network weights $W$.
Earlier at ISMIR 2023, tutorial 2 was devoted to the differentiable programming of an audio synthesizer $g$ for musical applications [3].
In this tutorial, we extend the scientific material of [3] by discussing the impact of the choice of loss function $\mathcal{L}$ on representation learning with DDSP.

For the sake of simplicity, we will not be training a deep neural network in this chapter.
Instead, we will solve a inverse problem of sound matching by gradient descent on the perceptual loss function, given synthetic audio data.
Within DDSP, this inverse problem typically corresponds to the deepest, non-trainable layer of backpropagation.
We propose to call this non-trainable layer "differentiable time–frequency analysis", or DTFA for short.

We point out some limitations of the most widespread loss function for DDSP to date; namely, multiscale spectrogram distance (MSS).
Specifically, we will see that, under MSS, the inverse problem solver is exposed to several issues: slow convergence, local minima, sensitivity to initialization, and sensitivity to time shifts between target and reconstruction.
In comparison, JTFS enables a fast convergence to the global optimum, thanks to its numerical stability and its the ability to integrate long-range dependencies over the time–frequency domain.

## References
-------------
1. ["DDSP: Differentiable Digital Signal Processing" by Jesse Engel, Lamtharn Hantrakul, Chenjie Gu, and Adam Roberts](https://arxiv.org/abs/2001.04643)
2. ["A Review of Differentiable Digital Signal Processing for Music \& Speech Synthesis" by Ben Hayes, Jordie Shier, György Fazekas, Andrew McPherson, and Charalampos Saitis](https://arxiv.org/abs/2308.15422)
3. ["Introduction to Differentiable Audio Synthesizer Programming" by Ben Hayes, Jordie Shier, Chin-Yun Yu, David Südhorn, and Rodrigo Diaz](https://ismir2023.ismir.net/tutorials/#2-introduction-to-differentiable-audio-synthesizer-programming)