<div align="center">
<img width="80px" src="https://avatars.githubusercontent.com/u/45135504?s=200&v=4"> 

# Kymatio: Deep Learning meets Wavelet Theory for Music Signal Processing
[![Jupyter Book Badge](https://jupyterbook.org/badge.svg)](https://kymatio.github.io/ismir23-tutorial)

[Cyrus Vahidi](http://cyrusvahidi.com)<sup>1</sup>, [Christopher Mitcheltree](https://christhetr.ee/)<sup>1</sup> 
 [Vincent Lostanlen](https://lostanlen.com/)<sup>2</sup>

<sup>1</sup> Centre for Digital Music, Queen Mary University of London<br>
<sup>2</sup> LS2N, CNRS, Nantes, France <br>

</div>

This is a web book written for a tutorial session of the 24th International Society for Music Information Retrieval Conference, Nov 4-10, 2023 in Milan, Italy. 
The ISMIR conference is the world’s leading research forum on processing, searching, organising and accessing music-related data.

# Overview 

# Cite 

```
@book{vahidi2023kymatio,
    title={Kymatio: Deep Learning meets Wavelet Theory for Music Signal Processing},
    author={Cyrus Vahidi and Christopher Mitcheltree and Vincent Lostanlen},
    publisher={ISMIR},
    month={Nov.},
    year={2023},
    url={https://kymatio.github.io/ismir23-tutorial},
}
```

# Build

Create a Python environment and build the book.
```
python -m venv env
source env/bin/activate
pip install requirements.txt
jupyter-book build book/
```

Upload the book to GitHub. 

```
cd book
ghp-import -n -p -f _build/html
```

You can also export the book as a PDF. Note that this requires having TeX installed. 

```
jupyter-book build book/ --builder pdflatex
```
