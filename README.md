<div align="center">
<img width="80px" src="book/assets/logo.png"> 

# Kymatio: Deep Learning meets Wavelet Theory for Music Signal Processing
[![Jupyter Book Badge](https://jupyterbook.org/badge.svg)](https://wt4msp.github.io/tutorial)

[Cyrus Vahidi](http://cyrusvahidi.com)<sup>1</sup>, [Chris Mitcheltree]([https://www.saisoumya.com/](https://christhetr.ee/))<sup>1</sup> 
 [Vincent Lostanlen](https://lostanlen.com/)<sup>2</sup>

<sup>1</sup> Centre for Digital Music, Queen Mary University of London<br>
<sup>2</sup> LS2N, CNRS, Nantes, France <br>

</div>

This is a web book written for a tutorial session of the 24th International Society for Music Information Retrieval Conference, Nov 4-10, 2023 in Milan, Italy. 
The ISMIR conference is the world’s leading research forum on processing, searching, organising and accessing music-related data.

# Overview 

# Cite 

```
@book{deeplearning_auto_mix:book,
    Author = {Vahidi, Cyrus and Mitcheltree, Chris and Lostanlen, Vincent},
    Month = Nov.,
    Publisher = {https://wt4msp.github.io/tutorial},
    Title = {Kymatio: Deep Learning meets Wavelet Theory for Music Signal Processing},
    Year = 2023,
    Url = {https://wt4msp.github.io/tutorial},
    doi = {}
}
```

# Build

Create a Python environment and build the book.
```
python -m venv env
source env/bin/activate
pip install requirements.txt
./scripts/build-book.sh
```

Then you can upload the book to GitHub for hosting. 

```
./scripts/upload-book.sh
```

You can also export the book as a PDF. Note that this requires having TeX installed. 

```
jupyter-book build book/ --builder pdflatex
```
