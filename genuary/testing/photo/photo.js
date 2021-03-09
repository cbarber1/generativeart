let img;

let looping = false;
function preload() {
  img = loadImage('jump1.png');
}

function setup() {
  createCanvas(img.width, img.height);
  console.log("bro");
img.loadPixels();
for (x = 0; x < img.width; x = x + 5) {
   for (y = 0; y < img.height; y = y + 5) {
      index = (floor(x) + floor(y) * img.width) * 4;
      red = img.pixels[index]
      blue = img.pixels[index + 1]
      green = img.pixels[index + 2]
      alpha = img.pixels[index + 3]
      //pixel_brightness = (red + blue + green) / 3
      strokeWeight(8 * Math.random())
      stroke(red, blue, green, alpha/(5 * Math.random()))
      //push();
      //rotate(random(PI*2));
      line(x + Math.random() * 40,y ,x + 50,y + 50 * Math.random());
      //pop();
    }
}
img.updatePixels();
}
