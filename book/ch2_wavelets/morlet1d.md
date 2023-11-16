# 1D Morlet Wavelets

For scattering transforms we use Morlet wavelets (also known as Gabor wavelets). 
This is because they provide the best trade-off between temporal and spectral resolution.
Mathematically, the Morlet wavelet is expressed as a complex sinusoid modulated by a Gaussian window.

This can be expressed in code as follows:

```python
import torch as tr
from torch import Tensor


def calc_morlet_psi_simple(t: Tensor, freq_hz: float, sig: float) -> Tensor:
    """
    Args:
        :param t: time values in seconds centered at 0
        :param freq: center frequency of the wavelet in Hz
        :param sig: standard deviation of the gaussian
        :return: a complex tensor of wavelet coefficients in the time domain
    """
    assert t.ndim == 1
    complex_sinusoid = tr.exp(1j * 2 * tr.pi * freq_hz * t)
    gaussian = tr.exp(-0.5 * (t ** 2) / (sig ** 2))
    y = complex_sinusoid * gaussian
    return y
```

Under construction, more coming soon.
