video = "";
status1 = "";
input = "";
object = [];
function setup(){
    canvas = createCanvas(380, 380);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function start()
{
    od = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    document.getElementById("number_of_objects").innerHTML = "Number of objects detected are:" + object.length;
    input = document.getElementById("status");
}
function modelloaded()
{
    console.log("modelloaded!")
    status1 = true;
}
function draw()
{
    image(video, 0, 0, 380, 380);
    if(status1!="")
    {
       objectDetector.detect(video, gotresult);
        for(i=0; i<object.length; i++){
            percent=floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%" ,object[i].x + 15 ,object[i].y + 15);
            fill("red");
            noFill();
            stroke("red");
            rect(object[i].x ,object[i].y ,object[i].width, object[i].height);
        }
    }
}
function gotresult(error ,results){

    if(error){

    console.log(error);
    }
    console.log(results);
    object=results;
}