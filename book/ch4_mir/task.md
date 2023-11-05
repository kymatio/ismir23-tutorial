Musical Playing Technique Classification with Hybrid Scattering ConvNets
========================================================================

In Music Information Retrieval (MIR), understanding and differentiating between various facets of musical sound holds significant importance. 
One such facet, which adds depth to the auditory experience of timbre, is the expressive technique employed by the musician during the act of playing an instrument [1]. 
In this section, we explore the task of classifying distinct musical instrument playing techniques, focusing on 5 expressive techniques that span across 11 diverse instruments.

Playing techniques can be broadly categorized as either (a) periodic (tremolo, vibrato, trill) or (b) pitch evolutionary (glissando, portamento, acciaccatura) [2]. 
In this exercise, we focus on periodic modulations.

Contrary to the task of musical instrument classification, wherein the primary objective is to identify the source of the musical sound, playing technique classification poses its own challenges and intricacies. 

Multiple instruments can be played with the same technique, and conversely, a single instrument can yield a variety of timbres depending on the technique employed. Central to this variability is the excitation elicited by the instrumentalist, which governs the resulting sound. 
As such, the resulting timbres may actually bear more similarity between instrument classes, than within an instrument class.

---
Given the pivotal role that spectrotemporal modulation patterns play in defining and distinguishing playing techniques, scattering transforms emerge as an optimal candidate for feature extraction. 
These transforms, having been previously discussed for their potency in representing physical properties of audio, offer a rich frontend to convolutional neural networks (convnets).

We will train 1D convnet classifier across three different frontend feature extractors: the Constant-Q Transform (CQT), time scattering (`Scattering1D`), and time-frequency scattering (`TimeFrequencyScattering`). 
The aim is not only to assess the efficacy of each approach but also to discern how the intrinsic physical properties of sounds, associated with various playing techniques, are captured and represented within these feature sets. 
Drawing upon the foundational knowledge acquired in the prior sections on scattering transforms, we will develop a nuanced understanding of how these techniques effectively discern and classify diverse musical playing techniques.


References
----------
1. ["Extended playing techniques: the next milestone in musical instrument recognition" by Lostanlen et al.](https://www.lostanlen.com/wp-content/uploads/2019/11/lostanlen2018dlfm.pdf)

2. Wang, Changhong, et al. "Playing technique recognition by joint time–frequency scattering." ICASSP 2020-2020 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP). IEEE, 2020.