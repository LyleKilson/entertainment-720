$(document).ready(function() {


var memeDisplay = document.querySelector("#meme-display");
var search = window.location.href;
var searches = [];
search.split("?");
searches.push(search[1]);
console.log(search);
console.log(searches);
localStorage.setItem("searches", search);


memeSearch = function (i) {
    // var previous = search;
    // console.log($("#sub").val());
    // if(previous != $("#sub").val()){
    //     search = $("#sub").val();
    //after = " ";
    apiURL = "https://www.reddit.com/r/" + search + ".json?after=";
    fetch(apiURL)
        .then(response => response.json())
        .then(function (data) {
            memeDisplay.empty();
            var stuff = data;
            after = stuff.data.after;
            console.log(after);
            console.log(stuff);
            console.log(apiURL);
            for (var i = 0; i < stuff.data.children.length; i++) {
                if (stuff.data.children[i].data.post_hint === "image") {
                    var memeHolder = $("<div>");
                    memeHolder.attr("id", "meme");
                    var image = new Image();
                    image.src = stuff.data.children[i].data.url;
                    memeHolder.append(image);
                    memeDisplay.append(memeHolder);
                }
            }
        })
    };



//onclick="window.location.href='./youtube.html'"
 <div class="input-group input-group-rounded padding-3">
         <input id="sub" class="input-group-field" type="search" />
         <div class="input-group-button">
           <input id="search" onclick="window.location.href='./meme.html'" type="search" class="button secondary"/>
         </div>
       </div>

});