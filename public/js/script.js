const arrowUp = document.getElementById("arrowUp");
const arrowDown = document.getElementById("arrowdown");
const arrowLeft = document.getElementById("arrowleft");
const arrowRight = document.getElementById("arrowright");

arrowUp.addEventListener("mousedown", ()=>{
    const pink = document.getElementById("pink");
    pink.setAttribute("style","background-color : #ff3399;");
})
arrowUp.addEventListener("mouseup", ()=>{
    const pink = document.getElementById("pink");
    pink.setAttribute("style","background-color : #ff77a8;");
})
arrowDown.addEventListener("mousedown", ()=>{
    const yellow = document.getElementById("yellow");
    yellow.setAttribute("style","background-color : #ffeeaa;");
})
arrowDown.addEventListener("mouseup", ()=>{
    const yellow = document.getElementById("yellow");
    yellow.setAttribute("style","background-color : #ffed52;");
})
// arrowUp.addEventListener("mousedown", ()=>{
//     const pink = document.getElementById("pink");
//     pink.setAttribute("style","background-color : #dd99aa;");
// })
// arrowUp.addEventListener("mouseup", ()=>{
//     const pink = document.getElementById("pink");
//     pink.setAttribute("style","background-color : #ff77a8;");
// })

/*
const colors = ["red", "green", "blue", "yellow", "pink", "purple"];
let colorIndex = 0;

const changeColors = () => {
    const leds = document.querySelectorAll(".led");
    leds.forEach(led => {
        led.style.backgroundColor = colors[colorIndex];
    });
    colorIndex = (colorIndex + 1) % colors.length;
};

setInterval(changeColors, 5000);

// Initialize the colors immediately
//changeColors();
*/