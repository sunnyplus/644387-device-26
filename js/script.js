var sliderButton = document.querySelectorAll(".slider-indicators label"),
    sliders = document.querySelectorAll(".slider-wrapper"),
    modalCloseMap = document.querySelector(".map-modal .modal-close"),
    modalCloseWrite = document.querySelector(".writeus-modal .modal-close"),
    mapModal = document.querySelector(".map-modal"),
    writeModal = document.querySelector(".writeus-modal"),
    map = document.querySelector(".map"),
    writeus = document.querySelector(".contacts button");

modalCloseMap.addEventListener('click', function(evt){
    evt.preventDefault();
    mapModal.classList.add('hidden');
});
modalCloseWrite.addEventListener('click', function(evt){
    evt.preventDefault();
    writeModal.classList.add('hidden');
});
map.addEventListener('click', function(evt){
    evt.preventDefault();
    mapModal.classList.remove('hidden');
});
writeus.addEventListener('click', function(evt){
    evt.preventDefault();
    writeModal.classList.remove('hidden');
});
// for(elm of sliderButton){
//     elm.addEventListener("click", function(){
//         var slider = this.htmlFor;
//         for(elm of sliders){
//             if(!elm.classList.contains("hidden")){
//                 elm.classList.add("hidden");
//             }
//         }
//         var currentSlider = document.querySelector("article[data-slider=" + slider + "]").classList.remove("hidden");
//     });
// }