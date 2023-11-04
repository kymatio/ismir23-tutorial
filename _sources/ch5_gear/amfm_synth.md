AM/FM Chirp Dataset Generation
==============================
We design a parametric sound synthesizer to generate a dataset of amplitude modulated chirp (AM/FM) signals, that is controlled by three parameters: carrier frequency ($f_c$, in Hz), amplitude modulation frequency ($f_m$, in Hz) and chirp rate ($\gamma$, in octaves/second).

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

To ensure that we can visualize these 3 factors of acoustic variability on a 3D manifold embedding, we normalize the energy of the signals. 

We restrict the bandwidth to exactly two octaves by varying the duration of a signal in inverse proportion to its chirp rate. This ensures that faster chirps do not cover a larger bandwidth over the same duration as a slow chirp.

We achieve this with $\boldsymbol{\phi}_{w}$, a Gaussian window of characteristic width equal to $w$.

The AM/FM signal $\boldsymbol{g_\theta}$ has an instantaneous frequency of $f_c 2^{\gamma t}$ and an essential duration of $w/\gamma$.
Thus, it covers a bandwidth $w$, independently from $\boldsymbol{\theta}$.

Importantly, in this task, there's a benefit to the physical interpretability of scattering transforms. 

We apply Eq. (\ref{eqn:synth}) for $16$ values of $f_c$, $f_m$, and $\gamma$, arranged in a geometric progression; hence yielding a dataset of $16^3=4096$ audio signals in total.

We vary $f_c$ between 512 Hz to 1024 Hz; $f_m$, between and 4 Hz to 32 Hz; and $\gamma$, between 0.5 and 4 octaves/second respectively.