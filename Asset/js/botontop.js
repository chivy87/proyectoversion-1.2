
document.getElementById("botontop").addEventListener('click',scrollUp);

function scrollUp(){
    var currentScroll= document.documentElement.scrollTop;
    if (currentScroll>0){
        window.requestAnimationFrame(scrollUp)
        window.scrollTo(0, currentScroll-(currentScroll / 18));
    }
}

buttonUp = document.getElementById("botontop");

window.onscroll= function(){

    var scroll = document.documentElement.scrollTop;

    if (scroll > 200){
        buttonUp.style.transform= "scale(1)";
        
    } else if(scroll<200) {
        buttonUp.style.transform= "scale(0)";
    }
}
