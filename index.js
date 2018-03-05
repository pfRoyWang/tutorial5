var dispDiv = document.getElementById("display"),
    st1 =document.getElementById("st1"),
    st2 =document.getElementById("st2"),
    imgSrc = null,
    stInp = document.getElementById("stickerUrl"),
    stC=document.getElementById("cursor"),
    height =document.getElementById("height")
    ;
    

document.getElementById("bgcolor").addEventListener("change",function(){
    dispDiv.style.backgroundColor = this.value; 
});

st1.addEventListener("click",function(){
    imgSrc = "img/1.png";
    stC.src =imgSrc;
});

st2.addEventListener("click",function(){
    imgSrc = "img/2.png";
    stC.src =imgSrc;
});

dispDiv.addEventListener("click",function(ev){
    var newImg = document.createElement("img");
    newImg.src = imgSrc;
    newImg.className ="displayStickers";
    dispDiv.appendChild(newImg);    
    console.log(ev.pageX,ev.pageY);
    newImg.style.left =ev.pageX+"px";
    newImg.style.top = ev.pageY+"px";
});

document.getElementById("height").addEventListener("keyup",function(ev){
    if(ev.keyCode == 13){
        var hei = height.value;
        hei = parseInt(hei);
        console.log(hei);
        document.getElementsByClassName("displayStickers")[0].style.height = hei+"px";
    }
});

stInp.addEventListener("keyup",function(ev){
    if(ev.keyCode==13){
        var newSti = document.createElement("img");
        newSti.src = stInp.value;
        newSti.className ="stickers";
        document.getElementById("stickers").appendChild(newSti);
        stInp.value = "";
        newSti.addEventListener("click",function(){
            changeImg(this);
        });
    }
});

dispDiv.addEventListener("mousemove",function(ev){
    stC.style.top =ev.pageY+"px";
    stC.style.left =ev.pageX+"px";
});

function changeImg(el){
    imgSrc=el.src;
    stC.src = imgSrc;
};