function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    circle(10, 10, 20);
    rect(30, 20, 55, 55, 20);
}

function take_snapshot(){
    save('stundent_name.png');
}

function filter_tint()
{
    tint_color= document.getElementById("color_name").value;
}