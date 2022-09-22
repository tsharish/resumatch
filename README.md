# Resumatch
## About
Resumatch is a web app to score a resume against a job description. It does this by extracting keyphrases from the job description (which can be manually fine-tuned) and calculates the percentage of keyphrases present in the resume. It also displays the keyphrases not found so that they can be added to the resume.

![Demo](/assets/demo.gif)

## Tech Stack
I created this web app primarily to explore NLP (Natural Language Processing) and specifically, keyword and keyphrase extraction. The backend is developed using Python and FastAPI. It takes the job description and uses the *keyphrase-vectorizers* package along with *KeyBERT* to extract the top N keyphrases. The frontend is written in Typescript using Vue JS framework.

### Alternatives Explored
Before settling on the *keyphrase-vectorizers* approach, I tested *KeyBERT*, which is a popular python package for keyphrase extraction by itself but I found the results "grammatically not quite correct". I also tested *spaCy*, a very popular NLP package, to extract the noun chunks but the results were not refined or targeted. The *keyphrase-vectorizers* package is built on spaCy and works with KeyBERT to provide more refined results as explained [here](https://towardsdatascience.com/enhancing-keybert-keyword-extraction-results-with-keyphrasevectorizers-3796fa93f4db).

## Resources & Links
- https://github.com/TimSchopf/KeyphraseVectorizers
- https://towardsdatascience.com/enhancing-keybert-keyword-extraction-results-with-keyphrasevectorizers-3796fa93f4db
- https://maartengr.github.io/KeyBERT/
- https://spacy.io/