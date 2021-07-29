// Using  tippyjs for tooltip
tippy('.wifi', {
    content: `Don't expect much! I'm an OS inside browser :D`,
  });
  tippy('.battery', {
    content: `Battery? why you need to know that?:D`,
  });  

document.querySelector(".name").addEventListener('click',(e)=>{
    e.currentTarget.innerText="";
})
document.querySelector(".continue").addEventListener('click',(e)=>{
    document.documentElement.requestFullscreen()
    .then(()=>{
        $(".userRegister").fadeOut("slow");
        setTimeout(() => {
            $(".bod").fadeOut("slow");
        },100);
    })
})

$("#start").click(function(){
     $(".startmenu")[0].classList.toggle('visible');
})
$("#vscode").click(function(){
    console.log("vs code clicked")
    $(this).addClass("selectedtask")
    let newframe=createiframe("vscode","https://github1s.com/Warrioravi/MySheet");
    $("body").append(newframe);
})


function createiframe(name,url){
    let rv=document.createElement("div");
    rv.innerHTML=`<div class="frametop">
    <div class="framedetails">
        <div class="frameicon"><img src="/assets/${name}.png" height="25px"></div>
        <div class="framename">${name}</div>
    </div>
    <div class="framecontrols">
        <div class="frameminimize" style="padding-bottom: 10px;" >__</div>
       
        <div class="frameresize"><img src="/assets/minimize.png" height="20px" width="20px" alt="" srcset=""></div>
        <div class="frameclose"><img src="/assets/close.png" height="14px" alt="" srcset=""></div>
    </div>
</div>
<div class="framecontent">
   <iframe id="gitframe" src="${url}" frameborder="0"></iframe>
</div>`;
rv.classList.add("frame");
rv.querySelector(".frameclose").addEventListener('click',()=>{
    rv.remove();
})
rv.querySelector(".frameresize").addEventListener('click',(e)=>{
    rv.classList.toggle("smallwindow");
    if(e.currentTarget.innerHTML==`<img src="/assets/minimize.png" height="20px" width="20px" alt="" srcset="">`){
        e.currentTarget.innerHTML=`<img src="/assets/maximize.png" height="17px"  alt="" srcset="">`
        dragElement(rv);
    }
    else{
        e.currentTarget.innerHTML=`<img src="/assets/minimize.png" height="20px" width="20px" alt="" srcset="">`
    }

    
})
return rv;
}
//  ###################### code for frame dragability ###################


function dragElement(elmnt) {
     var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
     document.querySelector(".frametop").onmousedown = dragMouseDown;


  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
// ########################## context ###############################
$(document).bind("contextmenu",function(e){
    e.preventDefault();
    $("#cntnr").css("left",e.pageX);
    $("#cntnr").css("top",e.pageY);       
    $("#cntnr").fadeIn(200,startFocusOut());      
  });
  
  function startFocusOut(){
    $(document).on("click",function(){
    $("#cntnr").hide();        
    $(document).off("click");
    });
  }

  //windows hover effect
  document.querySelectorAll(".win-btn").forEach((b) => {
    console.log(b);
    b.onmouseleave = (e) => {
      e.target.style.background = "rgba(155, 155, 155, 0.1)";
      e.target.querySelector("img").style.background="transparent";
      e.target.style.borderImage = null;
    };
  
    b.addEventListener("mousemove", (e) => {
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left; //x position within the element.
      const y = e.clientY - rect.top; //y position within the element.
      e.target.style.background = `radial-gradient(circle at ${x}px ${y}px , rgba(255,255,255,0.2),rgba(255,255,255,0) )`;
      e.target.style.borderImage = `radial-gradient(20% 75% at ${x}px ${y}px ,rgba(255,255,255,0.7),rgba(255,255,255,0.1) ) 1 / 1px / 0px stretch `;
    });
  });

  //Event  handlers fro start menu tiles
  $("#play-wb1").click(function () 
  {
    let newframe=createiframe("aviator","https://tympanus.net/Tutorials/TheAviator/");
    $("body").append(newframe);

  })
 
 
 
  $("#play-wb2").click(function(){
    let newframe=createiframe("triggerrally","https://codeartemis.github.io/TriggerRally/server/public/");
    $("body").append(newframe);
  })
  $("#play-wb3").click(function(){
    let newframe=createiframe("tictactoe","https://nullllpointeerrr.github.io/JavaScript-Tic-Tac-Toe/");
    $("body").append(newframe);
  })
  $("#play-wb4").click(function(){
    let newframe=createiframe("onoff","https://js13kgames.com/games/onoff/index.html");
    $("body").append(newframe);
  })
  $("#play-wb5").click(function(){
    let newframe=createiframe("everyonessky","https://js13kgames.com/games/everyones-sky/index.html");
    $("body").append(newframe);
  })
  $("#play-wb6").click(function(){
    let newframe=createiframe("hellorun","http://oatthegoat.co.nz/");
    $("body").append(newframe);
  })
  
// var city="Delhi";


// function get(city){
// fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=c371e679253980ec1ec3b83a05d197d5')
// .then(response => response.json())
// .then((data)=>{
// console.log(data);
// }

// )

// .catch(err => alert("Wrong city name!"));
// }
// get(city);
  




