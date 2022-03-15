function preload()
{

}

function filter_tint()
 {
     tint_color = document.getElementById("shape").value;

 }

 
 function setup()
 {
     canvas = createCanvas(700,450);
     canvas.position(110,200);
     video = createCapture(VIDEO);
     video.hide();

     tint_color = "";
 }

 function draw()
 {
     image(video, 0,0,700,450);
     tint(tint_color);

 }

 function take_snapshot()
 {
     save('class_113_prjct.png');

 }

 