var comando=""
var reconocimiento=window.webkitSpeechRecognition
var microfono=new reconocimiento()
function setup(){
    canvas=createCanvas(windowWidth*0.8, windowHeight*0.8)
    background("white")
}
function draw(){
if(comando.includes("rectángulo")){
    rect(random(0,width),random(0,height),random(30,100),random(15,50))
}
if(comando.includes("círculo")){
    circle(random(0,width),random(0,height),random(30,100))
}
if(comando.includes("triángulo")){
    triangle(random(0,width),random(0,height),random(0,width),random(0,height),random(0,width),random(0,height))
}
comando=""
}
function grabar(){
microfono.start()
}
microfono.onresult=function (info){
    comando=info.results[0][0].transcript
    document.getElementById("mensaje").innerHTML=comando
}