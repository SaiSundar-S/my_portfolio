document.addEventListener("DOMContentLoaded",function(){
    
    let openMenu = document.getElementById("hamburger-button");
    let closeMenu = document.querySelector(".navClose");
    let mobileMenu = document.getElementById("mobiletogglemenu");

    // Open Mobile Menu
    openMenu.addEventListener("click", function () {
        mobileMenu.classList.toggle("show-toggle-menu");
        document.body.classList.toggle("stopscrolling");

      
        document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
        document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
        document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
    });

    // Close Mobile Menu
    closeMenu.addEventListener("click", function () {
        mobileMenu.classList.remove("show-toggle-menu");
        document.body.classList.remove("stopscrolling");

   
        document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
        document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
        document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
    });

    // Close menu when clicking on a menu item
    function hidemenubyli() {
        mobileMenu.classList.remove("show-toggle-menu");
        document.body.classList.remove("stopscrolling");


        document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
        document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
        document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
    }

    const mobileMenuItems = document.querySelectorAll(".mobile-navbar-tabs-li a");
    mobileMenuItems.forEach(item => {
        item.addEventListener("click", hidemenubyli);
    });
    


    const universe=document.body;
    const numberOfStars=200;

    for(let i=0;i<numberOfStars;i++){
        const star=document.createElement("div");
        star.classList.add("star");
        universe.appendChild(star);
   

    const randomX=Math.random()*universe.offsetWidth;
    const randomY=Math.random()*universe.offsetHeight;
    star.style.left=`${randomX}px`;
    star.style.top=`${randomY}px`;
    star.style.zIndex="0";
    }


  // Highlight the active menu item based on scroll position
const sections=document.querySelectorAll("section");
const navList=document.querySelectorAll(".navbar-tabs-ul");
const items=["home","about","skills","projects","contact"];
const mobilenavLi=document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");

items.forEach((item,i)=>{
  const el=document.createElement("a");
  el.innerText=item;
  el.classList.add("menu-items");
  el.setAttribute("id",`menu-${i + 1}`);
  el.href=`#section${i + 1}`;
  navList.appendChild(el);

  const li= document.createElement("li");
  li.classList.add("menu-list");
  li.appendChild(el);
  li.setAttribute("id",`${i+1}`);
  navList.appendChild(li);
});

//Make Nav Active when Clicked and scrolls down to section
document.addEventListener("click",function(event){
    let active=document.querySelector("menu-list.active");
    if(active)active.classList.remove("active");
    if(event.target.classList.contains("menu-list")){
        event.target.classList.add("active");
        window.location.href="#section"+event.target.dispatchEvent;
    }
});


document.getElementById('contact-form').addEventListener('submit',function(event){
   event.preventDefault();

   const formData=new FormData(this);

   fetch ('submit_form.php',{
    method:'POST',
    body:formData
   })
   .then(response=>response.json())
   .then(data=>{
    const successMessage=document.getElementById('success-message');
    if(data.success){
        successMessage.classList.remove('hidden');
        successMessage.textContent='Form submitted successfully!';
    }else{
        successMessage.classList.remove('hidden');
        successMessage.textContent='Failed to submit the form.Please try again.';
    }
   })
   .catch(error=>{
    console.error('Error:',error);
    const successMessage=document.getElementById('success-message');
    successMessage.classList.remove('hidden');
    successMessage.textContent='An error occured. Please try again later.';
   });
});

const contactForm=document.getElementById('contact-form');
if(contactForm){
    contactForm.addEventListener('submit',function(event){
        event.preventDefault();

        const formData=new FormData(this);

        fetch('submit_form.php',{
            method:'POST',
            body:formData
        })
        .then(response=> response.json())
        .then(data=>{
            const successMessage=document.getElementById('success-message');
            if(data.success){
                successMessage.classList.remove('hidden');
                successMessage.textContent='Form submitted successfully'
            }else{
                successMessage.classList.remove('hidden');
                successMessage.textContent='Failed to submit the form. Please try again.';
            }

            
        })
        .catch(error=>{
            console.error('Error:',error);
            const successMessage=document.getElementById('success-message');
            successMessage.classList.remove('hidden');
            successMessage.textContent='An error occurred.Please try again later.';
            
        });
    });

}else{
    console.error("Contact form not found");
}

});


//cursor design

$(document).mousemove(function(e){
    $("#cursor").css({
        left:e.pageX +"px",
        top:e.pageY+"px"
    });
    $("#cursorFollow").css({
        left:e.pageX+"px",
        top:e.pageY+"px"
    });
});

//navbar responsiveness

// let openMenu=document.querySelector(".navOpen");
// let closeMenu=document.querySelector(".navClose");
// let navigation=document.querySelector(".menu");

// // change "right" for the side you hide the menu
// //when open button clicked: set the menu style side to 0 showing it

// open.Menu.addEventListener("click",()=>{
//     navigation.style.right="-100%";
// });

// //when close button clicked: set the menu style side to -100% hiding again
// closeMenu.addEventListener("click",()=>{
//     navigation.style.right="-100%";
// });

// navbar responsiveness ends here 

// navbar activity 

// Toggle the mobile menu visibility and animation

function hamburgerMenu(){
    document.body.classList.toggle("stopscrolling");
    document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
    document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
    document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
    document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}


function hidemenubyli(){
    document.body.classList.remove("stopscrolling");
    document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
    document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
    document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
    document.getElementById("burger-bar3").classList.remove("hamburger-animation3");

}

const mobileMenuItems = document.querySelectorAll(".mobile-navbar-tabs-ul li a");
    mobileMenuItems.forEach(item => {
        item.addEventListener("click", hidemenubyli);
    });
//ends

const inputs=document.querySelectorAll(".input");
function focusFunc(){
    let parent=this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent= this.parentNode;
    if(this.value==""){
        parent.classList.remove("focus");
    }

    inputs.forEach((input)=>{
        input.addEventListener("focus",focusFunc);
        input.addEventListener("blur",blurFunc);
    });
}

//resume link

function openURL(){
    window.location.href="#";
}