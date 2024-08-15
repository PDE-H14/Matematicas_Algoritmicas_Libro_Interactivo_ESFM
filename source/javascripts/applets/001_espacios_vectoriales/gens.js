var edge = 10;

var board = JXG.JSXGraph.initBoard('gensbox', {
    boundingbox: [-edge, edge, edge, -edge],
    showCopyright:false,
    axis:true,
    keepaspectratio: true,
    pan: {
        enabled: false
    },
    browserPan: false,
    zoom: {
        enabled: false
    },
});

var points = [];
var lines = [];

var origin = board.create('point',[0,0],{name:'',size:0.0000001, fixed: true, color: "blue"});

for(var i = -2; i<3; i++){
    if(i==0) continue;
    points[i] = board.create('point',[3*i,3], {name:'',size:5, color:"#a768ff"});
    lines[i] = board.create('line',[origin, points[i]],{fixed: false, firstArrow: {type: 1}, lastArrow: {type: 1}});
}

