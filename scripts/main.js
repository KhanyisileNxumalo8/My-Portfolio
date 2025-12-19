
let images=["images.jpeg","img.jpeg"]

let index=0
setInterval(function() {
    index = (index + 1) % images.length;
    slider.src= images[index];
}, 2000);




document.getElementById("btn1").addEventListener("click", function(){
    
    if(document.getElementById("SKILLS").style.display==="none"){
        document.getElementById("SKILLS").style.display="block";}
        else{
            document.getElementById("SKILLS").style.display="none";
        }
});



document.getElementById("about").addEventListener("mouseover",function(){
    document.getElementById("abt").style.color="blue";
});
