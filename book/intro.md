# Kymatio: Deep Learning meets Wavelet Theory for Music Signal Processing

This is a web book written for a tutorial session of the 24th International Society for Music Information Retrieval Conference, Nov 5th, 2023 held in Milan, Italy. The ISMIR conference is the world’s leading research forum on processing, searching, organising and accessing music-related data.

```{tableofcontents}
```

## Overview
An Exploration of Music Signal Processing Using the Kymatio Toolkit: A Deep Dive into Wavelet Scattering for Audio

Music Information Retrieval (MIR) is a critical domain within the landscape of digital signal processing and computational musicology. The open-source Kymatio toolkit {cite}`andreux` provides researchers and practitioners a robust framework for the analysis and synthesis of music signals using differential methodologies. Kymatio, designed in Python, integrates the principles of deep learning with wavelet scattering.

In its recent version (v0.4), Kymatio incorporates the joint time–frequency scattering transform (JTFS). This transform is notably influenced by a prevalent neurophysiological model in musical timbre perception: the spectrotemporal receptive field (STRF) {cite}`patil`.

The efficacy of scattering transforms in MIR has been empirically established in diverse areas, including musical instrument classification {cite}`dafx vahidi`, neural audio synthesis {cite}`andreux`, and playing technique recognition, among others.

This tutorial encompasses:

1. An in-depth introduction to wavelet and scattering transforms contextualized with pertinent MIR examples.
2. Detailed examination of music classification and segmentation under the purview of scattering.
3. Analytical insight into the role of the perceptual distance objective in gradient descent and a comprehensive study of the Generative Evaluation of Audio Representations (GEAR) {cite}`Lostanlen`.
4. A systematic overview of Kymatio's user interface, emphasizing the extensibility of its core routines.
5. A critical evaluation of the advantages and limitations of scattering within MIR research.
6. Concluding remarks that highlight both the current limitations and prospective directions of scattering in the field.

## Motivation
For the MIR academic community, the significance of scattering transforms in audio classification, timbre representation, and other areas is of paramount importance. Recent scholarly work underscores the capabilities of JTFS in representing distinctions among musical instruments and their associated playing techniques {cite}`jasmp`. Moreover, recent advancements have seen JTFS being employed to fine-tune parameters in sound synthesis {cite}`vahidi meso`.

This tutorial is intended for both MIR scholars and professionals, offering a rigorous introduction to wavelet scattering. Additionally, it will be invaluable for those in the fields of audio engineering and signal processing seeking an advanced understanding of MIR methodologies.

## Authors

```{image} /assets/cv.jpeg
:alt: Cyrus Vahidi
:width: 100px
:align: left
```
[**Cyrus Vahidi**](https://www.cyrusvahidi.com/) 
```{image} /assets/cv.jpeg
:alt: Cyrus Vahidi
:width: 100px
:align: left
```

## Cite this book
If you use this book or any of accompanying code in your work please consider citing this book.

```
@book{vahidi2023kymatio,
    Author = {Vahidi, Cyrus and Mitcheltree, Christopher and Lostanlen, Vincent},
    Month = Nov.,
    Publisher = {ISMIR},
    Title = {Kymatio: Deep Learning meets Wavelet Theory for Music Signal Processing},
    Year = 2023,
    Url = {https://waveletmsp.github.io/tutorial},
}
```