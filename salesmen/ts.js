var cities = [];
var totalCities = 22;

var population = [];
var fitness = [];

var popSize = 300;

var recordDistance = Infinity;
var bestEver;
var currentBest;

function setup() {
  var canvas = createCanvas(400, 600);
  canvas.parent("sketch-holder");
  var order = [];
  randomSeed(23542745);
  for (var i = 0; i<totalCities; i++) {
    var v = createVector(random(width), random(height/2));
    cities[i] = v;
    order[i] = i;
  }

  for (var i = 0; i< popSize; i++) {
    population[i] = shuffle(order);
    //shuffle(population[i], 100);
  }
  for (var i = 0; i < population.length; i++) {
    var d = calcDistance(cities, population[i]);
    if (d < recordDistance) {
      recordDistance = d;
      bestEver = population[i];
    }
    fitness[i] = d;
  }

  //var d = calcDistance(cities, order);
  //recordDistance = d;
  //bestEver = order.slice();

  //totalPermutations = factorial(totalCities);
  //console.log(totalPermutations);
}

function draw() {
  background(0);

  //GA

  calculateFitness();
  normalizeFitness();
  nextGeneration();

  stroke(255);
  strokeWeight(2);
  noFill();
  beginShape();
  for (var i = 0; i<bestEver.length; i++) {
    var n = bestEver[i];
    vertex(cities[n].x, cities[n].y);
    ellipse(cities[i].x, cities[i].y, 8,8);
  }
  endShape();

  translate(0, height / 2);
  stroke(255);
  strokeWeight(3);
  noFill();
  beginShape();
  for (var i = 0; i<currentBest.length; i++) {
    var n = currentBest[i];
    vertex(cities[n].x, cities[n].y);
    ellipse(cities[i].x, cities[i].y, 8,8);
  }
  endShape();

  /*stroke(255);
  strokeWeight(1.5);
  noFill();
  beginShape();

  for (var i = 0; i<order.length; i++) {
    var n = order[i];
    vertex(cities[n].x, cities[n].y);
  }
  endShape();*/

  /*stroke(255, 0 , 255);
  strokeWeight(3);
  noFill();
  beginShape();

  for (var i = 0; i<bestEver.length; i++) {
    var n = bestEver[i];
    vertex(cities[n].x, cities[n].y);
  }
  endShape();
  */

  /*var d = calcDistance(cities, order);
  if (d < recordDistance) {
    recordDistance= d;
   bestEver = order.slice();
    console.log(recordDistance);
  }

  textSize(32);
  /*var s = '';
  for (var i = 0; i <order.length; i++) {
    s += order[i];
  }
  fill(255);
  fill(255);
  stroke(0);
  var percent = 100 * (count/totalPermutations);
  text(nf(percent, 0, 2) + "% completed", 20, height-50);

  nextOrder(); */
}


/*function shuffle(a, num) {
  for (var i = 0; i < num; i++) {
    var indexA = floor(random(a.length));
    var indexB = floor(random(a.length));
    swap(a, indexA, indexB);
  }
} */

function swap(a, i, j) {
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

function calcDistance(points, order) {
  var sum = 0;
  for (var i =0; i < order.length - 1; i++) {
    var cityAIndex = order[i]
    var cityA = points[cityAIndex];
    var cityBIndex = order[i+1]
    var cityB = points[cityBIndex];
    var d = dist(cityA.x, cityA.y, cityB.x, cityB.y);
    sum += d;
    }
  return sum;
}

//lexical order algorithm

function nextOrder() {

  count++;

  // Step 1 of the algorithm
  var largestI = -1;
  for (var i =0; i < order.length - 1; i++) {
    if (order[i] < order[i+1]) {
      largestI = i;
    }
  }
  if (largestI == -1) {
    noLoop();
    console.log("finished");
  }
  //STEP 2
  var largestJ = -1;
  for (var j = 0; j < order.length; j++) {
    if (order[largestI] < order[j]) {
      largestJ = j;
    }
  }

  //STEP 3
  swap(order, largestJ, largestI);

  //STEP 4: reverse from largestI + 1 to the end
  var endArray = order.splice(largestI + 1);
  endArray.reverse();
  order = order.concat(endArray);


}

function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
}
