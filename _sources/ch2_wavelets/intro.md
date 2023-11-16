# What is a wavelet?

A wavelet is a function (ψ(t)) that is localized in both time and frequency. 
This means it is not periodic and has a finite duration in time and a finite number of oscillations in frequency. 
This is in contrast to the basis function of the Fourier transform (i.e. a sinusoid), which is a function that is localized in frequency but not in time. 
The Fourier transform is a global representation of a signal, whereas the wavelet transform is a local representation of a signal.

Wavelets used in wavelet analysis satisfy the following useful requirements:
1. The wavelet must have finite energy, i.e. ∫|ψ(t)|^2 dt < ∞. This ensures that the wavelet is stable and can be used to first analyze and then reconstruct a signal without loss of information.
2. The fourier transform of the wavelet vanishes at 0 frequency (i.e. there is no DC component). This ensures the wavelet has a band-pass like spectrum.
3. The wavelet must have zero mean, i.e. ∫ψ(t)dt = 0. Along with number 2, this ensures that the wavelet is oscillatory i.e. it's a wave and has zero crossings.

There are a lot of different wavelets with different properties, usually named after their shape or who invented them.
