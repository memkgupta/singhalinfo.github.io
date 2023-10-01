const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links-2');
const scrollFun = (id)=>{
    const element = document.getElementById(id);
    element.scrollIntoView({behavior:"smooth"})
}
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
    
    // navLinks.classList.toggle('animate__animated animate__fadeInLeft');
});
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


window.addEventListener('scroll',()=>{
    // console.log(document.getElementById('service_cards'))
//    console.log(isElementInViewport(document.getElementById('service_cards')))
   

  if(isElementInViewport(document.getElementById('get_call_content'))){
        document.getElementById('get_call_content').classList.add('animate__animated','animate__slideInLeft');
        // document.getElementById('get_call_content').classList.remove('hidden')
        document.getElementById('get_call_card').classList.add('animate__animated','animate__slideInUp')
    }
  
})
// Close the menu when a link is clicked (optional)
document.querySelectorAll('.nav-links li a').forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

const textsToType = [
    "Welcome to Typing Effect!",
    "This is the second text.",
    "You can add more texts to the array.",
    "The typing effect will cycle through them."
  ];
  let isDataSet = false;
 function setData(){
    const total_clients = 1234;
    const total_projects = 1200;
    const total_experience = 10
   if(!isDataSet){
      let clients = 0;
      let project = 0;
      let experience = 0;
  document.getElementById('no_of_clients').innerText = clients;
      let count=  setInterval(()=>{
          document.getElementById('no_of_clients').innerText = clients+10;
         
          clients+=10;
        
          if(clients>=total_clients){
              clearInterval(count)
          }
              },10)
              let projects = setInterval(()=>{
                document.getElementById('total_projects').innerText = project+10;
                project+=10
                if(project>=total_projects){
                    clearInterval(projects);
                }
              },10);
              let experience_count = setInterval(()=>{
                document.getElementById('total_experience').innerText =experience+1;
               experience+=1
                if(experience>=total_experience){
                    clearInterval(experience_count);
                }
              },10)

   }
   isDataSet = true;
 }

window.addEventListener('scroll',setData)



const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
// const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];
let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});
// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});
// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");
// Add event listeners for the arrow buttons to scroll the carousel left and right
// arrowBtns.forEach(btn => {
//     btn.addEventListener("click", () => {
//         carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
//     });
// });
const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}
const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}
const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);







  