var MAINAPP = MAINAPP || {};

(function(nsp) {
    "use strict";

    let wordnikWord = "http://api.wordnik.com/v4/word.json/",
        apiKey = "?api_key=icifvhrdi3wf6dnmxy9zwyewqd9twuvpvfpvwuhafkd2lb3un",
        field = document.querySelector('#word'),
        btn = document.querySelector('#submitBtn'),
        results = document.querySelector('#results'),
        word,
        scrabbleVal = 0;

    const getValue = function(word) {
        fetch(wordnikWord + word + '/scrabbleScore' + apiKey)
        .then(function(data){
            return data.json()
        })
        .then(function(score){
            scrabbleVal = score.value
            results.innerHTML = scrabbleVal
        })
    };

    btn.addEventListener('click', function(e) {
        word = field.value;
        getValue(word);
    });

    nsp.scrabbleVal = scrabbleVal;
})(MAINAPP);