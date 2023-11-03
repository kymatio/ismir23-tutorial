# Why use wavelets in music information retrieval?
==================================================

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
Furthermore, SSL models which rely on audiovisual correspoondence, such as Open-L3, lack a "common-sensical" understanding of musical acoustics, in the sense that they misrepresent variations in fundamental frequency or tempo.
Chapter 4 will evaluate the abilities of Open-L3 for unsupervised learning of the factors of variability underlying a synthetic data, and show that these abilities remain below those of scattering transforms, a wavelet-based representation which requires no pre-training stage.

## 2. For physical interpretability
-----------------------------------

## 3. For biological plausibility
---------------------------------

# 4. For artistic creation
--------------------------

## 5. For the love of mathematics
---------------------------------

