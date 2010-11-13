var ps;
var mickey;

var XHR_Timer;
var XHR_TimerDone = false;

var buttonDown = false;
var zoomed = -50;

var rot =[0,0];
var curCoords = [0,0];

var size = 500;

/*window.onresize = function(){
  ps.resize(window.innerWidth, window.innerHeight);
  ps.background([0.3,0.5,0.7,0.2]);
};*/

function zoom(amt){
  var invert = document.getElementById('invertScroll').checked ? -1 : 1;
  zoomed += amt * 2 * invert;
  size += amt * 10;
}

function mousePressed(){
  curCoords[0] = ps.mouseX;
  curCoords[1] = ps.mouseY;
  buttonDown = true;
}

function mouseReleased(){
  buttonDown = false;
}

function render() {

  if(mickey.status === 3){

    if(XHR_TimerDone === false){
      document.getElementById('XHR_Timer').innerHTML = (new Date() - XHR_Timer)/1000 + " seconds";
      XHR_TimerDone = true;
    }

    var deltaX = ps.mouseX - curCoords[0];
    var deltaY = ps.mouseY - curCoords[1];
    
    if(buttonDown){
      rot[0] += deltaX / 250;
      rot[1] += deltaY / 250;
      curCoords[0] = ps.mouseX;
      curCoords[1] = ps.mouseY;
    }

    // transform point cloud
    ps.translate(0,0,zoomed);
      
    ps.rotateY(rot[0]);
    ps.rotateX(rot[1]);
    
    var c = mickey.getCenter();
    
    ps.translate(-c[0],-c[1],-c[2]);

    ps.clear();
    ps.render(); 
  }
}

function start(){
  ps = new PointStream();
  
  ps.setup(document.getElementById('canvas'), render);
  
  ps.pointSize(8);
  ps.background([1,1,1,1]);

  ps.onMouseScroll = zoom;
  ps.onMousePressed = mousePressed;
  ps.onMouseReleased = mouseReleased;
  
  XHR_Timer = new Date();
  mickey = ps.loadFile({path:"mickey.asc"});
}