/*
startSearch     called when user hits Submit on seach form
                retrives search query from form, passes it to callWiki

callWiki        calls wikipedia api with search term.
                receives back json object, which is an array, which we will call "data" 
                    data contains 4 elements, [String,Array,Array,Array]
                    data[0] is the search term wikipedia used
                    data[1] is a lsit of article titles that were matched
                    data[2] is a list of synopsis of each article
                    data[3] is a list of links to each article
                
parseData()         parses the object received into a more consumable format

displayResuts   displays results received onto document, under div resultsParent
                each result is in it's own div called result
                    title and text have their own divs, resultsTitle and resultsText
                    each div is clickable to open a new page to follow the link associated with it
                if no results displays error message
*/



// ****************************************************************************** startSearch
function startSearch(term){
    var searchTerm = document.querySelector("#searchTerm").value;
    callWiki(searchTerm)
}
// ****************************************************************************** callWiki
function callWiki(searchTerm){
    $.ajax({
        url : "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + 
            "&format=json&callback=wikiCallback",
        dataType : 'jsonp',
        success : function(data){ 
            displayResults(data);
        },
        error: function (jqXHR, status, err) {
            console.log("Error: callWiki : ");
            console.log(jqXHR);
            console.log("status:"+status);
            console.log("err:"+err);
            console.log("**** end callWiki error *****")
        },
    })
}
// ****************************************************************************** displayResults

function displayResults(results){
    // for loop is used to iterate through results. results can be from 1 item up to 10 (default)
    var html = '';
    if(results[1].length === 0){
        html += '<div class="result resultError"><h1>No results found for ' + results[0] + 
        '</h1><h1>Please try again</h1></div>';
    }
    else {
        html += '<div class="result resultSearchTerm"><h1>Results for "' + results[0] + '"</h1></div>'
        
        for(var i=0;i<results[1].length;i++){
            html += '<div class="result">';
            html += '<a href="'+ results[3][i]  +'"  target="_blank">'
            html += '<div class="resultTitle">'+results[1][i] +'</div>';
            html += '<div class="resultText">' + results[2][i] +'</div>';
            html += '</a></div>'; //close link and div results
        }    
    }
    
    document.querySelector("#resultsParent").innerHTML = html;
    document.querySelector("#randomParent").innerHTML = "";
    document.querySelector("#searchTerm").value = "";
}