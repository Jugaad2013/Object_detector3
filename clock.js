img = "";
status1 = "";
objects = [];

function Back()
{
    window.location = "index.html";
}
function preload()
{
    img = loadImage('clock.jpg');
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
    objectDetector.detect(img, gotResult);
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

    if(status1 != "")
    {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(img, gotResult);
        for(i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            document.getElementById("identified_objects").innerHTML = "Number of objects detected are : "+ objects.length;
            
            fill(r,g,b);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " "+ percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}