var edge = 7; 
var board = JXG.JSXGraph.initBoard('reflection_y_box', {
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


var checkbox_y = board.create('checkbox', [1, 5.5, 'Reflejar respecto al eje $y$'], {});

function reflect_y(x, y){
    if (checkbox_y.Value()){
        return [-x, y];
    }else{
        return [x, y];
    }
}

var head = board.create('circle',
    [function(){return reflect_y(1, 2.6)},
    0.4],
    {fillColor: colorStr, name:''});

var leg1 = board.create('line',
    [function(){return reflect_y(0,0)},
    function(){return reflect_y(1, 1)}],
    {straightFirst:false, straightLast:false, strokeWidth:2});

var leg2 = board.create('line',
    [function(){return reflect_y(2, 0)},
    function(){return reflect_y(1, 1)}],
    {straightFirst:false, straightLast:false, strokeWidth:2});

var body = board.create('line',
    [function(){return reflect_y(1,1)},
    function(){return reflect_y(1,2)}],
    {straightFirst:false, straightLast:false, strokeWidth:2});

var arms = board.create('line',
    [function(){return reflect_y(0,2)},
    function(){return reflect_y(2,2)}],
    {straightFirst:false, straightLast:false, strokeWidth:2});
