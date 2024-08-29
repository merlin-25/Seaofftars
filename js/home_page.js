var slides = [
    {
        slideIndex:1, 
        slideId:"slide1",
        pId:"slide1_p",
        prevId:"slide1_prev", 
        nextId:"slide1_next"
    },
    {
        slideIndex:1,
        slideId:"slide2", 
        pId:"slide2_p",
        prevId:"slide2_prev", 
        nextId:"slide2_next"
    }, 
    {
        slideIndex:1, 
        slideId:"slide3",
        pId:"slide3_p",
        prevId:"slide3_prev", 
        nextId:"slide3_next"
    },
    {
        slideIndex:1,
        slideId:"slide4",
        pId:"slide4_p",
        prevId:"slide4_prev", 
        nextId:"slide4_next"
    }
]

showSlides(0); 
showSlides(1); 
showSlides(2); 
showSlides(3); 

function addSlides(add, index)
{
    var num = slides[index].slideIndex + add; 
    let slide = document.getElementsByClassName(slides[index].slideId);
    if(num > slide.length)return; 
    if(num < 1)return; 
    else
    {
        slides[index].slideIndex = num; 
        showSlides(index)
    }
}

function showSlides(index)
{
    let slide = document.getElementsByClassName(slides[index].slideId);
    let p = document.getElementById(slides[index].pId)
    let prev = document.getElementById(slides[index].prevId)
    let next = document.getElementById(slides[index].nextId)
    let now = slides[index].slideIndex - 1;
    for(let i = 0; i < slide.length; i++)
    {
        slide[i].style.display = "none";
    }
    slide[now].style.display = "block";
    p.innerText = now + 1;
    if(now == 0)
    {
        prev.style.display = "none";
    }
    else
    {
        prev.style.display = "block";
    }
    if(now == (slide.length - 1))
    {
        next.style.display = "none";
    }
    else
    {
        next.style.display = "block";
    }
}