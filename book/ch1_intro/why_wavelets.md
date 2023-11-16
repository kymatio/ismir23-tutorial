# Why use wavelets in music information retrieval?

The modern theory of wavelets dates back to the 1980s, with wide industrial applications as soon as the 1990s.
In comparison, the renewed interest for deep learning is more recent: around the year 2012 in speech and image processing and at ISMIR a few years later.
Today, some of the most foundational elements of the standard MIR toolkit may involve wavelets, with CQT and chroma features being noteworthy examples.
However, these tools are no longer considered as original contributions.
Instead, current publications tend to take them for granted and apply them as preprocessing blocks to a deep neural network architecture.

As members of the Kymatio consortium, we recognize the value of end-to-end learning in its applications to music signal processing.
Long-standing MIR tasks such as automatic chord estimation and downbeat tracking have undoubtedly made great progress since the replacement of feature engineering by feature learning.
At the same time, the past decade has shown that wavelets are still relevant in scientific research; not so much in their own right but by producing fruitful interactions with machine learning models.
In this section, we outline five such modes of interaction:
1. Learning with limited labeled data
2. Physical interpretability
3. Biological plausibility
4. Artistic creation
5. Mathematical understanding


## 1. For learning with limited labeled data
--------------------------------------------
Under a supervised regime, deep neural networks require a large amount of labeled data to produce generalizable representations of audio.
Since the annotation of music is a tedious process, the adoption of deep learning in MIR is costly and time-consuming.
This is particularly true in under-appreciated areas of MIR, such as non-Western corpora and expert taxonomies for digital humanities.
Certainly, recent advances in self-supervised learning (SSL) have opened the possibility of developing application-agnostic, "foundation" models from large amounts of unlabeled data.
However, the current state of the art in SSL for audio processing is unable to transfer to fine-grained applications; e.g., the classification of instrumental playing techniques (IPT), as we will see in chapter 3.
Furthermore, SSL models which rely on audiovisual correspondence, such as Open-L3, lack a "common-sensical" understanding of musical acoustics, in the sense that they misrepresent variations in fundamental frequency or tempo [1].
Chapter 4 will evaluate the abilities of Open-L3 for unsupervised learning of the factors of variability underlying a synthetic data, and show that these abilities remain below those of scattering transforms, a wavelet-based representation which requires no pre-training stage.


## 2. For physical interpretability
-----------------------------------
A well-known shortcoming of deep neural networks is that their activations are difficult to interpret beyond the first layer.
Although this is not necessarily a concern for MIR products, it does hamper the ability of neural networks to advance scientific knowledge in musical acoustics and digital humanities.
Meanwhile, wavelet coefficients are linked to precise physical quantities, such as timescale, center frequency, bandwidth, and energy.
The same is true of scattering transforms, in which the first-order wavelets relate to carrier frequencies whereas second-order wavelets relate to modulation frequencies.
Chapters 2 and 3 will explain how to construct filterbanks for wavelet transforms and scattering transforms respectively.
Then, Chapter 4 will show how a scattering transform may be interfaced with a deep convolutional network to perform audio classification of playing techniques such as tremolo and vibrato.
With a gradient-based method known as layerwise relevance propagation (LRP), we will visualize which coefficient is most informative to the classifier for any given audio input [2].
Hence, this kind of hybrid architecture offers insight on the physical underpinnings of musical playing techniques: for example, the scattering coefficient which are associated to the vibrato rate stands out as a more relevant feature than those associated to the spectral envelope.
This is consistent with our understanding of sound production and could not have been achieved with a spectrogram-based neural network.


## 3. For biological plausibility
---------------------------------
The computational architecture of deep neural networks bear a structural resemblance with the biological cortex.
However, this resemblance is too elusive to draw precise connections between machine learning and cognitive science.
In particular, typical MIR systems are inadequate models of the auditory cortex, even so their output responses may correctly predict the ground truth.
The situation is different with the joint time–frequency scattering transform (JTFS), a deep convolutional operator which is derived from wavelet theory and incurs no learning stage.
Prior work on auditory neurophysiology has shown that in mammalians, the early stages auditory cortex operates with localized spectrotemporal receptive fields (STRF), which resemble two-dimensional wavelets in the time–frequency domain.
These findings suggest that JTFS appears as a biologically plausible model of timbre, defined as the low-level cognitive features underlying musical cognition [3].
A recent publication has confirmed the usefulness of JTFS in timbre perception research by showing that Euclidean distances between JTFS coefficients predict judgments of timbre dissimilarity between isolated musical notes involving extended playing techniques [4].
Chapter 3 will present the theory and implementation of JTFS in Kymatio, while chapter 5 while derive an application to the timbral exploration of an AM/FM synthesizer.


## 4. For artistic creation
---------------------------
There is a growing interest for connectionist architectures and iterative refinement in contemporary music creation.
In particular, artificial neural networks have been used for digital audio synthesis since at least the 1980s.
However, for aesthetic reasons, certain artist prefer to generate sounds with wavelets and joint time–frequency scattering (JTFS) rather than with pretrained neural networks.
One such aesthetic reason is that JTFS offers an idealized simulation of auditory perception yet without any exposure to real-world data: as such, it can be regarded as a "blank slate" mathematical model for machine perception.
Furthermore, since JTFS is differentiable, it is amenable to numerical transformation and waveform resynthesis by gradient descent.
Since 2016, composer Florian Hecker has worked with the Kymatio consortium to produce music under different formats, including:
- concerts at Alte Oper (Frankfurt)
- installation at the "Geometry of Now" gallery (Moscow)
- concerts at the Underground Film Festival (Lausanne)
- multimedia installations at the Kunsthalle (Vienna)
- radio broadcast from BBC Maida Vale studios (London)
- stereocassette for Editions Mego (Vienna)
- illustrated book for Sternberg Press (Berlin)
- CD release for Urbanomic (London)
- [vinyl release](https://www.youtube.com/watch?v=e3VJ-I5Wxl4) for Warp Records (London)
These creations illustrate the creative potential of JTFS for digital audio effects [5].
In Chapter 6, we will elaborate on these findings to show that JTFS can serve in differentiable digital signal processing (DDSP) for perceptually driven transformations of music signals [6].


## 5. For mathematical understanding
------------------------------------
The mathematical foundations of deep learning remains in infancy [7].
Meanwhile, our understanding of wavelets has considerably advanced over the past thirty years: we now have clear guidelines for wavelet design, approximation theorems for coding and compression, and fast recursive implementations [8].
Similarly, the development of scattering transforms was partially motivated by an algebraic theory of invariance and stability to signal deformations [9].
The development of joint time-frequency scattering has extended this theory to convolutional operators over the time–frequency domain and has strengthened the thematic link between scattering transforms and deep neural networks [10].
In this context, gaining familiarity with Kymatio can serve as a preparation step for advancing knowledge on neural networks and come up with innovative ideas.
At ISMIR 2023, one example is found in PESTO, a deep neural network for pitch estimation in which learnable Toeplitz matrices induce a self-supervised transposition-equivariant objective [11].
Although PESTO does not directly rely on wavelet theory to address its MIR application, it shares a common inspiration with scattering transforms because of its systematic treatment of equivariance to factors of variability in the time--frequency domain: see Chapter 4 in particular.


[//]: # (TODO: add bibtex references to this page)
## References
-------------
1. ["From HEAR to GEAR: Generative Evaluation of Audio Representations" by Vincent Lostanlen, Lingyao Yan, and Xianyi Yang](https://hal.science/hal-03979667/)
2. ["Explainable Audio Classification of Playing Techniques with Layer-wise Relevance Propagation" by Changhong Wang, Vincent Lostanlen, and Mathieu Lagrange](https://hal.science/hal-04029145/)
3. ["Music in Our Ears: The Biological Bases of Musical Timbre Perception" by Kailash Patil, Daniel Pressnitzer, Shihab Shamma, and Mounya Elhilali](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1002759)
4. ["Time–frequency scattering accurately models auditory similarities between instrumental playing techniques" by Vincent Lostanlen, Christian El-Hajj, Mathias Rossignol, Grégoire Lafay, Joakim Andén and Mathieu Lagrange](https://arxiv.org/abs/2007.10926)
5. ["The Shape of RemiXXXes to Come: Audio texture synthesis with time-frequency scattering" by Vincent Lostanlen and Florian Hecker](https://arxiv.org/abs/1906.09334)
6. ["Mesostructures: Beyond Spectrogram Loss in Differentiable Time-Frequency Analysis" by Cyrus Vahidi, Han Han, Changhong Wang, Mathieu Lagrange, György Fazekas, and Vincent Lostanlen](https://arxiv.org/abs/2301.10183) 
7. ["Understanding Deep Convolutional Networks" by Stéphane Mallat](https://arxiv.org/abs/1601.04920)
8. ["Fourier and Wavelet Signal Processing" by Jelena Kovacevic, Vivek K. Goyal, and Martin Vetterli](https://www.fourierandwavelets.org/FWSP_a3.2_2013.pdf)
9. ["Group Invariant Scattering" by Stéphane Mallat](https://arxiv.org/absf/1101.2286)
10. ["Joint time–frequency scattering" by Joakim Andén, Vincent Lostanlen, and Stéphane Mallat](https://arxiv.org/abs/1807.08869)
11. ["PESTO: Pitch Estimation with Self-supervised Transposition-equivariant Objective" by Alain Riou, Stefan Lattner, Gaëtan Hadjeres, Geoffroy Peeters](https://arxiv.org/abs/2309.02265)
