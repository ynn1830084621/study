var myName = 'ynn';
function showName() {
    console.log(myName);//ynn
}
function changeName() {
    var myName = 'BigBear';
    showName();
}
changeName();