(function() {
    console.log([
        (() => this.x).bind({x : 'inner'})()
    ]);
}).call({x : 'outer'}) //[ 'outer' ]