var sliderButton=document.querySelectorAll(".slider-indicators label"),sliders=document.querySelectorAll(".slider-wrapper"),modalCloseMap=document.querySelector(".map-modal .modal-close"),modalCloseWrite=document.querySelector(".writeus-modal .modal-close"),mapModal=document.querySelector(".map-modal"),writeModal=document.querySelector(".writeus-modal"),map=document.querySelector(".map"),writeus=document.querySelector(".contacts .button"),writeusButton=document.querySelector(".writeus-modal button"),nameInput=document.querySelector("#name"),emailInput=document.querySelector("#email"),messageInput=document.querySelector("#message"),serviceMenuLinks=document.querySelectorAll(".service-menu a"),mainMenu=document.querySelector(".main-menu"),catalogNav=document.querySelector(".catalog-nav"),sliderIndicators=document.querySelectorAll(".slider-indicators label"),sliderInputs=document.querySelectorAll(".slider-indicators input"),serviceConditions=document.querySelectorAll(".service-conditions"),itemButtons=document.querySelectorAll(".item-buttons button");modalCloseMap&&modalCloseMap.addEventListener("click",function(e){e.preventDefault(),mapModal.classList.add("hidden")}),modalCloseWrite&&modalCloseWrite.addEventListener("click",function(e){e.preventDefault(),writeModal.classList.add("hidden")}),map&&map.addEventListener("click",function(e){e.preventDefault(),mapModal.classList.remove("hidden")}),writeus&&writeus.addEventListener("click",function(e){e.preventDefault(),writeModal.classList.remove("hidden")}),writeusButton&&writeusButton.addEventListener("click",function(e){e.preventDefault(),nameInput.value&&emailInput.value&&messageInput.value?writeModal.classList.add("hidden"):(writeModal.classList.add("modal-error"),setTimeout(function(){writeModal.classList.remove("modal-error")},1e3))});for(var i=0;i<serviceMenuLinks.length;i++)serviceMenuLinks[i].addEventListener("click",function(e){e.preventDefault();for(var t=0;t<serviceMenuLinks.length;t++)serviceMenuLinks[t].classList.remove("active");this.classList.add("active");for(var i=0;i<serviceConditions.length;i++)serviceConditions[i].classList.add("hidden"),serviceConditions[i].classList.contains(this.dataset.service)&&serviceConditions[i].classList.remove("hidden")});mainMenu.addEventListener("click",function(e){e.preventDefault(),catalogNav.classList.toggle("hidden")});for(i=0;i<sliderIndicators.length;i++)sliderIndicators[i].addEventListener("click",function(){for(var e=0;e<sliders.length;e++)sliders[e].classList.add("hidden");document.querySelector("article[data-slider='"+this.htmlFor+"']").classList.remove("hidden"),document.querySelector(".slide-number").innerHTML=this.htmlFor});for(i=0;i<sliderInputs.length;i++)sliderInputs[i].addEventListener("keydown",function(e){if(13==e.keyCode){for(var t=0;t<sliders.length;t++)sliders[t].classList.add("hidden");document.querySelector("article[data-slider='"+this.id+"']").classList.remove("hidden"),document.querySelector(".slide-number").innerHTML=this.id}});for(i=0;i<itemButtons.length;i++)itemButtons[i].addEventListener("focusin",function(e){e.preventDefault(),this.parentNode.style.opacity=1});for(i=0;i<itemButtons.length;i++)itemButtons[i].addEventListener("focusout",function(e){e.preventDefault(),this.parentNode.style.opacity=0});