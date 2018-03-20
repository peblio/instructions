
const triangles = document.querySelectorAll('.triangle')
triangles.forEach(function(triangle,index){
triangle.animate([
 {transform:'scale(1)'},
 {transform:'scale(1.5)'},
 {transform:'scale(1)'}
],{
  delay:300*index,
  duration:3000,
  iterations:Infinity
})
})

function random(min,max){
  return Math.floor(Math.random()*(max-min+1))+min;
}

const zigs = document.querySelectorAll('.zig')
zigs.forEach(function(zig,index){
const randomNumber= random(0,45)
zig.animate([
 {transform:'rotate(0deg)'},
 {transform:`rotate(${randomNumber}deg)`},
 {transform:'rotate(0deg)'}
],{
  delay:300*index,
  duration:3000,
  iterations:Infinity
})
})

const rects = document.querySelectorAll('.rect')
rects.forEach(function(rects,index){
const randomNumber= random(0,45)
rects.animate([
 {transform:'rotate(0deg)'},
 {transform:`rotate(${randomNumber}deg)`},
 {transform:'rotate(0deg)'}
],{
  delay:300*index,
  duration:3000,
  iterations:Infinity
})
})
const bows = document.querySelectorAll('.bow')
bows.forEach(function(bows,index){
const randomNumber= random(0,45)
bows.animate([
 {transform:'rotate(0deg)'},
 {transform:'rotate(360deg)'}
],{
  delay:300*index,
  duration:6000,
  iterations:Infinity
})
})
//the inView library  https://github.com/camwiegert/in-view.  add class when in view port and remove it when not
inView('.section')
    .on('enter', section=> {
  section.classList.add('in-viewport')
})
    .on('exit', section => {
  section.classList.remove('in-viewport')
    });

inView.threshold(0.2);

//loop through the sections and then the elements in the sections to have them fade in at different times
const sections= document.querySelectorAll('.section')
sections.forEach((section,index)=>{
  const containers= section.querySelectorAll('.container');
  const shapes= section.querySelectorAll('.shape');

  containers.forEach((container,index)=>{
    const delay= index*100
    container.style.transition= delay+'ms'
  })

    shapes.forEach((shape,index)=>{
    const delay= (containers.length+ index)*100
    shape.style.transition= delay+'ms'
  })
})

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


// here we grab all our the .circles from the html
const circles = document.querySelectorAll('.circle')

// circles returns us an array so we need to loop through it
// inside of the forEach we get access to each individual element
// along with its index
circles.forEach((circle, index) => {
  // in here we get access to each one as 'circle'
  circle.animate([{transform: 'scale(1)'}, {transform: 'scale(1.2)'}, {transform: 'scale(1)'}], {
    // here we use the index to create a staggered animation delay
    delay: 300 * index,
    duration: 3000,
    iterations: Infinity
  })
})
