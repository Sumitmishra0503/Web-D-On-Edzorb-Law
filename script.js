let header = document.querySelector('.header');
let circle1 = document.querySelector('.circle1');
let circle2 = document.querySelector('.circle2');
let circle3 = document.querySelector('.circle3');
let circle4 = document.querySelector('.circle4');
let checkAllFeatures = document.querySelector('.checkAllFeatures');
let getStartedTodayCard = document.querySelector('.getStartedTodayCard');

window.onscroll = function() {
    if(window.scrollY > 500){
        header.style.position = "fixed";
    }
    else if(window.scrollY === 0){
        header.style.position = "relative";
    }
};

function handleCircleClick(clickedCircle, otherCircles) {
    clickedCircle.classList.replace("circle", "grayKardo");
    
    otherCircles.forEach(circle => {
        circle.classList.replace("grayKardo", "circle");
    });
}

circle1.addEventListener('click', function(){
    handleCircleClick(circle1, [circle2, circle3, circle4]);
});

circle2.addEventListener('click', function(){
    handleCircleClick(circle2, [circle1, circle3, circle4]);
});

circle3.addEventListener('click', function(){
    handleCircleClick(circle3, [circle1, circle2, circle4]);
});

circle4.addEventListener('click', function(){
    handleCircleClick(circle4, [circle1, circle2, circle3]);
});

getStartedTodayCard.addEventListener('mouseenter',function(){

    checkAllFeatures.style.color = "white";

});
getStartedTodayCard.addEventListener('mouseleave',function(){

    checkAllFeatures.style.color = "black";

});

let telegramSpecial = document.querySelector('.telegramSpecial');

function toggleOpacity() {
    let currentOpacity = parseFloat(window.getComputedStyle(telegramSpecial).opacity);

    // Toggle the opacity smoothly
    telegramSpecial.style.transition = 'opacity 0.5s'; // Adjust the transition duration as needed

    if (currentOpacity === 1) {
        telegramSpecial.style.opacity = "0";
    } else {
        telegramSpecial.style.opacity = "1";
    }
}

setInterval(toggleOpacity, 600);