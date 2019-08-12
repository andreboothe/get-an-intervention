var slideIndex = 1;
showDivs(slideIndex);

function showDivs(n) {
  
  var i;
  slideIndex = n;
  var x = document.getElementsByClassName("testimontial__content");
  var buttons = document.getElementsByClassName("testimonial__slider");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    buttons[i].classList.remove("active");
  }
  x[slideIndex-1].style.display = "grid";
  buttons[slideIndex-1].classList.add("active");
}

const testimonials = document.querySelector(".testimonials");
function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  var width = testimonials.offsetWidth;
  
  var half=(width/2);
 if(x>half){
    showDivs(slideIndex + 1);
  } else  {
    showDivs(slideIndex - 1);
  }
}

testimonials.addEventListener("click", showCoords);

const servicesButton = document.querySelectorAll(".services_button");
const servicesDialog = [
  {
    subhead:"Needs Assessment",
    subtext:"We conduct a thorough pre-assessment which we use to choose the best intervention plan for you."
  },
  {
    subhead:"Treatment Planning & Placement",
    subtext:"Since every situation is unique, we make sure that the treatment is tailored to your specific needs."
  },
  {
    subhead:"Employment Advocacy",
    subtext:"We help with your employment situation so you can go back to providing for your loved ones."
  },
  {
    subhead:"Insurance Advocacy",
    subtext:"We are knowledgeable about insurance, and can help put your benefits to work for you. "
  },
  {
    subhead:"Transportation & Logistics",
    subtext:"We will organize and take care of all transpotation and logistics so that you focus on recovery."
  },
  {
    subhead:"Aftercare Planning",
    subtext:" We will build a customized follow-up plan to help you and your loved ones after the intervention has concluded."
  }
]

function createElementSubHead(txt){
  const ele = document.createElement("span");
  ele.textContent = txt;
  ele.classList.add("services_button--subhead");
  return ele;
}

function createElementStyledQuotes(symbol){
  const ele = document.createElement("span");
  ele.textContent = symbol;
  ele.classList.add("services_button--quote");
  return ele;
}

function createElementSubText(txt){
  const ele = document.createElement("span");
  ele.textContent = txt;
  ele.classList.add("services_button--subtext");
  return ele;
} 

function createElementBreak(txt){
  const ele = document.createElement("br");
  return ele;
}

function removeAllChildren(node){
  while (node.lastChild) {
    node.removeChild(node.lastChild);
  }
}

function transformButton(e,i){
  let clickedBtn = e.target;
  
  if(clickedBtn.classList.contains("services_button--subhead") || clickedBtn.classList.contains("services_button--subtext")){
    clickedBtn = clickedBtn.parentNode;
  }

  if(!clickedBtn.classList.contains("clicked")){
    clickedBtn.textContent = "";
    clickedBtn.appendChild(createElementSubHead( servicesDialog[i].subhead));
    clickedBtn.appendChild(createElementBreak());
    clickedBtn.appendChild(createElementSubText( servicesDialog[i].subtext));
    clickedBtn.classList.add("clicked");
  } else{
    removeAllChildren(clickedBtn);
    clickedBtn.textContent = servicesDialog[i].subhead;
    clickedBtn.classList.remove("clicked");
  }
  clickedBtn.classList.remove("hover");
}

function toggleHoverEffect(e){
  let btn = e.target;
  btn.classList.toggle("hover");
}
for(let i  = 0; i < servicesButton.length; i++){
  servicesButton[i].addEventListener("click", (event) =>  transformButton(event, i));
  servicesButton[i].addEventListener("mouseenter", toggleHoverEffect);
  servicesButton[i].addEventListener("mouseleave", toggleHoverEffect);
}

function myFunction() {
  var x = document.querySelector(".nav__bar");
  if (x.className === "nav__bar") {
    x.classList.add("responsive");
  } else {
    x.classList.remove("responsive");
  }
}