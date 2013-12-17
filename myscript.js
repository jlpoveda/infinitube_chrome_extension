// Checking page title
if (document.title.indexOf("YouTube") != -1) {
    var objDiv = document.getElementById("eow-title");
    var newImage = document.createElement("img");
    newImage.src = "http://beta.infinitube.com/img/infinitube-mini.png";
    newImage.onclick = function(){
        window.location = 'http://beta.infinitube.com?v='+ytplayer.config.args.video_id;
    }
    newImage.style.cursor='pointer';
    objDiv.insertBefore(newImage,objDiv.firstChild);
}