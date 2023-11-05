Evaluation
==========

We train a convnet over 3 acoustic feature representations: the CQT, time scattering coefficients and joint time-frequency scattering, and evaluate the classification accuracy and confusions between playing techniques.

## CQT
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃        Test metric        ┃       DataLoader 0        ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━┩
│         test/acc          │     0.723718523979187     │
│         test/loss         │    0.6989585161209106     │
└───────────────────────────┴───────────────────────────┘   
```{image} /assets/figures/mir/cm_cqt.png
:alt: Confusion Matrix on test set for CQT model
:width: 500px
:align: center
```

## Scat1D
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃        Test metric        ┃       DataLoader 0        ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━┩
│         test/acc          │    0.9504778385162354     │
│         test/loss         │    0.14028948545455933    │
└───────────────────────────┴───────────────────────────┘
```{image} /assets/figures/mir/cm_scat1d.png
:alt: Confusion Matrix on test set for Scattering1D model
:width: 500px
:align: center
```


## JTFS
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃        Test metric        ┃       DataLoader 0        ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━┩
│         test/acc          │    0.9704604744911194     │
│         test/loss         │    0.07301218807697296    │
└───────────────────────────┴───────────────────────────┘
```{image} /assets/figures/mir/cm_jtfs.png
:alt: Confusion Matrix on test set for JTFS model
:width: 500px
:align: center
```