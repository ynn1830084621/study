var color = 'green';
var test = {
    color: 'blue',
    getColor: function() {
        var color = 'red';
        console.log(this.color);
    }
}
var getColor = test.getColor;
getColor();//green
test.getColor();//blue