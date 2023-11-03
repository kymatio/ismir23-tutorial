# Differentiable digital signal processing


## Gradient descent in auditory feature space
---------------------------------------------

The emerging field of differentiable time–frequency analysis (DTFA) aims to construct a time--invariant operators $\boldsymbol{\Phi}$ whose Jacobian $\boldsymbol{\nabla\Phi}$ is useful for training neural audio models \cite{vahidi2023mesostructures}.
In recent years, DTFA has been composed with differentiable generators ($\boldsymbol{g}$) and deep neural networks (DNN) $\boldsymbol{f}_{\mathbf{W}}$ within the paradigm of differentiable digital signal processing (DDSP) [1].
For any given sound $\boldsymbol{x}$, DDSP seeks to train DNN weights $\mathbf{W}$ so that $(\boldsymbol{\Phi}\circ\boldsymbol{g}\circ\boldsymbol{f}_{\!\mathbf{W}})(\boldsymbol{x})$ is close to $\boldsymbol{\Phi}(\boldsymbol{x})$.
This is typically achieved by first-order optimization over an unlabeled training set $\mathcal{X} = \{\boldsymbol{x}_1 \ldots \boldsymbol{x}_N \}$ with the following loss function, known as *spectral loss*:

$\mathcal{L}^{\mathrm{sp}}_{\boldsymbol{x}_n}(\mathbf{W}) =\dfrac{1}{2} \big\Vert \!\left(\boldsymbol{\Phi} \circ \boldsymbol{g} \circ \boldsymbol{f}_{\!\mathbf{W}} \right) (\boldsymbol{x}_n)- \boldsymbol{\Phi}(\boldsymbol{x}_n)\big\Vert_2^2$

By the chain rule, the gradient of $\mathcal{L}^{\mathrm{sp}}_{\boldsymbol{x}_n}$ is:

$\boldsymbol{\nabla}\mathcal{L}^{\mathrm{sp}}_{\boldsymbol{x}_n}(\mathbf{W}) =
\left(\boldsymbol{\Phi}(\boldsymbol{\tilde{x}}_n) -\boldsymbol{\Phi}(\boldsymbol{x}_n)\right)^{\top}\boldsymbol{\nabla}(\boldsymbol{\Phi}\circ\boldsymbol{g})(\boldsymbol{\tilde{\theta}}_n)\dfrac{\partial \boldsymbol{f}_{\!\mathbf{W}}}{\partial \mathbf{W}}(\boldsymbol{x}_n),$
where $\boldsymbol{\tilde{\theta}}_n$ is a shorthand for $\boldsymbol{f}_{\!\mathbf{W}}(\boldsymbol{x}_n)$ and $\boldsymbol{\tilde{x}}_n$ is a shorthand for $\boldsymbol{g}(\boldsymbol{\tilde{\theta}}_n)$.

The equation above reveals the central role of the Jacobian matrix $\boldsymbol{\nabla}(\boldsymbol{\Phi}\circ\boldsymbol{g})(\boldsymbol{\tilde{\theta}}_n) = \boldsymbol{\nabla}\boldsymbol{\Phi}(\boldsymbol{\tilde{x}}_n) \boldsymbol{\nabla}\boldsymbol{g}(\boldsymbol{\tilde{\theta}}_n)$ in the learning dynamics of DDSP.
In particular, its null space spans the infinitesimal variations in $\boldsymbol{\tilde{\theta}}$ which have no effect on $\boldsymbol{\Phi}(\boldsymbol{\tilde{x}})$ whereas its image spans infinitesimal variations in $\boldsymbol{\Phi}(\boldsymbol{\tilde{x}})$ which are achievable from $\boldsymbol{\tilde{\theta}}$.
It follows that $\boldsymbol{\Phi}$ must be chosen carefully, even though it only serves at training time and not at test time.
Practically speaking, small Euclidean distances of the form $\Vert \boldsymbol{\Phi}(\boldsymbol{\tilde{x}}) - \boldsymbol{\Phi}(\boldsymbol{x})\Vert_2$ should correlate with dissimilarity judgments from human listeners.

## Multiscale spectrogram loss
------------------------------

As of today, the most commonly used DTFA operator in DDSP is the multi-scale spectrogram loss (MSS).
MSS concatenates the complex magnitudes of short-term Fourier transforms (STFT) whose window sizes are in a geometric progression.
The appeal behind MSS is that STFT magnitude coefficients are invariant to the phase of locally sinusoidal components, such as those present in music (i.e., sustained tones) and speech (vowels).
Furthermore, by resorting to multiple window sizes, MSS mitigates the tradeoff of time–frequency localization: small time lags (resp. frequency intervals) are best captured by short (resp. long) windows.
Hence, MSS offers a fine characterization of natural sounds while meeting the basic perceptual property of invariance to phase.
If $\boldsymbol{\tilde{x}}$ is such that $\mathrm{MSS}(\boldsymbol{\tilde{x}}) \approx \mathrm{MSS}(\boldsymbol{x})$, we may posit that human listeners will judge it as highly similar to $\boldsymbol{x}$.
However, the reciprocal is not true: in some cases, the reconstructed signal $\boldsymbol{\tilde{x}}$ is heard as similar to $\boldsymbol{x}$ yet $\mathrm{MSS}(\boldsymbol{\tilde{x}}) \neq \mathrm{MSS}(\boldsymbol{x})$, with an associated spectral loss $\mathcal{L}^{\mathrm{sp}}_{\boldsymbol{x}}$ of the order of $\Vert \mathrm{MSS}(\boldsymbol{x}) \Vert^2_2$.

## References
-------------
1. ["DDSP: Differentiable Digital Signal Processing" by Jesse Engel, Lamtharn Hantrakul, Chenjie Gu, and Adam Roberts](https://arxiv.org/abs/2001.04643)