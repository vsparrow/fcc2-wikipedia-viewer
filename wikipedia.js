// user clicks search
// user types in earch term
// user presses enter (or button) to contiue
// app reaches out to wikipedia api
// api responds
// app pareses api
// app displays api results
// user clicks a result and gets redirected to link in another tabs

function startSearch(term){
    console.log("startSearch called. ");
    console.log(term);  //term sends the entire html form. uneeded
    var searchTerm = document.querySelector("#searchTerm").value;
    console.log(searchTerm);
    callWiki(searchTerm)
}

function callWiki(searchTerm){
    $.ajax({
        url : "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=wikiCallback",
        dataType : 'jsonp',
        success : function(data){ 
            console.log("success in call wiki");
            console.log(data);
        }
    })
    
}



//  $.ajax({
//                     url: 'http://twitter.com/status/user_timeline/padraicb.json?count=10',
//                     dataType: 'jsonp',
//                     success: function(dataWeGotViaJsonp){
//                         var text = '';
//                         var len = dataWeGotViaJsonp.length;
//                         for(var i=0;i<len;i++){
//                             twitterEntry = dataWeGotViaJsonp[i];
//                             text += '<p><img src = "' + twitterEntry.user.profile_image_url_https +'"/>' + twitterEntry['text'] + '</p>'
//                         }
//                         $('#twitterFeed').html(text);
//                     }
//                 });





//