var obj = {
    value: "ynn",
};

function fn() {
    console.log(this.value);
}

fn.call(obj); // ynn