var uri = "file:///C:/Users/User/Desktop/entertainment-720/index.html"

var cID = document.querySelector("#client").value;
var secret = document.querySelector("#secret").value;
var loginBtn = document.querySelector("#login");
loginBtn.addEventListener("click", function() {
    authRequest(cID);
})
var authRequest = function(i) {
    localStorage.setItem("client_id", cID);
    localStorage.setItem("client_secret", secret);
    var url = "https://accounts.spotify.com/authorize";
    url += "?client_id=" + i;
    url += "&response_type=code";
    url += "&redirect_uri=" + uri;
    url += "&scope=user-read-recently-played ugc-image-upload user-library-read"
    
    alert(url);
};

//Spotify end