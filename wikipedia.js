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
    
}