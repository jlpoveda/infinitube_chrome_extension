// Checking page title
if (document.title.indexOf("YouTube") != -1) {
    var $span = document.getElementById("watch7-sentiment-actions");
    var btn=document.createElement("BUTTON");
    var t=document.createTextNode("View on Infinitube");
    btn.appendChild(t);
    $span.appendChild(btn);


    var $span = document.getElementById("watch7-sentiment-actions");
    var btn=document.createElement("BUTTON");
    var t=document.createTextNode("View on Infinitube");
    btn.appendChild(t);
    var s = document.createElement('SPAN');
    s.className='yt-uix-button-icon-wrapper';
    btn.appendChild(s);
    $span.appendChild(btn);
}

<span class="yt-uix-button-icon-wrapper">
    <img class="yt-uix-button-icon yt-uix-button-icon-watch-dislike" src="http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="No me gusta este vídeo" title="">
</span>