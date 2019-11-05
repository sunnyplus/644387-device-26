var sliderButton = document.querySelectorAll(".slider-indicators label"),
    sliders = document.querySelectorAll(".slider-wrapper"),
    modalCloseMap = document.querySelector(".map-modal .modal-close"),
    modalCloseWrite = document.querySelector(".writeus-modal .modal-close"),
    mapModal = document.querySelector(".map-modal"),
    writeModal = document.querySelector(".writeus-modal"),
    map = document.querySelector(".map"),
    writeus = document.querySelector(".contacts .button"),
    writeusButton = document.querySelector(".writeus-modal button"),
    nameInput = document.querySelector('#name'),
    emailInput = document.querySelector('#email'),
    messageInput = document.querySelector('#message'),
    serviceMenuLinks = document.querySelectorAll(".service-menu a"),
    mainMenu = document.querySelector(".main-menu"),
    catalogNav = document.querySelector(".catalog-nav"),
    sliderIndicators = document.querySelectorAll(".slider-indicators label"),
    sliderInputs = document.querySelectorAll(".slider-indicators input"),
    serviceConditions = document.querySelectorAll(".service-conditions"),
    itemButtons = document.querySelectorAll(".item-buttons button");

if(modalCloseMap){
    modalCloseMap.addEventListener('click', function(evt){
        evt.preventDefault();
        mapModal.classList.add('hidden');
    });
}
if(modalCloseWrite){
    modalCloseWrite.addEventListener('click', function(evt){
        evt.preventDefault();
        writeModal.classList.add('hidden');
    });
}
if(map){
    map.addEventListener('click', function(evt){
        evt.preventDefault();
        mapModal.classList.remove('hidden');
    });
}
if(writeus){
    writeus.addEventListener('click', function(evt){
        evt.preventDefault();
        writeModal.classList.remove('hidden');
    });
}
if(writeusButton){
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
}
// сервис меню
for(var i=0; i<serviceMenuLinks.length; i++){
    serviceMenuLinks[i].addEventListener('click',function(evt){
        evt.preventDefault();
        for(var j=0; j<serviceMenuLinks.length; j++){ //remove active class
            serviceMenuLinks[j].classList.remove("active");
        }
        this.classList.add("active"); // add active class
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
    catalogNav.classList.toggle("hidden");
});

for(var i=0; i<sliderIndicators.length; i++){ // click on indicator
    sliderIndicators[i].addEventListener('click',function(){
        for(var j=0;j<sliders.length;j++){
            sliders[j].classList.add("hidden");
        }
        var slider = document.querySelector("article[data-slider='"+ this.htmlFor +"']");
        slider.classList.remove("hidden");
        document.querySelector(".slide-number").innerHTML = this.htmlFor;
    });
}

for(var i=0; i<sliderInputs.length; i++){ // enter on indicator
    sliderInputs[i].addEventListener('keydown',function(e){
        if(e.keyCode == 13){
            for(var j=0;j<sliders.length;j++){
                sliders[j].classList.add("hidden");
            }
            var slider = document.querySelector("article[data-slider='"+ this.id +"']");
            slider.classList.remove("hidden");
            document.querySelector(".slide-number").innerHTML = this.id;
        }
    });
}

for(i=0;i<itemButtons.length;i++){
    itemButtons[i].addEventListener('focusin',function(evt){
        evt.preventDefault();
        this.parentNode.style.opacity = 1;
    });
}
for(i=0;i<itemButtons.length;i++){
    itemButtons[i].addEventListener('focusout',function(evt){
        evt.preventDefault();
        this.parentNode.style.opacity = 0;
    });
}