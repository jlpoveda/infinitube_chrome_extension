function getVideoid() {
    var links = document.getElementsByTagName('link');
    for (i=0; i<links.length; i++) {
        if (links[i].getAttribute("rel") == "shortlink") {
            return links[i].getAttribute("href").replace('http://youtu.be/', '');
        }
    }
    return false;
}
function loadImg() {
    var videoId = getVideoid();
    if (false != videoId && document.title.indexOf("YouTube") != -1) {
        var objDiv = document.getElementById("eow-title");
        var newImage = document.createElement("img");
        newImage.src = "http://beta.infinitube.com/img/infinitube-mini.png";
        newImage.onclick = function(){
            window.open(
                'http://beta.infinitube.com?v='+videoId,
                '_blank'
            );
        }
        newImage.style.cursor='pointer';
        newImage.style.height='18px';
        objDiv.insertBefore(newImage,objDiv.firstChild);
        objDiv.onchange=function(){loadImg()};
    }
}

window.onload = function() {
    loadImg();
}
var storedUrl = window.location.href;
window.setInterval(function () {
    if (window.location.href != storedUrl) {
        storedUrl = window.location.href;
        loadImg();
    }
}, 4000);