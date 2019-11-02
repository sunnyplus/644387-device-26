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
    serviceMenuLinks = document.querySelectorAll(".service-menu a"),
    mainMenu = document.querySelector(".main-menu"),
    catalogNav = document.querySelector(".catalog-nav"),
    sliderIndicators = document.querySelectorAll(".slider-indicators label"),
    serviceConditions = document.querySelectorAll(".service-conditions");


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
for(var link of serviceMenuLinks){
    link.addEventListener('click',function(evt){
        evt.preventDefault();
        for(var elm of serviceMenuLinks){ //remove active class
            elm.classList.remove("active");
        }
        this.classList.add("active"); // add active class
        // console.log(this.dataset.service);
        for(var k=0;k<serviceConditions.length;k++){
            serviceConditions[k].classList.add("hidden");
            if(serviceConditions[k].classList.contains(this.dataset.service)){
                serviceConditions[k].classList.remove("hidden");
            }
        }
    });
}


mainMenu.addEventListener('click',function(evt){
    evt.preventDefault();
    catalogNav.classList.remove("hidden");
});



for(var i=0; i<sliderIndicators.length; i++){
    sliderIndicators[i].addEventListener('click',function(){
        for(var j=0;j<sliders.length;j++){
            sliders[j].classList.add("hidden");
        }
        var slider = document.querySelector("article[data-slider='"+ this.htmlFor +"']");
        slider.classList.remove("hidden");
        document.querySelector(".slide-number").innerHTML = this.htmlFor;
    })
}