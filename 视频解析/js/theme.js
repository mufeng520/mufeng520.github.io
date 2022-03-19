document.getElementById("sheet-b").addEventListener("click",function(){
    setStyleSheet("b")
});
document.getElementById("sheet-a").addEventListener("click",function(){
    setStyleSheet("a")
});
document.getElementById("sheet-d").addEventListener("click",function(){
    setStyleSheet("d")
});
document.getElementById("sheet-c").addEventListener("click",function(){
    setStyleSheet("c")
});
function setStyleSheet(title){
    var link_list=document.getElementsByTagName("link");
    if(link_list){
        for(var i=0;i<link_list.length;i++){
            if(link_list[i].getAttribute("rel").indexOf("style")!=-1){
                link_list[i].disabled=true;
                if(link_list[i].getAttribute("title")===title){
                    link_list[i].disabled=false
                }
            }
        }
    }
};