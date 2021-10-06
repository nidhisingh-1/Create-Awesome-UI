window.addEventListener("load",function(){
    const sounds=document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual=document.querySelector(".visual");
    const colors=[
        "#60d394",
        "#d36060",
        "#c060d0",
        "#d3d130",
        "#6860d3",
        "#81d360"
    ];
    pads.forEach((pad,index) =>{
        pad.addEventListener("click",function(){
            sounds[index].currentTime=0;
            sounds[index].play();
            createbubbles(index);
        });
    });

    const createbubbles=(index)=>{
        const bubble=document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor=colors[index];
        bubble.style.animation="jump 1s ease";
        bubble.addEventListener("animationend",function(){
            visual.removeChild(this);
        })
    };
});