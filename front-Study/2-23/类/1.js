function mixin(sourceObj, targetObj) {
    for(var key in sourceObj) {
        if(!(key in sourceObj)) {
            targetObj[key] = sourceObj[key];
        }
    }
    return targetObj;
}
var Vehicle = {
    engines : 1,
    ignition : function() {
        console.log("turning on my engine.");
    },
    drive : function() {
        this.ignition();
        console.log("steering and moving forward!");
    }
};
var Car = mixin (Vehicle,{
    wheels : 4,
    drive : function() {
        Vehicle.drive.call(this);
        console.log("rolling on all" + this.wheels + "wheels");
    }
});
console.log(Car);
console.log(Vehicle);
