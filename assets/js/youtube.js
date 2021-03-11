var apiKey = "AIzaSyCCfabIopzBCDJtcxPpKoS9DqGOkkcg0qg"
var items


function myFunction(){
    fetch (
        "https://www.googleapis.com/youtube/v3/search?q=cats&key=" + apiKey + "&maxResults=" + 3
        )
        .then(function(response){
            return response.json();
            // return response.json();
        })
        .then(function(response){
            for (var i = 0; i < response.length; i++){
            }
            // var resContainerEL = document.querySelector("#response-container")
            // var youtubeVid = document.createElement('video')
            // youtubeVid.setAttribute('https://www.youtube.com/embed/tpiyEe_CqB4?autoplay=1&origin', response.data)
            // resContainerEL.appendChild(youtubeVid)
            console.log(response.items)
            items = response.items
            
        })
        
}
var index = 0

function cycleFunction(){
    console.log(items[index])
    index = (index + 1) % items.length;
}
myFunction();