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
3. Biological plausbility
4. Artistic creation
5. Mathematical understanding


## 1. For learning with limited labeled data
--------------------------------------------
Under a supervised regime, deep neural networks require a large amount of labeled data to produce generalizable representations of audio.
Since the annotation of music is a tedious process, the adoption of deep learning in MIR is costly and time-consuming.
This is particularly true in under-appreciated areas of MIR, such as non-Western corpora and expert taxonomies for digital humanities.
Certainly, recent advances in self-supervised learning (SSL) have opened the possibility of developing application-agnostic, "foundation" models from large amounts of unlabeled data.
However, the current state of the art in SSL for audio processing is unable to transfer to fine-grained applications; e.g., the classification of instrumental playing techniques (IPT), as we will see in chapter 3.
Furthermore, SSL models which rely on audiovisual correspoondence, such as Open-L3, lack a "common-sensical" understanding of musical acoustics, in the sense that they misrepresent variations in fundamental frequency or tempo [1].
Chapter 4 will evaluate the abilities of Open-L3 for unsupervised learning of the factors of variability underlying a synthetic data, and show that these abilities remain below those of scattering transforms, a wavelet-based representation which requires no pre-training stage.

## 2. For physical interpretability
-----------------------------------
A well-known shortcoming of deep neural networks is that their activations are difficult to interpret beyond the first layer.
Although this is not necessarily a concern for MIR products, it does hamper the ability of neural networks to advance scientific knowledge in musical acoustics and digital humanities.
Meanwhile, wavelet coefficients are linked to precise physical quantities, such as time scale, center frequency, bandwidth, and energy.
The same is true of scattering transforms, in which the first-order wavelets relate to carrier frequencies whereas second-order wavelets relate to modulation frequencies.
Chapters 2 and 3 will explain how to construct filterbanks for wavelet transforms and scattering transforms respectively.
Then, Chapter 4 will show how a scattering transform may be interfaced with a deep convolutional network so as to perform audio classification of playing techniques such as tremolo and vibrato.
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


## 5. For the love of mathematics
---------------------------------


## References
-------------
1. ["From HEAR to GEAR: Generative Evaluation of Audio Representations" by Vincent Lostanlen, Lingyao Yan, and Xianyi Yang](https://hal.science/hal-03979667/)
2. ["Explainable Audio Classification of Playing Techniques with Layer-wise Relevance Propagation" by Changhong Wang, Vincent Lostanlen, and Mathieu Lagrange](https://hal.science/hal-04029145/)
3. ["Music in Our Ears: The Biological Bases of Musical Timbre Perception" by Kailash Patil, Daniel Pressnitzer, Shihab Shamma, and Mounya Elhilali](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1002759)
4. ["Time–frequency scattering accurately models auditory similarities between instrumental playing techniques" by Vincent Lostanlen, Christian El-Hajj, Mathias Rossignol, Grégoire Lafay, Joakim Andén and Mathieu Lagrange](https://arxiv.org/abs/2007.10926)