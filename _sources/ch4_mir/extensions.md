Extensions
==========

There are various avenues for future experimentation with hybrid scattering convnets. 
In this tutorial, we only explored 1D convnets along time. 
Time-frequency scattering in Kymatio offers the `"joint"` output format, which is indexed by `(path, frequency, time)`. 
Therefore we can do 2D convolutions in the time-frequency domain, where the joint time-frequency scattering paths
serve as input channels to the convnet.
This was shown to be effective for classification of musical instrument solos with limited annotated data [1].
We did not explore the effectiveness of log-compression and mean normalization of scattering paths as was shown in [1] and [2].
We could explore joint classification of musical instrument and playing technique.
Various recent works have modelled human perception of similarity between sounds at the level of expressive playing techniques [2], [3]. 

References
----------
1. Vahidi, Cyrus, et al. "Differentiable Time-Frequency Scattering On GPU." arXiv preprint arXiv:2204.08269 (2022).
2. Lostanlen, Vincent, et al. "Time–frequency scattering accurately models auditory similarities between instrumental playing techniques." EURASIP Journal on Audio, Speech, and Music Processing 2021.1 (2021): 1-21. 
3. Vahidi, Cyrus, et al. "Perceptual musical similarity metric learning with graph neural networks." 2023 IEEE Workshop on Applications of Signal Processing to Audio and Acoustics (WASPAA). IEEE, 2023.