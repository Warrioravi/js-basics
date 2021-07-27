document.querySelector(".name").addEventListener('click',(e)=>{
    e.currentTarget.innerText="";
})
document.querySelector(".continue").addEventListener('click',(e)=>{
    document.documentElement.requestFullscreen()
    .then(()=>{
        $(".userRegister").fadeOut("slow");
        setTimeout(() => {
            $(".bod").fadeOut("slow");
        },12000);
    })
})

$("#start").click(function(){
     $(".startmenu")[0].classList.toggle('visible');
})
$("#vscode").click(function(){
    console.log("vs code clicked")
    let newframe=createiframe("camera","https://github1s.com/Warrioravi/MySheet");
    $("body").append(newframe);
})


function createiframe(name,url){
    let rv=document.createElement("div");
    rv.innerHTML=` <div class="frametop">
    <div class="framedetails">
        <div class="frameicon"><img src="/assets/${name}.png" height="25px" width="20px" alt="" srcset=""></div>
        <div class="framename">${name}</div>
    </div>
    <div class="framecontrols">
        <div class="frameminimize">_</div>
        <div class="frameresize">MI</div>
        <div class="frameclose">X</div>
    </div>
</div>
<div class="framecontent">
   <iframe id="gitframe" src="${url}" frameborder="0"></iframe>
</div>
</div>`;
rv.classList.add("frame");
rv.querySelector(".frameclose").addEventListener('click',()=>{
    rv.remove();
})
return rv;
}
