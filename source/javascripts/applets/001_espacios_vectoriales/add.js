var edge_add = 4.5;

var board = JXG.JSXGraph.initBoard('addbox', {
    boundingbox: [-edge_add, edge_add, edge_add, -edge_add],
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
var origin_add = board.create('point', [0,0], {name:'', fixed: true, color:'#000000', size: 0.00001});

// Punto x y su flecha asociada
var x_add = board.create('point', [3,4],{name:'$x$', fixed: false, color:'#93e3af'});

var x_vec_add = board.create('line',[x_add, origin_add], {straightFirst:false, straightLast:false, color:'#47b4a4',
                            firstArrow: {type: 1}});

// Punto 'y' y su flecha asociada
var y_add = board.create('point', [-3,-1],{name:'$y$', fixed: false, color:'#83c4e9'});

var y_vec_add = board.create('line',[y_add, origin_add], {straightFirst:false, straightLast:false, color:'#24bdf5',
                                                        firstArrow: {type: 1}});

// Punto resultante de sumar el vector x con el vector y 
var res_add = board.create('point', [function(){return x_add.X()+y_add.X()},
                                                function(){return x_add.Y()+y_add.Y()}],{name: '$x+y$',color:'#f5ca81', size:0.5});

// Flecha asociada al punto resultante
var res_vec_add = board.create('line',[res_add, origin_add], {straightFirst:false, straightLast:false, color:'#eb6640',
                                                            firstArrow: {type: 1}});

// Segmentos
var seg_1 = board.create('line', [res_add, x_add], {straightFirst:false, straightLast:false, strokeWidth:2, dash:2, color:'#24bdf5'});

var seg_2 = board.create('line', [res_add, y_add], {straightFirst:false, straightLast:false, strokeWidth:2, dash:2, color:'#47b4a4'});