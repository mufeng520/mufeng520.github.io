function play(){
    var rul=document.getElementById("url").value;
    if(rul==""){
        alert("友情提示您：请输入要解析的视频链接地址")
    }else{
        var jxApi=document.getElementById("jk");
        var jxurl=document.getElementById("jk").selectedIndex;
        var jkv=jxApi.options[jxurl].value;
        var paly=document.getElementById("palybox");
        paly.src=jkv+rul;
        var tittext=document.getElementById("video-title");
        var xhr=getxhr();xhr.open("post","title.php",true);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send("titurl="+rul);
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4&&xhr.status==200){
                tittext.innerHTML=xhr.responseText;
                console.log(title.php)
            }
        };
        function getxhr(){
            var xhr=null;
            if(window.XMLHttpRequest){
                xhr=new XMLHttpRequest()
            }else{
                xhr=new ActiveXObject("Microsoft.XMLHttp")
            }
            return xhr
        }
    }
};
document.onkeydown=function(event){
    var e=event||window.event||arguments.callee.caller.arguments[0];if(e&&e.keyCode==13){
        play()
    }
}
