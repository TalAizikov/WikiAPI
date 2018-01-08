let searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';


function setup() {
    noCanvas();
    userInput = select('#userinput');
    userInput.changed(goWiki);
    goWiki();
    
    function goWiki() {
        let term = userInput.value();
        let url = searchUrl + term;
        loadJSON(url, gotData, 'jsonp');
    }
    
    function gotData {
        let length = data[1].length;
        let index = floor(random(len));
        let title = data[1][index];
        title = title.replace
        console.log(data[1][index]);
    }
}

