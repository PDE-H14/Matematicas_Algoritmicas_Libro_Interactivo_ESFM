var edge = 7; 
var board = JXG.JSXGraph.initBoard('reflection_x_box', {
        boundingbox: [-edge, edge, edge, -edge],
        showCopyright:false,
        axis:true,
        keepaspectratio: true,
        pan: {
            enable: false
        },
        browserPan: false,
        zoom: {
            enable: false
        },
    });


var checkbox = board.create('checkbox', [1, 5.5, 'Reflejar respecto al eje $x$'], {});

function reflect(x, y){
    if (checkbox.Value()){
        return [x, -y];
    }else{
        return [x, y];
    }
}

var head = board.create('circle',
    [function(){return reflect(1, 2.6)},
    0.4],
    {fillColor: colorStr, name:''});

var leg1 = board.create('line',
    [function(){return reflect(0,0)},
    function(){return reflect(1, 1)}],
    {straightFirst:false, straightLast:false, strokeWidth:2});

var leg2 = board.create('line',
    [function(){return reflect(2, 0)},
    function(){return reflect(1, 1)}],
    {straightFirst:false, straightLast:false, strokeWidth:2});

var body = board.create('line',
    [function(){return reflect(1,1)},
    function(){return reflect(1,2)}],
    {straightFirst:false, straightLast:false, strokeWidth:2});

var arms = board.create('line',
    [function(){return reflect(0,2)},
    function(){return reflect(2,2)}],
    {straightFirst:false, straightLast:false, strokeWidth:2});
