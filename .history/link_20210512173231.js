function computerPlay() {
    let array = ['rock', 'paper', 'scissors'];
    // randomly select array element and return it 
    let index = Math.floor(Math.random * 3);
    alert(index);
}
computerPlay();