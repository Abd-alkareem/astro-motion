//format the header minu
document.querySelector(".minu-btn").addEventListener("click", ()=>{
    document.querySelector(".minu-btn").classList.toggle("active");
    document.querySelector("header ul").classList.toggle("active");
})

document.querySelectorAll("header ul li").forEach((e)=>{
    e.addEventListener("click",()=>{
    document.querySelector(".minu-btn").classList.remove("active");
    document.querySelector("header ul").classList.remove("active");
    })
})


//format the gallery part
let img = document.querySelector(".gallery-carousel .img");
let imgWidth = img.clientWidth + 20;
let carousel = document.querySelector(".gallery-carousel");
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
window.onresize = () =>{
    imgWidth = img.clientWidth + 20;

}

document.querySelectorAll(".gallery-wapper i ").forEach((e)=>{
    e.addEventListener("click",()=>{
        e.classList.contains("i-right") ? carousel.scrollLeft+= imgWidth : carousel.scrollLeft-= imgWidth;
        setTimeout(()=>{
        if(carousel.scrollLeft >= scrollWidth - 10) {
            document.querySelectorAll(".gallery-wapper i ")[0].classList.add("full");
        
        }else{
         document.querySelectorAll(".gallery-wapper i ")[0].classList.remove("full");
        }
        if(carousel.scrollLeft <= 10){
        document.querySelectorAll(".gallery-wapper i ")[1].classList.add("full");
        }else{
         document.querySelectorAll(".gallery-wapper i ")[1].classList.remove("full");
        }
        },500)
    })
})