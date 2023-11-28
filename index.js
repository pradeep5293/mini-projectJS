var rect = document.querySelector('#center');

rect.addEventListener('mousemove', function (details) {
    var rectlocation = rect.getBoundingClientRect();
    var insideRectVal = details.clientX - rectlocation.left;
    const rectMid = rectlocation.width / 2;

    if (insideRectVal < rectMid) {
        var redcolor = gsap.utils.mapRange(0, rectMid, 255, 0, insideRectVal);
        gsap.to(rect, { backgroundColor: `rgb(${redcolor},0,0)`,transition:2 });
    }else{
        var bluecolor = gsap.utils.mapRange(rectMid,rectlocation.width,0, 255, insideRectVal);
        gsap.to(rect, { backgroundColor: `rgb(0,0,${bluecolor})`,transition:1 });
    }
    rect.addEventListener("mouseleave",function(){
        gsap.to(rect,{backgroundColor:'white'})
    })
})