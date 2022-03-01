function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    setInterval(() => this.s1++, 1000);
    setInterval(function() {
        this.s2++;
    }, 1000)
}
var timer = new Timer();
setTimeout(() => console.log('s1:', timer.s1),3100); //s1:3
setTimeout(() => console.log('s2:', timer.s2),3100); //s2:0
