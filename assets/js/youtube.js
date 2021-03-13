var containerEl = document.getElementById('response-container')
var apiKey = "AIzaSyACi__Q5NjQoHp4bb7iccZgTk2FMPlfK1M"
var items = ["dogs", "birds", "horses"]
function random(array){
    var index = Math.floor(Math.random()*array.length)
    var element = array[index]
    return element
}

function myFunction(){
    var option = random(items)
    containerEl.innerHTML = ""
    fetch (
        "https://www.googleapis.com/youtube/v3/search?q="+option+"&key=" + apiKey + "&maxResults=" + 3
        )
        .then(function(response){
            return response.json();
            // return response.json();
        })
        .then(function(response){
            for (var i = 0; i < response.items.length; i++){
                var vidId = response.items[i].id.videoId
                console.log("ID", vidId)
                var iframeEl = document.createElement("iframe")
                iframeEl.setAttribute("src", `https://www.youtube.com/embed/${vidId}?autoplay=1&origin`)
                containerEl.append(iframeEl)
            }

            // <iframe id="ytplayer" type="text/html" width="640" height="360"
            //         src="https://www.youtube.com/embed/hY7m5jjJ9mM?autoplay=1&origin"
            //         frameborder="0">
            //     </iframe>

            // var resContainerEL = document.querySelector("#response-container")
            // var youtubeVid = document.createElement('video')
            // youtubeVid.setAttribute('https://www.youtube.com/embed/tpiyEe_CqB4?autoplay=1&origin', response.data)
            // resContainerEL.appendChild(youtubeVid)
            console.log(response)
            items = response.items
            
        })
        
}

myFunction();