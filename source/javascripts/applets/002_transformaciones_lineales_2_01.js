var edge = 7; 
    var board = JXG.JSXGraph.initBoard('jxgbox', {
            boundingbox: [-edge, edge, edge, -edge],
            showCopyright:false,
            axis:true,
            keepaspectratio: true
        });
    var colorStr = '#68B1FF';

    var slider = board.create('slider',[[-5,-4],[5,-4],[0,0,360]], {name:'Ángulo'});

    var head = board.create('circle',
                            [function(){ return [1*Math.cos(2*Math.PI*(slider.Value()/360)) - 2.6*Math.sin(2*Math.PI*(slider.Value()/360)), 1*Math.sin(2*Math.PI*(slider.Value()/360)) + 2.6*Math.cos(2*Math.PI*(slider.Value()/360))]},
                            0.4],
                            {fillColor: colorStr, name:''});

    var leg1 = board.create('line',
                            [[0,0],
                            function(){ return [1*Math.cos(2*Math.PI*(slider.Value()/360)) - 1*Math.sin(2*Math.PI*(slider.Value()/360)), 1*Math.sin(2*Math.PI*(slider.Value()/360)) + 1*Math.cos(2*Math.PI*(slider.Value()/360))]}],
                            {straightFirst:false, straightLast:false, strokeWidth:2});

    var leg2 = board.create('line',
                            [function(){ return [2*Math.cos(2*Math.PI*(slider.Value()/360)) - 0*Math.sin(2*Math.PI*(slider.Value()/360)), 2*Math.sin(2*Math.PI*(slider.Value()/360)) + 0*Math.cos(2*Math.PI*(slider.Value()/360))]},
                            function(){ return [1*Math.cos(2*Math.PI*(slider.Value()/360)) - 1*Math.sin(2*Math.PI*(slider.Value()/360)), 1*Math.sin(2*Math.PI*(slider.Value()/360)) + 1*Math.cos(2*Math.PI*(slider.Value()/360))]}],
                            {straightFirst:false, straightLast:false, strokeWidth:2});
    
    var body = board.create('line',
                            [function(){ return [1*Math.cos(2*Math.PI*(slider.Value()/360)) - 1*Math.sin(2*Math.PI*(slider.Value()/360)), 1*Math.sin(2*Math.PI*(slider.Value()/360)) + 1*Math.cos(2*Math.PI*(slider.Value()/360))]},
                            function(){ return [1*Math.cos(2*Math.PI*(slider.Value()/360)) - 2*Math.sin(2*Math.PI*(slider.Value()/360)), 1*Math.sin(2*Math.PI*(slider.Value()/360)) + 2*Math.cos(2*Math.PI*(slider.Value()/360))]}],
                            {straightFirst:false, straightLast:false, strokeWidth:2});

    var arms = board.create('line',
                            [function(){ return [0*Math.cos(2*Math.PI*(slider.Value()/360)) - 2*Math.sin(2*Math.PI*(slider.Value()/360)), 0*Math.sin(2*Math.PI*(slider.Value()/360)) + 2*Math.cos(2*Math.PI*(slider.Value()/360))]},
                            function(){ return [2*Math.cos(2*Math.PI*(slider.Value()/360)) - 2*Math.sin(2*Math.PI*(slider.Value()/360)), 2*Math.sin(2*Math.PI*(slider.Value()/360)) + 2*Math.cos(2*Math.PI*(slider.Value()/360))]}],
                            {straightFirst:false, straightLast:false, strokeWidth:2});