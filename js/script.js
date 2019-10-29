var sliderButton = document.querySelectorAll(".slider-indicators label"),
    sliders = document.querySelectorAll(".slider-wrapper");


for(elm of sliderButton){
    elm.addEventListener("click", function(){
        var slider = this.htmlFor;
        for(elm of sliders){
            if(!elm.classList.contains("hidden")){
                elm.classList.add("hidden");
            }
        }
        var currentSlider = document.querySelector("article[data-slider=" + slider + "]").classList.remove("hidden");
    });
}