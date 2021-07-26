document.querySelector(".name").addEventListener('click',(e)=>{
    e.currentTarget.innerText="";
})
document.querySelector(".continue").addEventListener('click',(e)=>{
    document.documentElement.requestFullscreen()
    .then(()=>{
        $(".userRegister").fadeOut("slow");
        setTimeout(() => {
            $(".bod").fadeOut("slow");
        },10);
    })
})
