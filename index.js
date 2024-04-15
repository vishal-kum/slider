const slides= document.querySelectorAll(".slide")
var counter=0;
// console.log(slides)
slides.forEach(
    (slide,index)=>{
        slide.style.left=`${index*100}%`
    }
)
const gonext=()=>{
    if(counter<3){
    counter++
    slideImage()}
    else {
        counter=0
        slideImage()
    }
}
const goprev=()=>{
    counter--
    slideImage()
}
const slideImage =()=>{
slides.forEach(
    (slide)=>{
        slide.style.transform=`translateX(-${counter*100}%)`
    }
)
}