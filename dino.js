img = "";
status1 = "";
objects = [];

function Back()
{
    window.location = "index.html";
}
function preload()
{
    img = loadImage('dino.jpg');
}
function setup()
{
    canvas = createCanvas(600, 600);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded()
{
    console.log("Model Loaded!");
    status1 = true;
    objectDetector.detect(video, gotResult);
}
function gotResult(error, results)
{
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}
function draw()
{
    image(img, 0, 0, 600, 600);
}