
var uri = "https://lylekilson.github.io/entertainment-720/"

var cID = document.querySelector("#client").value;
var secret = document.querySelector("#secret").value;
var loginBtn = document.querySelector("#login");
loginBtn.addEventListener("click", function () {
    fetch("https://accounts.spotify.com/authorize/?client_id=1a19f0ddc9a544e0a44fae617aa52aa1&response_type=code&redirect_uri=file:///C:/Users/User/Desktop/entertainment-720/index.html");
})
var authRequest = function (i) {
    localStorage.setItem("client_id", cID);
    localStorage.setItem("client_secret", secret);
    var url = "https://accounts.spotify.com/authorize/";
    url += "?client_id=" + i;
    url += "&response_type=code";
    url += "&redirect_uri=" + uri;
    //url += "&scope=user-read-recently-playedugc-image-uploaduser-library-read"

    console.log(url);
    fetch(url)
        .then(function(response) {
            if (response.ok) {
                    response.json().then(function(data) {
                        displayRepos(data, user);
                    });
            } else {
            alert("Error: " + response.statusText);
            }
        })
    };