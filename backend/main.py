from functools import lru_cache
import spacy
from fastapi import FastAPI, Query, Body
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from keybert import KeyBERT
from keyphrase_vectorizers import KeyphraseCountVectorizer

app = FastAPI()

origins = ["http://127.0.0.1:5173"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@lru_cache
def get_stopwords():
    nlp = spacy.load("en_core_web_trf")
    stop_words = nlp.Defaults.stop_words
    stop_words.update(
        [
            "ability",
            "capability",
            "desire",
            "face",
            "experience",
            "needs",
            "person",
            "shows",
            "skills",
            "units",
            "years",
            "share",
        ]
    )
    return stop_words


@app.post("/api/v1/")
async def root(text: str = Body(), top_n: int = Query(default=100, gt=0, le=200)):
    kw_model = KeyBERT()
    keyphrases = kw_model.extract_keywords(
        docs=text,
        vectorizer=KeyphraseCountVectorizer(
            lowercase=False,
            stop_words=get_stopwords(),
            spacy_pipeline="en_core_web_trf",
        ),
        top_n=top_n,
    )

    return keyphrases


app.mount("/", StaticFiles(directory="static", html=True), name="static")
