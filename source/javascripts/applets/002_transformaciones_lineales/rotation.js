var edge = 7; 
    var board = JXG.JSXGraph.initBoard('rotationbox', {
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
    var colorStr = '#68B1FF';

    var slider = board.create('slider',[[-5,-4],[5,-4],[0,0,360]], {name:'Ángulo'});

    function rotate(x, y){
        var radians = 2*Math.PI*(slider.Value()/360);
        return [x*Math.cos(radians) - y*Math.sin(radians), x*Math.sin(radians) + y*Math.cos(radians)];
    }


    var head = board.create('circle',
                            [function(){ return rotate(1, 2.6)},
                            0.4],
                            {fillColor: colorStr, name:''});

    var leg1 = board.create('line',
                            [[0,0],
                            function(){ return rotate(1, 1)}],
                            {straightFirst:false, straightLast:false, strokeWidth:2});

    var leg2 = board.create('line',
                            [function(){ return rotate(2, 0)},
                            function(){ return rotate(1, 1)}],
                            {straightFirst:false, straightLast:false, strokeWidth:2});
    
    var body = board.create('line',
                            [function(){ return rotate(1,1)},
                            function(){ return rotate(1,2)}],
                            {straightFirst:false, straightLast:false, strokeWidth:2});

    var arms = board.create('line',
                            [function(){ return rotate(0,2)},
                            function(){ return rotate(2,2)}],
                            {straightFirst:false, straightLast:false, strokeWidth:2});