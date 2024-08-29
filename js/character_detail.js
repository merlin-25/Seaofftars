var slides = [
    {
        slideIndex:1, 
        slideId:"slide1", 
        prevId:"slide1_prev", 
        nextId:"slide1_next"
    },
    {
        slideIndex:1,
        slideId:"slide2",
        prevId:"slide2_prev", 
        nextId:"slide2_next"
    }, 
    {
        slideIndex:1, 
        slideId:"slide3",
        prevId:"slide3_prev", 
        nextId:"slide3_next"
    },
    {
        slideIndex:1,
        slideId:"slide4", 
        prevId:"slide4_prev", 
        nextId:"slide4_next"
    }, 
    {
        slideIndex:1, 
        slideId:"slide5",
        prevId:"slide5_prev", 
        nextId:"slide5_next"
    }, 
    {
        slideIndex:1,
        slideId:"slide6",
        prevId:"slide6_prev", 
        nextId:"slide6_next"
    }
]

showSlides(0); 
showSlides(1); 
showSlides(2); 
showSlides(3);
showSlides(4); 
showSlides(5);

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
    let prev = document.getElementById(slides[index].prevId)
    let next = document.getElementById(slides[index].nextId)
    let now = slides[index].slideIndex - 1;
    for(let i = 0; i < slide.length; i++)
    {
        slide[i].style.display = "none";
    }
    slide[now].style.display = "block";
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