function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 240);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 230, 150, 220, 200);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(590, 50, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(590, 430, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 430, 80);

    fill(0, 180, 0);
    stroke(0, 180, 0);
    rect(90, 37.5, 460, 25,);

    fill(0, 180, 0);
    stroke(0, 180, 0);
    rect(90, 417.5, 460, 25);

    fill(0, 180, 0);
    stroke(0, 180, 0);
    rect(41, 90, 20, 300,);

    fill(0, 180, 0);
    stroke(0, 180, 0);
    rect(579.5, 90, 20, 300,);

}

function take_snapshot(){
    save("snapshot.png")
}

