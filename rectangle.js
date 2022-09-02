// module.export.perimeter=(x,y)=>(2*(x+y));
//  module.export.area=(x,y)=>(x*y);

// exports.perimeter =  (x, y) => (2*(x+y));

// exports.area = (x, y) => (x*y);

module.exports = (x,y,callback) => {
    if (x <= 0 || y <= 0)
        setTimeout(() => 
            callback(new Error("Rectangle dimensions should be greater than zero: l = "
                + x + ", and b = " + y), 
            null),
            5000);
    else
        setTimeout(() => 
            callback(null, {
                perimeter: () => (2*(x+y)),
                area:() => (x*y)
            }), 
            5000);
}