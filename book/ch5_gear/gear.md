# GEAR: Generative Evaluation of Audio Representations

## Motivation
-------------

Within the domain of machine listening, frameworks like the "Holistic Evaluation of Audio Representations" (HEAR) provide comprehensive methodologies for assessing statistical models across multiple machine listening tasks. While HEAR provides a uniform basis for comparison across deep learning models and datasets, direct interpretation in terms of audio signal processing remains elusive.

In this tutorial, we explore an evaluation approach within the Generative Evaluation of Audio Representations (GEAR) framework [2]. Here, the emphasis is on the generation of datasets comprising sounds characterized by a select number of independent factors of acoustic variability.

Using the Kymatio package, we explore the acoustic representation of amplitude and frequency modulated audio signals, with the motivation to understand and visualize the signal characteristics represented by scattering and time-frequency scattering transforms (as in [1]). We use this framework as a basis for comparing scattering transforms to other time-frequency and deep feature acoustic representations that are commonly used to evaluate audio generation systems and sound similarity.

## Task
-------
We will construct and embed a dataset of signals with the Isomap manifold embedding algorithm which, when effectively represented, should materialize as a mesh-like manifold, that suggests a linear correlation of its principal components with the parameters of the given sound synthesizer, hence exhibiting disentanglement of these acoustic properties.

We will implement two parametric synthesizers that produce complex tones:

1. an additive Fourier synthesizer, characterized by 3 parameters: fundamental frequency, Fourier decay (brightness) and odd-even harmonic ratio
2. a chirplet arpeggiator, described by 3 parameters: centre frequency, amplitude modulator rate, and exponential chirp rate

The first synthesizer has sustained pitch, with varying spectral shape that can simulate the tone of instruments such as flute or clarinet. The second synthesizer's frequency is non-stationary and contains amplitude modulations of varying rate. In both cases, it's trivial for the human auditory system to independently hear the similarities and differences between sounds varying in these 3 parameters.

Both synthesizers are implemented such that they have exactly 3 degrees of freedom and independent acoustic factors of variability. This make it possible to visualize the disentanglement of said parameters. We generate a dataset of signals for each synthesizer, spanning a 3D parameter grid. Then, we compute the manifold embedding of the nearest neighbor graph using the Isomap algorithm for a number of acoustic representations of the dataset:

1. Mel-frequency Cepstral Coefficients
2. Time Scattering
3. Time-Frequency Scattering
4. Open-L3 deep feature embeddings (music encoder)

We analyze the resemblance between the generated signals by mapping them onto a manifold embedding and evaluating the ability to reconstruct the synthesizer's parameters across various audio representations, including Mel-frequency cepstral coefficients (MFCCs), time scattering (Scattering1D), time-frequency scattering (JTFS), and OpenL3 embeddings.

By situating a paradigm akin to GEAR, we aim to highlight the distinctions and intricacies of various audio embeddings, deepening the understanding and capability to evaluate audio representations in the field of machine listening research.

## Synth
--
We design a sound synthesizer to generate a dataset of amplitude modulated chirp (AM/FM) signals, that is controlled by three parameters: carrier frequency ($f_c$, in Hz), amplitude modulation frequency ($f_m$, in Hz) and chirp rate ($\gamma$, in octaves/second).

These are an idealization of the types of modulations found in musical instrument playing techniques. 

We define a synthesizer $\boldsymbol{g}$ of exponential ``chirps'' with exactly three factors of variability: a carrier frequency $f_c$, an amplitude modulation (AM) frequency $f_m$, and a frequency modulation (FM) rate $\gamma$.
Denoting by $\boldsymbol{\theta}$ the triplet $(f_c, f_m, \gamma)$, we have for every $\boldsymbol{\theta}$:

$$
\begin{equation}
    \boldsymbol{g_\theta}: t\longmapsto
    \boldsymbol{\phi}_{w}(\gamma t)
    \sin(2\pi f_\mathrm{m} t)
    \sin\left(
    \dfrac{2\pi f_{\mathrm{c}}}{\gamma \log 2} 2^{\gamma t}
    \right)
\end{equation}
$$

To ensure that we can visualize these 3 factors of acoustic variability on a 3D manifold embedding, we normalize the energy of the signals. We restrict the bandwidth to exactly two octaves by varying the duration of a signal in inverse proportion to its chirp rate. This ensures that faster chirps do not cover a larger bandwidth over the same duration as a slow chirp.

We achieve this with $\boldsymbol{\phi}_{w}$, a Gaussian window of characteristic width equal to $w$.
The AM/FM signal $\boldsymbol{g_\theta}$ has an instantaneous frequency of $f_c 2^{\gamma t}$ and an essential duration of $w/\gamma$.
Thus, it covers a bandwidth $w$, independently from $\boldsymbol{\theta}$.

Importantly, in this task, there's a benefit to the physical interpretability of scattering transforms. 

We apply Eq. (\ref{eqn:synth}) for $16$ values of $f_c$, $f_m$, and $\gamma$, arranged in a geometric progression; hence yielding a dataset of $16^3=4096$ audio signals in total.
We vary $f_c$ between 512 Hz to 1024 Hz; $f_m$, between and 4 Hz to 32 Hz; and $\gamma$, between 0.5 and 4 octaves/second respectively.

## Isomap manifold embedding
----------------------------
To visualize similarity relationships between the AM/FM signals, we apply the Isomap algorithm for unsupervised dimensionality reduction \cite{tenenbaum2000global}.
Isomap assembles a geodesic distance matrix by using neighborhood relationships from high-dimensional Euclidean distances. We first compute the MFCCs, Scattering1D and JTFS coefficients, and OpenL3 embeddings over the dataset of AM/FM signals generated by $g$
To compute the nearest neighbor graph, we consider the 40 nearest neighbors for each transformed data point.
We select three components for the manifold visualization. The audio dataset described in Section \ref{sec:dataset} characterizes three independent degrees of freedom, therefore we postulate that Isomap will reveal whether the coordinates of an audio representation reflect similarities within the AM/FM signals. 

Fig. \ref{fig:isomaps}(b) and (c) show three-dimensional (3-D) visualizations of the Isomap embeddings for time scattering ($Q=1$) and time--frequency scattering ($Q=8$), respectively. In the case of both transformations and the application of Isomap manifold learning, the dataset of AM/FM signals is represented as a 3-D mesh where the principal components align independently with $f_c$, $f_m$ and $\gamma$. Both transformations with their respective hyperparameters are capable of disentangling and linearizing fundamental frequency, tremolo rate and chirp rate, which describe spectrotemporal modulation patterns. Fig. \ref{fig:isomaps}(c) visualizes the embedding for time scattering when $Q = 8$. In this case, we observe that time scattering lies on a 2-D manifold that adequately describes $f_c$ and $\gamma$, yet fails to account for similarity in $f_m$ due to the aforementioned reasons. Despite time scattering successfully disentangling the 3 factors of variability when $Q = 1$, other applications may demand a a greater quality factor in order to better localize in frequency.


## References
-------------
1. ["Differentiable Time-Frequency Scattering on GPU" by John Muradeli, Cyrus Vahidi, Changhong Wang, Han Han, Vincent Lostanlen, Mathieu Lagrange, George Fazekas](https://arxiv.org/abs/2204.08269)

2. ["From HEAR to GEAR: Generative Evaluation of Audio Representations" by Vincent Lostanlen, Lingyao Yan, Xianyi Yang](https://hal.science/hal-03979667/)