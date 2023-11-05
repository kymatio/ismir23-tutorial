SOL Playing Techniques Dataset
==========================
A subset of the _Studio-on-line_ dataset labelled according to a taxonomy periodic modulation playing techniques {cite}`wang2023explainable`

Visualizing the playing techniques
----------------------------------

### Vibrato - Tenor Trombone
<!-- !audio[ title ]( /assets/audio/mir/tenor-tbn-vibrato.wav ){ size=10 duration=10 cycle=forever } -->

```{image} /assets/figures/mir/u1-tbn-vibrato.png
:alt: U1 visualization of tenor trombone played with vibrato
:width: 500px
:align: center
```

```{image} /assets/figures/mir/s1-tbn-vibrato.png
:alt: S1 visualization of tenor trombone played with vibrato
:width: 500px
:align: center
```
<div style="display: grid">
    <audio controls style="justify-self: center">
        <source src="/assets/audio/mir/tenor-tbn-vibrato.wav" type="audio/wav">
    </audio> 
</div>

### Trill - Clarinet
```{image} /assets/figures/mir/u1-clarinet-trill.png
:alt: U1 visualization of Clarinet played with trill
:width: 500px
:align: center
```

```{image} /assets/figures/mir/s1-clarinet-trill.png
:alt: S1 visualization of Clarinet played with trill
:width: 500px
:align: center
```
<div style="display: grid">
    <audio controls style="justify-self: center">
        <source src="/assets/audio/mir/clarinet-bb-trill.wav" type="audio/wav">
    </audio> 
</div>

### Tremolo - Viola
```{image} /assets/figures/mir/u1-viola-tremolo.png
:alt: U1 visualization of Viola played with tremolo
:width: 500px
:align: center
```

```{image} /assets/figures/mir/s1-viola-tremolo.png
:alt: S1 visualization of Viola played with tremolo
:width: 500px
:align: center
```
<div style="display: grid">
    <audio controls style="justify-self: center">
        <source src="/assets/audio/mir/viola-tremolo.wav" type="audio/wav">
    </audio> 
</div>

### Flatterzunge - Bass Tuba
```{image} /assets/figures/mir/u1-tuba-flatterzunge.png
:alt: U1 visualization of Bass Tuba played with flatterzunge
:width: 500px
:align: center
```

```{image} /assets/figures/mir/s1-viola-tremolo.png
:alt: S1 visualization of Bass Tuba played with flatterzunge
:width: 500px
:align: center
```
<div style="display: grid">
    <audio controls style="justify-self: center">
        <source src="/assets/audio/mir/bass-tuba-flatterzunge.wav" type="audio/wav">
    </audio> 
</div>


### Bisbigliando - Harp
```{image} /assets/figures/mir/u1-harp-bisbigliando.png
:alt: U1 visualization of Harp played with Bisbigliando
:width: 500px
:align: center
```

```{image} /assets/figures/mir/s1-harp-bisbig.png
:alt: S1 visualization of Harp played with Bisbigliando
:width: 500px
:align: center
```
<div style="display: grid">
    <audio controls style="justify-self: center">
        <source src="/assets/audio/mir/harp-bisbigliando.wav" type="audio/wav">
    </audio> 
</div>

Feature extraction
------------------
We pre-extract the features offline: CQT with `nnAudio` and time scatttering / JTFS with `kymatio`.
A numpy array per audio example can be found in `SOL_0.9_HQ-PMT/{feature}`.
We slice the first $2^{16}$ samples (1.5 seconds) of each audio example.
We refer the reader to the following [Github repository](https://github.com/cyrusvahidi/ismir23-kymatio-tools/blob/main/s1dt/data.py) for the feature extraction codebase. 

### `CQT`
```
    "cqt": {
        "n_bins": 144,
        "bins_per_octave": 16,
        "hop_length": 512,
        "global_avg": False
    }
```
The resulting CQT has `144` frequency bins and `129` temporal frames. There's no lowpass filter applied across the CQT's temporal dimension.

### `Scattering1D`
```
    "scat1d": {
        "shape": (2**16, ),
        "Q": (12, 2),
        "J": 12,
        "global_avg": False
    },
```
Time scattering and JTFS give us `16` temporal frames since our hop size is `2**J` `(2**16 / 2**12)`. The larger we set `T` (default `2**J`), the more we impose invariance to time-shifts in both spectral shape and spectrotemporal modulations.
Time-shift invariance is a useful property, particularly for periodic modulations.

We construct the `Scattering1D` filterbanks with a maximum scale of `J=12` (`# octaves`). 
We use 12 and 2 filters per octave in the first and second-order filterbanks respectively.
we average over a temporal support of `2**J`.


### `TimeFrequencyScattering`
```
    "jtfs": {
        "shape": (2**16, ),
        "Q": (12, 2),
        "J": 12,
        "J_fr": 3,
        "Q_fr": 2,
        "F": 12,
        "T": 2**13,
        "global_avg": False
    }
```
We construct the `TimeFrequencyScattering` temporal filterbanks with a maximum scale of `J=12` (`# octaves`). 
We use 12 and 2 filters per octave in the first and second-order temporal filterbanks respectively.
We average over a temporal support of `2**J` and frequential support of `Q / F = 1` octave..
The frequential filterbank has its own set of parameters. 
We use `J_fr=3` octaves, with `Q_fr = 2` filters per octave.
As for time-shift invariance, we can impose frequency transposition invariance with JTFS, by setting `F`, where transposition invariance is achieved over `Q / F` octaves.
Periodic modulations are invariant to frequency transpositions. In accordance with common fate principles of auditory grouping, the harmonics produced by an instrument will follow congruent spectrotemporal modulation envelopes.