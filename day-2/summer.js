// top section image slider

let flag=0;

function controller(x){
    flag=flag+x;
    slideshow(flag)
}

slideshow(flag);
function slideshow(num){
    let slides=document.getElementsByClassName("slide");
     
    if(num==slides.length){
        flag=0;
        num=0;
    }
    if(num<0){
        flag=slides.length-1;
        num=slides.length-1;
    }

    for(let y of slides){
        y.style.display="none"
    }

    slides[num].style.display="block";
}


// brands image slider
let temp=0;

function mcontroller(m){
    temp=temp+m;
    brandsshow(temp)
}

brandsshow(temp);
function brandsshow(mum){
    let brandss=document.getElementsByClassName("brands");
     
    if(mum==brandss.length){
        temp=0;
        mum=0;
    }
    if(mum<0){
        temp=brandss.length-1;
        mum=brandss.length-1;
    }

    for(let y of brandss){
        y.style.display="none"
    }

    brandss[mum].style.display="block";
}