var sliderButton = document.querySelectorAll(".slider-indicators label"),
    sliders = document.querySelectorAll(".slider-wrapper"),
    modalCloseMap = document.querySelector(".map-modal .modal-close"),
    modalCloseWrite = document.querySelector(".writeus-modal .modal-close"),
    mapModal = document.querySelector(".map-modal"),
    writeModal = document.querySelector(".writeus-modal"),
    map = document.querySelector(".map"),
    writeus = document.querySelector(".contacts button"),
    writeusButton = document.querySelector(".writeus-modal button"),
    nameInput = document.querySelector('#name'),
    emailInput = document.querySelector('#email'),
    messageInput = document.querySelector('#message'),
    serviceMenuLinks = document.querySelectorAll(".service-menu a");


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
writeusButton.addEventListener('click', function(evt){
    evt.preventDefault();
    if(!nameInput.value || !emailInput.value || !messageInput.value){
        writeModal.classList.add('modal-error');
        setTimeout(function(){
            writeModal.classList.remove('modal-error');
        },1000);
    }
    else{
        writeModal.classList.add('hidden');
    }
});
// сервис меню
for(link of serviceMenuLinks){
    link.addEventListener('click',function(evt){
        evt.preventDefault();
        for(elm of serviceMenuLinks){
            elm.classList.remove("active");
        }
        this.classList.add("active");
    });
}
    // link.classList.remove("active");

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