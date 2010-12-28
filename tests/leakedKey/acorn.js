var pointCloud = null;
var ps = null;

function render() {
  ps.translate(0, 0, -30);
  
  var c = pointCloud.getCenter();
  ps.translate(-c[0], -c[1], -c[2]);
  
  ps.clear();
  ps.render(pointCloud);
}

function keyDown(){
  //document.getElementById('key').innerHTML = key;
  alert(key);
}

function start(){
  ps = new PointStream();  
  ps.setup(document.getElementById('canvas'));
  ps.background([0, 0, 0, 0.5]);
  ps.pointSize(5);

  ps.onKeyDown = keyDown;
  ps.onRender = render;
  alert(key);
  pointCloud = ps.load("../../clouds/mickey_verts_cols.asc");
}
