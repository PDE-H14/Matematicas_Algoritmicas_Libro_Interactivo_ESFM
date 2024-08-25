JXG.Options.text.useMathJax = true;


var edge_lin_comb = 7;

var board = JXG.JSXGraph.initBoard('lincombbox', {
    boundingbox: [-edge_lin_comb, edge_lin_comb, edge_lin_comb, -edge_lin_comb],
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

var origin_lin_comb = board.create('point', [0,0], {name:'', fixed: true, color:'#000000', size: 0.00001});

var v1_lin_comb = board.create('point', [-1,1], {name:'$v_1$', size: 5, color:'#93e3af'});


var v2_lin_comb = board.create('point', [2,2], {name:'$v_2$', size: 5, color:'#83c4e9'});



var w_lin_comb = board.create('point', [2,6], {name:'$w$', size: 5, color:'#f5ca81'});

var w_vec_lin_comb = board.create('line',[w_lin_comb,origin_lin_comb],
                                    {color:'#eb6640',
                                    straightFirst:false, straightLast:false,
                                    firstArrow: {type: 1}});

function get_coefficients(){
    var a = v1_lin_comb.X();
    var c = v1_lin_comb.Y();
    var b = v2_lin_comb.X();
    var d = v2_lin_comb.Y();
    var idet = 1/(a*d - b*c);
    

    var x = w_lin_comb.X();
    var y = w_lin_comb.Y();

    var c1 = x*idet*d - y*idet*b;
    var c2 = -x*idet*c + y*idet*a;

    return [c1, c2];
}

var u1_lin_comb = board.create('point', 
    [function()
    {
        coeffs = get_coefficients();
        s = coeffs[0];
        r1 = s*v1_lin_comb.X();
        r2 = s*v1_lin_comb.Y();
        console.log(r1)
        return r1;
    },function()
    {
        coeffs = get_coefficients();
        s = coeffs[0];
        r1 = s*v1_lin_comb.X();
        r2 = s*v1_lin_comb.Y();
        return r2;
    }],
    {color: '#93e3af', visible:false});

var u2_lin_comb = board.create('point', 
    [function()
    {
        coeffs = get_coefficients();
        s = coeffs[1];
        t1 = s*v2_lin_comb.X();
        t2 = s*v2_lin_comb.Y();
        return t1;
    },function()
    {
        coeffs = get_coefficients();
        s = coeffs[1];
        t1 = s*v2_lin_comb.X();
        t2 = s*v2_lin_comb.Y();
        return t2;
    }],
    {color: '#83c4e9', visible:false});


var u1_vec_lin_comb = board.create('line',[u1_lin_comb,origin_lin_comb],
    {color:'#93e3af',
    straightFirst:false, straightLast:false,
    firstArrow: {type: 1}});

var u2_vec_lin_comb = board.create('line',[u2_lin_comb,origin_lin_comb],
    {color:'#83c4e9',
    straightFirst:false, straightLast:false,
    firstArrow: {type: 1}});

var v1_vec_lin_comb = board.create('line',[v1_lin_comb,origin_lin_comb],
    {color:'#47b4a4',
    straightFirst:false, straightLast:false,
    firstArrow: {type: 1}});

var v2_vec_lin_comb = board.create('line',[v2_lin_comb,origin_lin_comb],
    {color:'#24bdf5',
    straightFirst:false, straightLast:false,
    firstArrow: {type: 1}});

var seg1_lin_comb = board.create('line',[w_lin_comb,u1_lin_comb],
                                {straightFirst:false, straightLast:false, strokeWidth:2, dash:2, color:'#83c4e9'})

var seg1_lin_comb = board.create('line',[w_lin_comb,u2_lin_comb],
                                {straightFirst:false, straightLast:false, strokeWidth:2, dash:2, color:'#93e3af'})