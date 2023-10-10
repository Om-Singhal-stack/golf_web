var crsr = document.querySelector("#cursor")
var crsr1 = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
  crsr.style.left = dets.x+"px"
  crsr.style.top = dets.y+"px" 
  crsr1.style.left = dets.x-200+"px"
  crsr1.style.top = dets.y-200+"px" 
})


gsap.to("#nav",{
  backgroundColor:"#000",
  duration:5,
  height:"90px",
  scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    // markers:true,
    start:"top -10%",
    end:"top -11%",
    scrub:2
  }
})

gsap.to("#main",{
  backgroundColor:"#000",
  scrollTrigger:{
    trigger:"#main",
    scroller:"body",
    // markers:true,
    start:"top -25%",
    end:"top -70%",
    scrub:2
  }
})
