// user clicks search
// user types in earch term
// user presses enter (or button) to contiue
// app reaches out to wikipedia api
// api responds
// app pareses api
// app displays api results
// user clicks a result and gets redirected to link in another tabs

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
*/



// ****************************************************************************** startSearch
function startSearch(term){
    console.log("startSearch called. ");
    // console.log(term);  //term sends the entire html form. uneeded
    var searchTerm = document.querySelector("#searchTerm").value;
    console.log(searchTerm);
    callWiki(searchTerm)
}
// ****************************************************************************** callWiki
function callWiki(searchTerm){
    $.ajax({
        url : "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=wikiCallback",
        dataType : 'jsonp',
        success : function(data){ 
            console.log("success in call wiki");
            // console.log(data);
            console.log("Is array::" +Array.isArray(data) );

            parseData(data);
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
// ****************************************************************************** parseData
function parseData(data){
    console.log("parseData");
    console.log(data);
    
    console.log("******** data[0] **************************")
    // console.log(data[0]);
    //data[0] is the search term wikipedia used
    //type String
    console.log("******** data[1] **************************")
    // console.log(data[1]);
    //data[1] is a lsit of article titles that were matched
    //type Array, each element is a String
    console.log("******** data[2] **************************")
    // console.log(data[2]);
    //data[2] is a list of synopsis of each article
    //type array, each element is a String
    console.log("******** data[3] **************************")
    // console.log(data[3]);    
    //data[3] is a list of links to each article
    //type array, each element is a String
    
    
}

