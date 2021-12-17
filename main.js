song1="";
song2="";
function preload(){
song1=loadSound("Permission to Dance.mp3");
song2=loadSound("bad habits.mp3");

}
function setup(){
    canvas=creatCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
image(video,0,0,600,500);
}