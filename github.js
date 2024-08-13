document.addEventListener('DOMContentLoaded', function() {
    const fillDivs = document.querySelectorAll('.fill-div');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('filled');
            } else {
                entry.target.classList.remove('filled');
            }
        });
    }, observerOptions);

    fillDivs.forEach(div => {
        observer.observe(div);

    });
});
document.addEventListener('DOMContentLoaded', () => {
    let applyGradientEffect = (selected, colorgradient1, colorgradient2)=>{
        let gradientDiv = document.querySelector(selected)
    gradientDiv.addEventListener('mousemove', (e) => {
        const rect = gradientDiv.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.
        const width = 50; // Width of the ellipse.
        const height = 200; // Height of the ellipse.
        gradientDiv.style.background = `radial-gradient(${width}% ${height}% at ${x}px ${y}px, ${colorgradient1} ,${colorgradient2} )`;
    });
    }
    applyGradientEffect('.intro', 'rgb(82, 0, 60)','rgb(0, 0, 0)' )
    applyGradientEffect('.productivity','rgb(35, 90, 14)', 'rgb(0, 0, 0)' )
    applyGradientEffect(".security",'rgb(0, 123, 137)', 'rgb(0, 0, 0)')
    applyGradientEffect(".collaboration",'rgb(61, 31, 54)','rgb(0, 0, 0)')
});
function bendeffect(bendselect){
    document.querySelector(bendselect).addEventListener('mousemove', function(event) {
        const rect = this.getBoundingClientRect();
        const x = event.clientX - rect.left; // Get the horizontal coordinate
        const halfWidth = rect.width / 2;
    
        if (x < halfWidth) {
            // Hovering on the left side
            this.style.transform = 'perspective(50vw) rotateY(0.5deg)';
        } else {
            // Hovering on the right side
            this.style.transform = 'perspective(50vw) rotateY(-0.5deg)';
        }
    });
    document.querySelector(bendselect).addEventListener("mouseleave",function(){
        this.style.transform = "none"
    })
}
bendeffect(".side-div1")
bendeffect(".side-div2")
bendeffect(".side-div3")
bendeffect(".side-div4") 
bendeffect("#productivitydiv3")
bendeffect("#productivitydiv4")
bendeffect("#productivitydiv5")
bendeffect("#securitydiv1")
bendeffect("#securitydiv3")
bendeffect("#securitydiv4")
bendeffect("#securitydiv5")
bendeffect("#collaborationdiv4")
bendeffect("#collaborationdiv5")
bendeffect("#collaborationdiv6")
document.addEventListener('DOMContentLoaded', () => {
    let hovereff = (select,colorgradient1,colorgradient2)=>{
        let gradientDiv = document.querySelector(select)
    gradientDiv.addEventListener('mousemove', (e) => {
        const rect = gradientDiv.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.
        const width = 50; // Width of the ellipse.
        const height = 90; // Height of the ellipse.

        gradientDiv.style.background = `radial-gradient(${width}% ${height}% at ${x}px ${y}px, ${colorgradient1}, ${colorgradient2})`;
    });
    }
    hovereff(".side-div1",'rgb(234, 244, 255)', 'rgb(255, 255, 255)')
    hovereff(".side-div2",'rgb(234, 244, 255)', 'rgb(255, 255, 255)')
    hovereff(".side-div3",'rgb(234, 244, 255)', 'rgb(255, 255, 255)')
    hovereff(".side-div4",'rgb(234, 244, 255)', 'rgb(255, 255, 255)')
    hovereff("#productivitydiv3", 'rgb(31, 47, 21)','rgb(24, 24, 24)')
    hovereff("#productivitydiv4", 'rgb(31, 47, 21)','rgb(24, 24, 24)')
    hovereff("#productivitydiv5", 'rgb(31, 47, 21)','rgb(24, 24, 24)')
    hovereff("#securitydiv1",'rgb(26, 49, 57)', 'rgb(24, 24, 24)')
    hovereff("#securitydiv3",'rgb(26, 49, 57)', 'rgb(24, 24, 24)')
    hovereff("#securitydiv4",'rgb(26, 49, 57)', 'rgb(24, 24, 24)')
    hovereff("#securitydiv5",'rgb(26, 49, 57)', 'rgb(24, 24, 24)')
    hovereff("#collaborationdiv4",'rgb(47, 21, 41)', 'rgb(24, 24, 24)')
    hovereff("#collaborationdiv5",'rgb(47, 21, 41)', 'rgb(24, 24, 24)')
    hovereff("#collaborationdiv6",'rgb(47, 21, 41)', 'rgb(24, 24, 24)')
});
function addHoverEffect(targetSelector, divSelector) {
    let targetElement = document.querySelector(targetSelector);
    let hoverDiv = document.querySelector(divSelector);

    targetElement.addEventListener("mousemove", function(){
        hoverDiv.style.display = "flex"; // Make it visible
        setTimeout(() => {
            hoverDiv.classList.add("show");
        }, 10); // Add the show class with a slight delay to allow transition
    });

    hoverDiv.addEventListener("mouseleave", function(){
        hoverDiv.classList.remove("show");
        setTimeout(() => {
            hoverDiv.style.display = "none";
        }, 500); // Wait for the transition to end before hiding
    });
}

// Apply hover effect to multiple elements
addHoverEffect("#product", ".side-div1");
addHoverEffect("#solution", ".side-div2")
addHoverEffect("#opensource", ".side-div3")
addHoverEffect("#enterprise", ".side-div4")

function displaynone( targetSelector, divSelector ){
    targetSelector = document.querySelector(targetSelector)
    targetSelector.addEventListener("mouseover", function(){
        document.querySelector(".side-div1").style.display = "none"
        document.querySelector(".side-div2").style.display = "none"
        document.querySelector(".side-div3").style.display = "none"
        document.querySelector(".side-div4").style.display = "none"
        document.querySelector(divSelector).style.display = "flex"
    })
}
displaynone("#product", ".side-div1");
displaynone("#solution", ".side-div2")
displaynone("#opensource", ".side-div3")
displaynone("#enterprise", ".side-div4")

document.getElementById('searchbar4').addEventListener('input', function() {
    var searchValue = this.value;
    let inputsearch=document.querySelector("#inputofsearch")
    inputsearch.textContent = this.value
    var disappearDiv = document.querySelector('#option1');
    if (searchValue.trim() !== '') {
        disappearDiv.style.display = 'none';
        document.querySelector(".searchresult").style.display = "flex"
    } else {
        disappearDiv.style.display = 'block';;
        document.querySelector(".searchresult").style.display = "none"
    }
});


document.querySelector("#searchbar").addEventListener("click",function(){
    document.querySelector("#searchboxbackground").style.display ="flex"
    document.querySelector("#searchbox").style.display = "block"
})


document.querySelector("#searchboxbackground").addEventListener('click', function(event) {
    var div2 = document.querySelector("#searchbox");
    var rect = this.getBoundingClientRect(); // Get bounding rectangle of div1
    var isInDiv1 = event.clientX >= rect.left && event.clientX <= rect.right &&
                   event.clientY >= rect.top && event.clientY <= rect.bottom;

    if (isInDiv1) {
        this.style.display = 'none';
        div2.style.display = 'none';
    }
});

document.querySelector("#searchbox").addEventListener('click', function(event) {
    event.stopPropagation(); 
});

document.addEventListener("DOMContentLoaded", function() {
    function createScrollObserver(hiddenClass, visibleClass, threshold) {
        const observerOptions = {
            root: null, 
            rootMargin: "0px",
            threshold: threshold 
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(visibleClass);
                } else {
                    entry.target.classList.remove(visibleClass);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const hiddenElements = document.querySelectorAll(`.${hiddenClass}`);
        hiddenElements.forEach(el => observer.observe(el));
    }

    createScrollObserver('hidden', 'visible', 0.2);
});

document.addEventListener("DOMContentLoaded", function() {
    function createScrollObserver(hiddenClass, visibleClass, threshold) {
        const observerOptions = {
            root: null, 
            rootMargin: "0px",
            threshold: threshold 
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(visibleClass);
                } else {
                    entry.target.classList.remove(visibleClass);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const hiddenElements = document.querySelectorAll(`.${hiddenClass}`);
        hiddenElements.forEach(el => observer.observe(el));
    }

    createScrollObserver('hiddens', 'visibles', 0.2);
});


window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar3');
    
    // Check if scroll position is greater than the viewport height
    if (window.scrollY > window.innerHeight) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }

    // Check if scroll position is greater than the viewport height or less than or equal to 0
    if (window.scrollY > window.innerHeight || window.scrollY < 0) {
        document.querySelector('.scroll1').classList.add('textdeco');
    }
     else {
        document.querySelector('.scroll1').classList.remove('textdeco');
    }
    
    // Remove 'textdeco' class after scrolling 200vw
    if (window.scrollY > 2.8*window.innerWidth) {
        document.querySelector('.scroll1').classList.remove('textdeco');
        document.querySelector('.scroll2').classList.add('textdeco');
    }
    else{
        document.querySelector('.scroll2').classList.remove('textdeco');
    }
    if (window.scrollY > 5*window.innerWidth) {
        document.querySelector('.scroll2').classList.remove('textdeco');
        document.querySelector('.scroll3').classList.add('textdeco');
    }
    else{
        document.querySelector('.scroll3').classList.remove('textdeco');
    }
});


document.querySelector('.scroll1').addEventListener('click', function() {
    document.getElementById('symbol2').scrollIntoView({ behavior: 'smooth' });
  });
  document.querySelector('.scroll2').addEventListener('click', function() {
    document.getElementById('symbol3').scrollIntoView({ behavior: 'smooth' });
  });
  document.querySelector('.scroll3').addEventListener('click', function() {
    document.getElementById('symbol4').scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelector(".scroll").foreach(function(buttons){
    buttons.addEventListener("mousemove",function(){
        buttons
    })
  })