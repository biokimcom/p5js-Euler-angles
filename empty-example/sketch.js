let toggleZeroangles, toggleAdjustangles;
let xSlider, ySlider, zSlider;

function setup() {
  // put setup code here
    let canvas= createCanvas(800, 400, WEBGL);
    canvas.parent("sketchContainer");
    angleMode(DEGREES);
    camera(200,-200,200);
    debugMode();
    strokeWeight(1); stroke('gray');
    
    //slidergamma = createSlider(-85,85,0,1);
    //slidergamma.position(20,30);
    //slidergamma.style('width','150px');    
    
    xSlider = document.querySelector('#xAxis');
    ySlider = document.querySelector('#yAxis');
    zSlider = document.querySelector('#zAxis');
    toggleZeroangles = document.querySelector('#Zeroangles');
    toggleAdjustangles = document.querySelector('#Adjustangles');
    p = document.querySelector('#axisText');
    
}

function drawXYZaxis() {
    push();
    strokeWeight(5);
    axislen = 60;
    stroke('red');
    line(0,0,0,axislen,0,0); //x-axis
    stroke('green');
    line(0,0,0,0,axislen,0); //y-axis
    stroke('blue');
    line(0,0,0,0,0,-axislen);
    pop();
    //strokeWeight(1);
   
}

function draw() {
  // put drawing code here
    background(255);
    
    //image(textScreen, -width/2, -height/2);
    
    rotateZ(zSlider.value);
    rotateY(-ySlider.value);
    rotateX(-xSlider.value);
    
    drawXYZaxis();
    push();
    noFill(); strokeWeight(1); stroke('black');
    box(50,150,30);
    pop();
    strokeWeight(1);
    
    //p.innerHTML = 'translate('+parseFloat(xSlider.value).toFixed(1)+','+parseFloat(ySlider.value).toFixed(1)+','+parseFloat(zSlider.value).toFixed(1)+') <br />';
    
    p.innerHTML = 'rotateX('+parseFloat(xSlider.value).toFixed(1)+') <br />';
    p.innerHTML += 'rotateY('+parseFloat(ySlider.value).toFixed(1)+') <br />';
    p.innerHTML += 'rotateZ('+parseFloat(zSlider.value).toFixed(1)+') <br />';
    
    if (toggleZeroangles.checked) {
        xSlider.value = 0;
        ySlider.value = 0;
        zSlider.value = 0;
    }
     if (toggleAdjustangles.checked) {
        
    }
}

