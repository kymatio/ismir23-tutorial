GEAR: Generative Evaluation of Audio Representations
=====================================================

Motivation
-------------

Within the domain of machine listening, frameworks like the "Holistic Evaluation of Audio Representations" (HEAR) provide comprehensive methodologies for assessing statistical models across multiple machine listening tasks. 
While HEAR provides a uniform basis for comparison across deep learning models and datasets, direct interpretation in terms of audio signal processing remains elusive.

In this tutorial, we explore an evaluation approach within the Generative Evaluation of Audio Representations (GEAR) framework [2]. 
Here, the emphasis is on the generation of datasets comprising sounds characterized by a select number of independent factors of acoustic variability.

Using the Kymatio package, we explore the acoustic representation of amplitude and frequency modulated audio signals, with the motivation to understand and visualize the signal characteristics represented by scattering and time-frequency scattering transforms. 
This experiment was outlined in [1].
We use this framework as a basis for comparing scattering transforms to other time-frequency and deep feature acoustic representations that are commonly used to evaluate audio generation systems and sound similarity.

Task
-------
We will construct and embed a dataset of signals with the Isomap manifold embedding algorithm which, when effectively represented, should materialize as a mesh-like manifold, that suggests a linear correlation of its principal components with the parameters of the given sound synthesizer, hence exhibiting disentanglement of these acoustic properties.

We will implement two parametric synthesizers that produce complex tones:

1. an additive Fourier synthesizer, characterized by 3 parameters: fundamental frequency, Fourier decay (brightness) and odd-even harmonic ratio
2. a chirplet arpeggiator, described by 3 parameters: centre frequency, amplitude modulator rate, and exponential chirp rate

The first synthesizer has sustained pitch, with varying spectral shape that can simulate the tone of instruments such as flute or clarinet. 
The second synthesizer's frequency is non-stationary and contains amplitude modulations of varying rate. 
In both cases, it's trivial for the human auditory system to independently hear the similarities and differences between sounds varying in these 3 parameters.

Both synthesizers are implemented such that they have exactly 3 degrees of freedom and independent acoustic factors of variability. 
This make it possible to visualize the disentanglement of said parameters. 
We generate a dataset of signals for each synthesizer, spanning a 3D parameter grid. 
Then, we compute the manifold embedding of the nearest neighbor graph using the Isomap algorithm for a number of acoustic representations of the dataset:

1. Mel-frequency Cepstral Coefficients
2. Time Scattering
3. Time-Frequency Scattering
4. Open-L3 deep feature embeddings (music encoder)

We analyze the resemblance between the generated signals by mapping them onto a manifold embedding and evaluating the ability to reconstruct the synthesizer's parameters across various audio representations, including Mel-frequency cepstral coefficients (MFCCs), time scattering (Scattering1D), time-frequency scattering (JTFS), and OpenL3 embeddings.

By situating a paradigm akin to GEAR, we aim to highlight the distinctions and intricacies of various audio embeddings, deepening the understanding and capability to evaluate audio representations in the field of machine listening research.

References
-------------
1. ["Differentiable Time-Frequency Scattering on GPU" by John Muradeli, Cyrus Vahidi, Changhong Wang, Han Han, Vincent Lostanlen, Mathieu Lagrange, George Fazekas](https://arxiv.org/abs/2204.08269)

2. ["From HEAR to GEAR: Generative Evaluation of Audio Representations" by Vincent Lostanlen, Lingyao Yan, Xianyi Yang](https://hal.science/hal-03979667/)