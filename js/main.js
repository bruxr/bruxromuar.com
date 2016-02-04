var pts, center, canvas, ctx, width, height;

function setupNetworks() {
  var el = $('#the-networks');
  width = el.width();
  height = el.height();
  
  center = { x: width * 0.66, y: height / 2 };
  console.log(center);
  
  canvas = el[0];
  canvas.width = width;
  canvas.height = height;
  ctx = canvas.getContext('2d');
  
  // generate points
  pts = [];
  var F = 18;
  for (var x = 0; x < width; x = x + width / F) {
    for (var y = 0; y < height; y = y + height / F) {
      var px = x + Math.random() * width / F;
      var py = y + Math.random() * height / F;
      var p = { x: px, originX: px, y: py, originY: py };
      pts.push(p);
    }
  }
  
  // find the nearest 5 points to each point
  for (var i in pts) {
    var distances = [];
    var currPt = pts[i];
    
    for (var j in pts) {
      var pt = pts[j];
      if (pt === currPt) continue;
      
      distances.push({pt: pt, distance: distance(currPt, pt) });
    }
    
    distances.sort(function(a, b) {
      if (a.distance < b.distance) {
        return -1;
      } else if (a.distance > b.distance) {
        return 1;
      } else {
        return 0;
      }
    });
    
    currPt.nearest = [];
    for (var j = 0; j < 5; j++) {
      currPt.nearest.push(distances[j].pt);
    }
  }
  
  // Create a circle for each point
  for (var i in pts) {
    pts[i].circle = new Circle(pts[i], 2 + Math.random() * 2, 'rgba(0,0,0,0.005)');
  }
  
  el.on('mousemove', mouseMove);
  startAnimate();
}

function startAnimate() {
  animate();
  for (var i in pts) {
    movePoint(pts[i]);
  }
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  for (var i in pts) {
    var pt = pts[i];
    var dist = Math.abs(distance(center, pt))
    
    if (dist < 8000) {
      pt.active = 0.05;
      pt.circle.active = 0.7;
    } else if (dist < 20000) {
      pt.active = 0.02;
      pt.circle.active = 0.1;
    } else if (dist < 40000) {
      pt.active = 0.005;
      pt.circle.active = 0.005;
    } else {
      pt.active = 0;
      pt.circle.active = 0;
    }
    
    drawLines(pt);
    pt.circle.draw();
  }
  requestAnimationFrame(animate);
}

function movePoint(pt) {
  TweenLite.to(pt, Math.random() * 2, {
    x: pt.originX - 50 + (Math.random() * 100),
    y: pt.originY - 50 + (Math.random() * 100),
    ease: Circ.easeInOut,
    onComplete: function() {
      movePoint(pt);
    }
  })
}

function drawLines(pt) {
  if (!pt.active) return;
  for (var i in pt.nearest) {
    ctx.beginPath();
    ctx.moveTo(pt.x, pt.y);
    ctx.lineTo(pt.nearest[i].x, pt.nearest[i].y);
    ctx.strokeStyle = 'rgba(0, 0, 0, '+ pt.active +')';
    ctx.stroke();
  }
}

function mouseMove(e) {
  var o = $(this).offset();
  center.x = e.pageX - o.left;
  center.y = e.pageY - o.top;
}

function Circle(pos, rad, color) {
  var _this = this;

  // constructor
  (function() {
      _this.pos = pos || null;
      _this.radius = rad || null;
      _this.color = color || null;
  })();

  this.draw = function() {
      if(!_this.active) return;
      ctx.beginPath();
      ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'rgba(3, 155, 229,'+ _this.active+')';
      ctx.fill();
  };
}

function distance(p1, p2) {
  return Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2);
}

$(function() {

  setupNetworks();
  
  $('#projects-btn').on('click', function(e) {
    e.preventDefault();
    $('body').animate({
       scrollTop: $('#projects').position().top 
     }, 'normal', 'easeInQuart');
  });
    
});