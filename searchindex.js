Search.setIndex({"docnames": ["ch1_intro/tutorial_scope", "ch1_intro/tutorial_structure", "ch2_wavelets/1_wavelets", "ch2_wavelets/filterbanks", "ch2_wavelets/intro", "ch2_wavelets/morlet1d", "ch2_wavelets/morlet2d", "ch3_scattering/2_scattering", "ch3_scattering/jtfs", "ch3_scattering/order1", "ch3_scattering/order2", "ch3_scattering/scalogram", "ch3_scattering/wavelet_fbank", "ch3_scattering/wavelet_transform", "ch4_mir/3_ipt_classification", "ch4_mir/convnet", "ch4_mir/dataset", "ch4_mir/eval", "ch4_mir/extensions", "ch4_mir/task", "ch5_gear/4_gear", "ch5_gear/amfm_synth", "ch5_gear/eval", "ch5_gear/gear", "ch5_gear/knn", "ch6_dtfa/5_dtfa", "ch6_dtfa/chirplet_arp", "ch6_dtfa/dtfa", "ch6_dtfa/gradient_viz", "ch6_dtfa/jtfs_loss", "ch6_dtfa/micro_to_meso", "ch6_dtfa/mss_loss", "ch7_resources/acknowledgements", "ch7_resources/authors", "ch7_resources/references", "intro"], "filenames": ["ch1_intro/tutorial_scope.md", "ch1_intro/tutorial_structure.md", "ch2_wavelets/1_wavelets.md", "ch2_wavelets/filterbanks.md", "ch2_wavelets/intro.md", "ch2_wavelets/morlet1d.md", "ch2_wavelets/morlet2d.md", "ch3_scattering/2_scattering.md", "ch3_scattering/jtfs.md", "ch3_scattering/order1.md", "ch3_scattering/order2.md", "ch3_scattering/scalogram.md", "ch3_scattering/wavelet_fbank.md", "ch3_scattering/wavelet_transform.md", "ch4_mir/3_ipt_classification.md", "ch4_mir/convnet.md", "ch4_mir/dataset.md", "ch4_mir/eval.md", "ch4_mir/extensions.md", "ch4_mir/task.md", "ch5_gear/4_gear.md", "ch5_gear/amfm_synth.md", "ch5_gear/eval.md", "ch5_gear/gear.md", "ch5_gear/knn.md", "ch6_dtfa/5_dtfa.md", "ch6_dtfa/chirplet_arp.md", "ch6_dtfa/dtfa.md", "ch6_dtfa/gradient_viz.md", "ch6_dtfa/jtfs_loss.md", "ch6_dtfa/micro_to_meso.md", "ch6_dtfa/mss_loss.md", "ch7_resources/acknowledgements.md", "ch7_resources/authors.md", "ch7_resources/references.md", "intro.md"], "titles": ["Tutorial Scope", "Tutorial Structure", "Notebook 1 - Introduction to Wavelets", "Wavelet Filterbanks", "Introduction to Wavelets", "1D Morlet Wavelets", "2D Morlet Wavelets", "Notebook 2 - Scattering Transforms with Kymatio", "Time-Frequency Scattering", "First-order Scattering", "Second-order Scattering", "Wavelet Scalogram", "Wavelet Filterbanks", "Intro to Wavelet Transforms", "Notebook 3 - Musical Playing Technique Classification", "Convnet Training", "SOL Playing Techniques Dataset", "Evaluation", "Extensions", "Musical Playing Technique Classification with Hybrid Scattering ConvNets", "Notebook 4 - GEAR: Generative Evaluation of Audio Representations", "AM/FM Chirp Dataset Generation", "Generative Evaluation of Audio Representations", "GEAR: Generative Evaluation of Audio Representations", "Nearest Neighbors Regression of Synth Parameters", "Notebook 5 - DTFA: Differentiable Time-Frequency Analysis", "Differentiable Chirplet Arpeggiator", "DTFA: Differentiable Time-Frequency Analysis", "Parameter Estimation by Gradient Descent", "Time-Frequency Scattering Distance", "From the microscale to the mesoscale", "Multiscale Spectral Distance", "Acknowledgements", "Authors", "References", "Kymatio: Deep Learning meets Wavelet Theory for Music Signal Processing"], "terms": {"googl": [1, 2, 7, 14, 20, 25, 33], "colab": [1, 2, 7, 14, 20, 25], "within": [1, 19, 22, 23, 24, 27, 35], "domain": [23, 27, 30, 35], "machin": [23, 33], "listen": [23, 33], "framework": [23, 35], "like": 23, "holist": 23, "hear": 23, "provid": [1, 23, 35], "comprehens": [23, 35], "methodolog": [23, 35], "assess": [19, 23, 24], "statist": 23, "model": [23, 27, 35], "across": [19, 23], "multipl": [19, 23], "while": [23, 30], "uniform": 23, "basi": 23, "comparison": [23, 27], "deep": [22, 23, 27], "learn": [22, 23, 27, 33], "dataset": [1, 19, 22, 23, 35], "direct": [23, 35], "interpret": [21, 23], "term": 23, "signal": [0, 21, 22, 23, 27, 30], "process": [0, 23, 27], "remain": [23, 30], "elus": 23, "In": [19, 22, 23, 27, 30, 33, 35], "thi": [0, 1, 19, 21, 22, 23, 27, 30], "tutori": [23, 27, 35], "we": [0, 1, 19, 21, 22, 23, 24, 27, 28, 30, 35], "explor": [19, 23, 35], "an": [0, 19, 21, 22, 23, 24, 27, 33, 35], "approach": [19, 23], "2": [1, 21, 22, 23, 27, 30, 35], "here": 23, "emphasi": 23, "compris": 23, "sound": [0, 19, 21, 23, 27, 30, 35], "character": [22, 23], "select": [22, 23, 24], "number": [22, 23], "independ": [21, 22, 23], "factor": [21, 22, 23, 30], "acoust": [21, 22, 23, 30], "variabl": [19, 21, 22, 23], "us": [0, 1, 22, 23, 24, 31, 35], "kymatio": [0, 1, 23, 33], "packag": [1, 23, 33], "amplitud": [21, 22, 23], "frequenc": [1, 19, 21, 22, 23, 24, 30], "modul": [19, 21, 22, 23, 24, 30, 33, 35], "understand": [19, 23, 35], "visual": [0, 21, 22, 23, 24, 28, 35], "characterist": [21, 23], "repres": [19, 22, 23, 35], "scatter": [0, 1, 21, 22, 23, 24, 33], "time": [1, 19, 22, 23, 24, 33], "transform": [0, 1, 19, 21, 22, 23, 35], "1": [1, 22, 23, 24, 27, 35], "compar": 23, "other": [22, 23, 24, 35], "featur": [0, 1, 19, 22, 23, 24, 35], "ar": [1, 19, 21, 22, 23, 24, 30, 35], "commonli": 23, "system": 23, "similar": [0, 19, 22, 23, 24, 35], "construct": [23, 35], "emb": 23, "isomap": [22, 23, 24], "manifold": [21, 22, 23], "embed": [21, 22, 23], "algorithm": [1, 22, 23, 24], "which": [1, 19, 22, 23], "when": [22, 23, 30], "effect": [0, 19, 23, 33], "should": [23, 27], "materi": [23, 27], "mesh": [22, 23], "suggest": 23, "linear": [22, 23, 24], "correl": [23, 30], "its": [19, 21, 23, 24, 27, 35], "princip": [22, 23], "compon": [22, 23], "paramet": [21, 23, 27, 35], "given": [19, 22, 23, 27], "synthes": [21, 23, 24, 27, 33, 35], "henc": [21, 22, 23, 30], "exhibit": 23, "disentangl": [22, 23], "properti": [19, 23, 35], "implement": 23, "two": [21, 23, 30], "parametr": [21, 23, 35], "produc": 23, "complex": 23, "tone": 23, "addit": 23, "fourier": [23, 30, 35], "3": [1, 21, 22, 23, 27, 35], "fundament": [22, 23], "decai": 23, "bright": 23, "odd": 23, "even": 23, "harmon": 23, "ratio": [22, 23, 24], "chirplet": [23, 35], "arpeggi": [23, 35], "describ": [22, 23], "centr": [23, 33], "rate": [21, 22, 23, 24, 30], "exponenti": [21, 23], "chirp": [22, 23, 24, 30, 35], "The": [1, 19, 21, 22, 23, 27, 30, 35], "first": [22, 23, 35], "ha": [21, 23, 27, 33, 35], "sustain": 23, "pitch": [19, 23, 27], "vari": [21, 23, 33], "spectral": [23, 35], "shape": 23, "can": [1, 19, 21, 23, 24, 28, 30], "simul": 23, "instrument": [1, 19, 21, 23, 27, 35], "flute": 23, "clarinet": 23, "second": [21, 22, 23, 35], "s": [1, 21, 22, 23, 24, 33, 35], "non": [23, 27], "stationari": 23, "contain": [22, 23], "both": [22, 23, 35], "case": [17, 22, 23, 30, 31], "trivial": 23, "human": 23, "auditori": [19, 23, 33], "differ": [19, 23, 30, 33, 35], "between": [19, 21, 22, 23, 24, 27, 30, 35], "thei": [23, 30], "have": [0, 19, 21, 22, 23, 27, 35], "exactli": [21, 23], "degre": [22, 23, 24], "freedom": [22, 23], "make": [1, 23], "possibl": 23, "said": 23, "each": [1, 19, 22, 23, 24], "span": [19, 23], "3d": [21, 23], "grid": 23, "Then": [23, 24], "comput": [0, 22, 23, 24, 29, 30, 33, 35], "nearest": [22, 23, 35], "neighbor": [22, 23, 35], "graph": [22, 23, 24], "mel": [22, 23, 30], "cepstral": [22, 23], "coeffici": [22, 23, 35], "open": [22, 23, 33, 35], "l3": [22, 23], "music": [0, 1, 21, 22, 23, 27, 33], "encod": [22, 23], "crepe": [], "wav2vec2": [], "By": [23, 35], "situat": 23, "paradigm": [23, 27], "akin": 23, "aim": [0, 19, 23], "highlight": [23, 35], "distinct": [19, 23, 35], "intricaci": [19, 23], "variou": [19, 23], "deepen": 23, "capabl": [22, 23, 24, 35], "field": [23, 28, 35], "research": [0, 23, 33, 35], "differenti": [0, 1, 19, 23], "gpu": [1, 23], "john": 23, "murad": 23, "cyru": [23, 35], "vahidi": [23, 35], "changhong": [19, 23], "wang": [19, 23], "han": 23, "vincent": [23, 35], "lostanlen": [19, 23, 35], "mathieu": 23, "lagrang": 23, "georg": 23, "fazeka": [23, 27], "from": [0, 1, 21, 22, 23, 24, 33, 35], "lingyao": 23, "yan": 23, "xianyi": 23, "yang": 23, "phd": 33, "ukri": 33, "cdt": 33, "artifici": 33, "intellig": 33, "digit": [0, 27, 33, 35], "london": 33, "scienc": 33, "graduat": 33, "imperi": 33, "colleg": 33, "hi": 33, "cover": [21, 33], "represent": [0, 1, 24, 27, 30, 33], "percept": [30, 33, 35], "he": 33, "core": [33, 35], "contributor": 33, "sourc": [1, 19, 27, 33, 35], "wavelet": [0, 1, 33], "previous": [19, 33], "wa": [27, 33], "visit": 33, "ls2n": 33, "cnr": 33, "franc": 33, "work": [0, 33, 35], "mir": [0, 19, 33], "ml": 33, "byted": 33, "sami": 33, "group": 33, "founder": 33, "sonophas": 33, "ai": 33, "perform": [24, 33, 35], "experiment": 33, "electron": 33, "max": 33, "msp": 33, "modular": 33, "synthesi": [0, 27, 33, 35], "audio": [0, 1, 19, 21, 24, 27, 33], "found": [1, 21, 27, 33], "develop": [19, 33, 35], "neuton": 33, "neural": [19, 27, 33, 35], "plugin": 33, "sdk": 33, "past": 33, "art": [27, 33], "project": 33, "varieti": [19, 33], "compani": 33, "institut": 33, "includ": [23, 33, 35], "airbnb": 33, "ai2": 33, "keio": 33, "univers": 33, "qosmo": 33, "dr": 33, "obtain": 33, "2017": 33, "\u00e9cole": 33, "normal": [21, 33], "sup\u00e9rieur": 33, "under": [22, 27, 33, 35], "supervis": [27, 33], "st\u00e9phane": 33, "mallat": 33, "sinc": [27, 33], "scientist": 33, "charg\u00e9": 33, "de": 33, "recherch": 33, "scholar": [33, 35], "new": [0, 33], "york": 33, "member": 33, "consortium": 33, "web": 35, "written": 35, "session": 35, "24th": 35, "intern": 35, "societi": 35, "inform": [19, 27, 35], "retriev": [19, 27, 35], "confer": 35, "nov": 35, "5th": [1, 35], "2023": [1, 27, 35], "held": 35, "milan": 35, "itali": 35, "ismir": [1, 27, 35], "world": [27, 35], "lead": 35, "forum": 35, "search": 35, "organis": 35, "access": [1, 35], "relat": 35, "data": [22, 27, 35], "toolkit": 35, "A": [27, 35], "dive": 35, "critic": 35, "landscap": 35, "musicolog": 35, "practition": 35, "robust": 35, "design": [21, 35], "python": [0, 35], "integr": [27, 35], "principl": 35, "recent": [27, 35], "version": 35, "v0": [1, 35], "4": [1, 21, 22, 30, 35], "incorpor": 35, "joint": 35, "jtf": [22, 23, 24, 27, 29, 30, 35], "notabl": 35, "influenc": 35, "preval": 35, "neurophysiolog": 35, "timbr": [0, 19, 35], "spectrotempor": [19, 22, 30, 35], "recept": 35, "strf": 35, "efficaci": [19, 35], "been": [19, 35], "empir": 35, "establish": 35, "divers": [19, 35], "area": 35, "classif": [0, 1, 35], "plai": [1, 21, 35], "techniqu": [1, 21, 35], "recognit": [19, 24, 35], "among": 35, "encompass": 35, "depth": [19, 35], "contextu": 35, "pertin": 35, "exampl": [0, 24, 31, 35], "detail": 35, "examin": 35, "segment": 35, "purview": 35, "analyt": 35, "insight": 35, "role": [19, 35], "perceptu": [27, 35], "distanc": [22, 24, 27, 30, 35], "object": [19, 35], "gradient": [27, 35], "descent": [27, 35], "studi": 35, "systemat": 35, "user": 35, "interfac": 35, "emphas": 35, "extens": 35, "routin": [28, 35], "advantag": 35, "limit": [27, 35], "conclud": 35, "remark": 35, "current": [1, 35], "prospect": 35, "For": [24, 27, 35], "academ": 35, "commun": 0, "signific": [19, 35], "paramount": 35, "import": [19, 35], "scholarli": 35, "underscor": 35, "associ": [19, 35], "moreov": 35, "advanc": [27, 35], "seen": 35, "being": 35, "emploi": [19, 35], "fine": 35, "tune": 35, "intend": 35, "profession": 35, "offer": [19, 35], "rigor": 35, "addition": 35, "invalu": 35, "those": [0, 35], "engin": 35, "seek": 35, "assum": 0, "reader": [0, 35], "some": [0, 27], "prior": [0, 19], "knowledg": [0, 19], "numpi": 0, "program": [0, 27], "familiar": 0, "pytorch": 0, "bonu": 0, "essenti": [0, 21, 24], "spectrogram": [0, 27, 30, 31], "No": 0, "expect": 0, "relev": [0, 19, 35], "If": [30, 35], "you": 35, "ani": 35, "accompani": 35, "code": 35, "your": 35, "pleas": [1, 35], "consid": [22, 35], "vahidi2023kymatio": 35, "mitcheltre": 35, "christoph": 35, "month": 35, "publish": 35, "titl": 35, "year": 35, "url": 35, "http": [1, 35], "waveletmsp": [], "github": [0, 1, 35], "io": 35, "structur": 35, "scope": 35, "definit": 31, "perspect": 0, "scalogram": [22, 35], "notebook": 35, "i": [24, 30], "5": [1, 19, 21, 22, 24, 35], "dtfa": [1, 35], "refer": 35, "acknowledg": 35, "deliv": [1, 35], "introductori": 35, "applic": [22, 27, 35], "strong": 35, "beyond": [22, 30, 35], "follow": 35, "experi": [19, 35], "supplementari": [1, 35], "hope": 35, "particip": 35, "deeper": 35, "intuit": 35, "foundat": [19, 35], "concept": 35, "1d": [19, 35], "after": [1, 24, 35], "complet": 35, "mathemat": 35, "behind": 35, "2d": 35, "order": [22, 35], "how": [19, 28, 30, 35], "filterbank": 35, "interpert": 35, "synthet": [27, 35], "real": [27, 35], "connect": 35, "cqt": [19, 30, 35], "base": 35, "physic": [19, 21, 24, 35], "captur": [19, 22, 35], "particular": 35, "hyperparamet": [22, 35], "affect": 35, "result": [19, 22, 24, 35], "numer": [27, 35], "frontend": [1, 19, 35], "api": 35, "avenu": 35, "run": [22, 35], "through": 35, "practic": [0, 1, 35], "prepar": 35, "preprocess": 35, "dnn": 35, "automat": 35, "torch": [1, 35], "welcom": 35, "via": [1, 35], "feel": 35, "free": 35, "submit": [0, 35], "issu": [0, 27, 35], "pull": [0, 35], "request": [0, 35], "ch2_wavelet": [], "1_wavelet": [], "md": [], "ismir23": [1, 35], "book": [0, 1], "introduct": [0, 1, 27], "part": 1, "ch3_wavelet": [], "2_scatter": [], "ch4_wavelet": [], "3_ipt_classif": [], "gear": 1, "gener": [0, 1], "evalu": [1, 27], "ch6_dtfa": [], "6_dtfa": [], "reli": [1, 24], "acceler": 1, "environ": 1, "s1dt": 1, "util": 1, "function": [1, 27], "extract": [1, 19, 24], "etc": [], "tool": 1, "main": 1, "depend": [1, 19, 27], "0": [1, 21, 24], "dev": 1, "instal": [], "pip": 1, "git": 1, "com": 1, "cyrusvahidi": 1, "helper": 1, "librari": 1, "analysi": [0, 1, 30], "all": [1, 24, 27], "handl": 1, "get": 1, "touch": 1, "contact": 1, "author": 1, "precomput": 1, "To": [1, 21, 22], "see": [1, 27, 30], "dedic": 1, "channel": 1, "slack": 1, "workspac": 1, "theoret": 0, "give": 0, "mainli": 0, "stai": [0, 1], "up": [0, 1], "date": [0, 1, 27], "document": 0, "join": 0, "contribut": 0, "releas": [0, 1], "x": [0, 1, 22, 30], "content": 1, "continu": 1, "updat": 1, "novemb": 1, "onli": [1, 19, 22, 30], "avail": 1, "beta": 1, "It": 1, "offici": 1, "morlet": 35, "intro": 35, "am": [22, 30, 35], "fm": [22, 35], "regress": 35, "synth": [21, 35], "multiscal": [27, 30, 35], "microscal": 35, "mesoscal": 35, "estim": [24, 27, 35], "convnet": 35, "train": [19, 27, 35], "accuraci": 17, "failur": 17, "plot": [24, 30], "commentari": [], "task": [19, 21, 24], "knn": [], "show": [22, 28], "motiv": 28, "explain": [19, 28], "do": [21, 28], "loss": [27, 29, 30, 31], "emphasis": [], "mss": [27, 30], "sensit": 27, "event": 30, "align": [22, 24, 30], "arpeggio": [], "shift": 27, "facet": 19, "hold": 19, "One": 19, "add": 19, "express": 19, "musician": 19, "dure": 19, "act": 19, "section": [19, 22, 24], "classifi": 19, "focus": 19, "11": [19, 30], "broadli": 19, "categor": 19, "either": 19, "period": 19, "tremolo": [19, 22], "vibrato": 19, "trill": 19, "b": [19, 22], "evolutionari": 19, "glissando": 19, "portamento": 19, "acciaccatura": 19, "exercis": 19, "focu": 19, "contrari": 19, "wherein": 19, "primari": 19, "identifi": 19, "pose": 19, "own": 19, "challeng": 19, "same": [19, 21, 24], "convers": 19, "singl": 19, "yield": [19, 21], "central": 19, "excit": 19, "elicit": 19, "instrumentalist": 19, "govern": 19, "As": [19, 24], "mai": [19, 22], "actual": 19, "bear": 19, "more": 19, "class": 19, "than": 19, "pivot": 19, "pattern": [19, 22], "defin": [19, 21, 24], "distinguish": 19, "emerg": 19, "optim": 19, "candid": 19, "These": [19, 21], "discuss": [19, 27], "potenc": 19, "rich": 19, "convolut": 19, "network": [19, 27], "three": [19, 21, 22, 24, 27], "extractor": 19, "constant": 19, "q": [19, 22], "scattering1d": [19, 23], "timefrequencyscatt": 19, "also": [19, 22], "discern": 19, "intrins": 19, "set": [19, 22, 24], "draw": 19, "upon": 19, "acquir": 19, "nuanc": 19, "extend": [19, 27], "next": 19, "mileston": 19, "et": 19, "al": 19, "changhongw": 19, "examod": 19, "studio": 19, "line": 19, "pmt": 19, "split": 19, "layer": [19, 27], "wise": 19, "propag": 19, "hybrid": 35, "analyz": 23, "resembl": 23, "map": 23, "them": 23, "onto": 23, "abil": [23, 27], "reconstruct": [23, 27], "mfcc": [23, 24, 30], "openl3": 23, "control": [21, 27], "carrier": [21, 24], "f_c": [21, 22, 24], "hz": [21, 22, 30], "f_m": [21, 22], "gamma": [21, 22, 24], "octav": [21, 22], "ideal": 21, "type": 21, "boldsymbol": [21, 24], "g": [21, 22, 24, 27], "denot": 21, "theta": [21, 24], "triplet": 21, "everi": 21, "begin": [21, 24, 30], "equat": [21, 24], "g_": 21, "t": [21, 30], "longmapsto": 21, "phi": 21, "w": [21, 27], "sin": 21, "pi": 21, "f": [], "mathrm": 21, "m": [21, 22, 24], "left": [21, 24], "dfrac": [21, 24], "f_": [21, 22, 24], "c": [21, 22, 24], "log": [21, 22, 30], "right": [21, 24], "end": [21, 24], "ensur": 21, "energi": 21, "restrict": 21, "bandwidth": [21, 22], "durat": 21, "invers": [21, 27], "proport": 21, "faster": 21, "larger": [21, 24], "over": [21, 22, 27], "slow": [21, 27], "achiev": 21, "_": [21, 24], "gaussian": 21, "window": 21, "width": 21, "equal": [21, 30], "instantan": 21, "thu": 21, "importantli": 21, "benefit": 21, "appli": [21, 22], "eq": 21, "ref": [21, 22], "eqn": 21, "16": 21, "valu": [21, 22, 24], "arrang": 21, "geometr": 21, "progress": 21, "4096": [21, 22], "total": 21, "512": 21, "1024": 21, "32": 21, "respect": [21, 22, 27], "relationship": 22, "unsupervis": 22, "dimension": 22, "reduct": 22, "cite": 22, "tenenbaum2000glob": 22, "assembl": 22, "geodes": 22, "matrix": 22, "neighborhood": 22, "high": 22, "euclidean": [22, 24], "40": [22, 24], "point": [22, 27], "sec": 22, "therefor": [22, 24], "postul": 22, "reveal": 22, "whether": 22, "coordin": 22, "reflect": [22, 30], "fig": 22, "d": 22, "8": 22, "where": [22, 24], "observ": [22, 24], "li": 22, "adequ": [22, 30], "yet": 22, "fail": 22, "account": 22, "due": 22, "aforement": 22, "reason": 22, "despit": [22, 30], "successfulli": 22, "demand": 22, "greater": 22, "qualiti": 22, "better": 22, "local": [22, 27], "sx": 22, "form": 22, "curv": 22, "wherea": 22, "our": [22, 27, 30], "clearli": [22, 30], "one": 22, "cartesian": 22, "meanwhil": [22, 24], "faithfulli": 22, "veri": 22, "dissimilar": 22, "illustr": 30, "abov": 30, "displac": 30, "anoth": 30, "sampl": 30, "13": 30, "unalign": 30, "becom": 30, "unreli": 30, "e": 30, "short": [27, 30], "spectra": 30, "upto": 30, "scale": 30, "10m": 30, "typic": [27, 30], "frame": 30, "size": 30, "had": 30, "would": 30, "maxim": 30, "disjoint": 30, "norm": 30, "could": 30, "larg": 30, "need": 30, "mesostructur": 30, "evolut": 30, "move": 30, "imag": 30, "goe": 30, "black": 30, "grei": 30, "bar": 30, "space": [24, 30], "minimum": 30, "increas": 30, "increasingli": 30, "further": 30, "target": [27, 30], "discrep": [24, 30], "fact": 30, "inefficaci": 30, "measur": 30, "against": 30, "advent": 27, "ddsp": 27, "greatli": 27, "littl": 27, "2020": 27, "fruit": 27, "match": 27, "review": 27, "state": 27, "speech": 27, "ben": 27, "hay": 27, "jordi": 27, "shier": 27, "gy\u00f6rgi": 27, "andrew": 27, "mcpherson": 27, "charalampo": 27, "saiti": 27, "3po_droid": [], "j": [22, 24], "14": 22, "global": [22, 27], "tempor": 22, "averag": [22, 24], "doe": 22, "interv": 22, "q_f": 22, "center": 22, "guarante": 22, "least": 22, "cycl": 22, "most": [22, 27], "per": 22, "quantit": 24, "supplement": 24, "previou": 24, "k": 24, "nn": 24, "error": 24, "shed": 24, "light": 24, "topolog": 24, "Such": 24, "common": 24, "correspond": [24, 27], "start": 24, "empti": 24, "mathcal": [24, 27], "n": 24, "_0": 24, "varnoth": 24, "iter": 24, "closest": 24, "pairwis": 24, "stop": 24, "cup": 24, "argmin_": 24, "vert": 24, "mathbf": 24, "vert_2": 24, "widetild": 24, "_i": 24, "sum": 24, "theta_j": 24, "_k": 24, "theta_i": 24, "_j": 24, "close": 24, "howev": 24, "excel": 24, "rang": [24, 27], "75": 24, "except": 24, "25": 24, "voic": 27, "separ": 27, "minim": 27, "requir": 27, "oper": 27, "f_w": 27, "l": 27, "origin": 27, "so": 27, "weight": 27, "earlier": 27, "devot": 27, "scientif": 27, "impact": 27, "choic": 27, "sake": 27, "simplic": 27, "chapter": 27, "instead": 27, "solv": 27, "problem": 27, "deepest": 27, "trainabl": 27, "backpropag": 27, "propos": 27, "call": 27, "out": 27, "widespread": 27, "name": 27, "specif": 27, "solver": 27, "expos": 27, "sever": 27, "converg": 27, "minima": 27, "initi": 27, "enabl": 27, "fast": 27, "optimum": 27, "thank": 27, "stabil": 27, "long": 27, "jess": 27, "engel": 27, "lamtharn": 27, "hantrakul": 27, "chenji": 27, "gu": 27, "adam": 27, "robert": 27, "chin": 27, "yun": 27, "yu": 27, "david": 27, "s\u00fcdhorn": 27, "rodrigo": 27, "diaz": 27, "note": 30, "s_1": 30, "support": 30, "sol": 35, "forev": [], "10": []}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"tutori": [0, 1], "scope": 0, "structur": 1, "definit": [], "perspect": [], "wavelet": [2, 3, 4, 5, 6, 11, 12, 13, 35], "scatter": [7, 8, 9, 10, 19, 29, 35], "notebook": [1, 2, 7, 14, 20, 25], "i": [], "introduct": [2, 4, 35], "design": [], "time": [8, 25, 27, 29, 30, 35], "frequenc": [8, 25, 27, 29, 35], "scalogram": 11, "3": 14, "music": [14, 19, 35], "plai": [14, 16, 19], "techniqu": [14, 16, 19], "classif": [14, 19], "instrument": [], "4": 20, "gear": [20, 23, 35], "gener": [20, 21, 22, 23, 35], "evalu": [17, 20, 22, 23, 35], "audio": [20, 22, 23, 35], "represent": [20, 22, 23, 35], "motiv": [23, 35], "task": 23, "refer": [19, 23, 27, 34], "manifold": [], "embed": [], "spectrotempor": [], "modul": [], "5": 25, "dtfa": [25, 27], "differenti": [25, 26, 27, 35], "analysi": [25, 27, 35], "synthes": [], "paramet": [24, 28], "retriev": [], "acknowledg": 32, "author": [33, 35], "cyru": 33, "vahidi": 33, "christoph": 33, "mitcheltre": 33, "vincent": 33, "lostanlen": 33, "kymatio": [7, 35], "deep": 35, "learn": 35, "meet": 35, "theori": 35, "signal": 35, "process": 35, "overview": 35, "cite": 35, "thi": 35, "book": 35, "content": 35, "basic": 35, "mir": 35, "resourc": 35, "outcom": 35, "contribut": 35, "commun": [1, 35], "2": 7, "transform": [7, 13], "run": 1, "1": 2, "instal": 1, "dataset": [16, 21], "filterbank": [3, 12], "1d": 5, "morlet": [5, 6], "2d": 6, "first": 9, "order": [9, 10], "second": 10, "intro": 13, "am": 21, "fm": 21, "parametr": [], "isomap": [], "nearest": 24, "neighbor": 24, "regress": 24, "synth": 24, "chirplet": 26, "arpeggi": 26, "estim": 28, "gradient": 28, "descent": 28, "distanc": [29, 31], "from": 30, "microscal": 30, "mesoscal": 30, "multiscal": 31, "spectral": 31, "convnet": [15, 19], "train": 15, "extens": 18, "hybrid": 19, "chirp": 21, "mfcc": 22, "scattering1d": 22, "timefrequencyscatt": 22, "openl3": 22, "similar": 30, "invari": 30, "shift": 30, "sol": 16, "visual": 16, "vibrato": 16, "tenor": 16, "trombon": 16, "trill": 16, "clarinet": 16, "tremolo": 16, "viola": 16, "flatterzung": 16, "bass": 16, "tuba": 16, "bisbigliando": 16, "harp": 16}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})