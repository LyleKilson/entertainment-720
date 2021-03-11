var memeBtn = $("#search");
var memeDisplay = $("#meme-display");
var search = $("#sub").val();
var after = " ";

memeBtn.on("click", function () {
    var previous = search;
    console.log($("#sub").val());
    if(previous != $("#sub").val()){
        search = $("#sub").val();
        after = " ";
    }
    apiURL = "https://www.reddit.com/r/" + search + ".json?after=" + after;
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
        });
    });