noseX=0;
noseY=0;
difference=0;
leftwristX=0;
rightwristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(450,450);
    canvas.position(550,75)

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotResults);

    
}

function modelLoaded(){
    console.log('poseNet has been initialised ')

}

function gotResults(results){
console.log(results);
noseY=results[0].pose.nose.y;
noseX=results[0].pose.nose.x;
leftwristX=results[0].pose.leftWrist.x;
rightwristX=results[0].pose.rightWrist.x;
difference=floor(leftwristX-rightwristX);
console.log(noseX,noseY);
console.log(rightwristX,leftwristX,difference);

}

function draw(){
    background("grey");
    text("Aarush",noseX,noseY);
    textSize(difference);
    fill("#000000")
}