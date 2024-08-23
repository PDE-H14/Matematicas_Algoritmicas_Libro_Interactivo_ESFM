var edge_sub = 4.5;

var board = JXG.JSXGraph.initBoard('subbox', {
    boundingbox: [-edge_sub, edge_sub, edge_sub, -edge_sub],
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

// Punto con cordenadas en (0,0)
var origin_sub = board.create('point', [0,0], {name:'', fixed: true, color:'#000000', size: 0.00001});

// Punto x y su flecha asociada
var x_sub = board.create('point', [-1,3],{name:'$x$', fixed: false, color:'#93e3af', size:5});

var x_vec_sub = board.create('line',[x_sub, origin_sub], {straightFirst:false, straightLast:false, color:'#47b4a4',
                            firstArrow: {type: 1}});

// Punto 'y' y su flecha asociada
var y_sub = board.create('point', [2,2],{name:'$y$', fixed: false, color:'#83c4e9', size:5});

var y_vec_sub = board.create('line',[y_sub, origin_sub], {straightFirst:false, straightLast:false, color:'#24bdf5',
                                                        firstArrow: {type: 1}});

// Punto resultante de restar el vector x con el vector y 
var res_sub = board.create('point', [function(){return x_sub.X()-y_sub.X()},
                                                function(){return x_sub.Y()-y_sub.Y()}],{name: '$x-y$',color:'#f5ca81', size:0.5});

// Flecha asociada al punto resultante
var res_vec_sub = board.create('line',[res_sub, origin_sub], {straightFirst:false, straightLast:false, color:'#eb6640',
                                                            firstArrow: {type: 1}});

var seg_sub = board.create('line', [x_sub, y_sub], {straightFirst:false, straightLast:false, strokeWidth:2, dash:2, color:'#eb6640'});
