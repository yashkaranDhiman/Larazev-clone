let elemH4 = document.querySelectorAll("#center-nav h4");
let stLine = document.getElementById("st-line");
let h6 = document.querySelectorAll("h6");
let rightPart = document.querySelectorAll(".right-part");
let rightSide = document.getElementById("right-page2");
let cursor = document.getElementById("cursor");
let page3text = document.querySelector("#page3 h5");
let playBtn = document.getElementById("icon");
let video = document.querySelector("#page3 video");

const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});

function page1Animation(){
    elemH4.forEach((e)=>{
        e.addEventListener("mouseenter",()=>{
            console.log("object");
            gsap.to("#st-line",{
                y:"100px",
                height:10+"%",
                duration:.1,
            })
            gsap.to(h6,{
                opacity:.9,
                duration:1,
                delay:.3,
                y:30,
                stagger:0.01,
            })
        })
        e.addEventListener("mouseleave",()=>{
            gsap.to("#st-line",{
                y:"0",
                height:1+"%",
                duration:.3,
            })
            gsap.to(h6,{
                opacity:0,
            })
        })

    })
}
function page2Animation(){
    rightPart.forEach((e)=>{
        e.addEventListener("mouseenter",()=>{
            gsap.to(e.childNodes[3],{
                duaration:.1,
                opacity:1,
                scale:1,
            })
        })
        e.addEventListener("mouseleave",()=>{
            gsap.to(e.childNodes[3],{
                duaration:.1,
                opacity:0,
                scale:0,
            })
        })
        e.addEventListener("mousemove",(dets)=>{
            console.log("object");
            gsap.to(e.childNodes[3],{
                x: dets.x - e.getBoundingClientRect().x-50,
                y: dets.y - e.getBoundingClientRect().y-50
            })
        })
    })
}
function page3Animation(){
    playBtn.addEventListener("mouseenter",()=>{
        gsap.to(page3text,{
            y:-20,
            opacity:1,
        })
    })
    playBtn.addEventListener("mouseleave",()=>{
        gsap.to(page3text,{
            opacity:0,
            y:20,
        })
    })
}
function page3VideoAnimation(){
    playBtn.addEventListener("click",()=>{
        video.play();
        gsap.to(video,{
            transform: "scaleX(1) scaleY(1)",
            opacity:1,
            borderRadius:0,
        })
        video.addEventListener("Click",()=>{
            video.pause();
            gsap.to(video,{
                transform: "scaleX(0.7) scaleY(0)",
                opacity:0,
                borderRadius:30,
            })
        })
    })
}
function page7Cursor(){
    let image = document.querySelectorAll(".sec-right img");
    let cursor = document.getElementById("page7-cursor");
    let video = document.querySelectorAll(".sec-right video");

    image.forEach((e)=>{
        e.addEventListener("mouseenter",()=>{
            video.play()
            video.style.zIndex = 99;
            gsap.to(cursor,{
                transform: "scale(1)",
                duaration:2,
                opacity:1,
            })
        })
        e.addEventListener("mouseleave",()=>{
            video.pause()
            gsap.to(cursor,{
                transform: "scale(0)",
                duaration:2,
                opacity:0,
            })
        })
        e.addEventListener("mousemove",(dets)=>{
            let x = dets.x-85;
            let y = dets.y-150;
            gsap.to(cursor,{    
                x:x,
                y:y,
                opacity:1,
                duaration:1,
                scale:1,
            })
        })
    })
}
function page9Animation(){
    let btn = document.querySelector("#left-button button");
    console.log(btn);
    gsap.to(btn,{
        scrollTrigger:{
            trigger:btn,
            scroller:"main",
            markers:true,
            start: "top 80%",
            end: "top 10%",
        }
    })
}


page3VideoAnimation()
page1Animation()
page2Animation()
page3Animation()
page7Cursor()
page9Animation()