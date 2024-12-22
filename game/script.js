const ctx = canvas.getContext("2d");

const game = new Game(ctx);
//gamOn es para indicar que se ha acabado el juego, que otras formas me han fallado

let start$$ = document.getElementById("pang-start");
let restart$$ = document.getElementById("pang-restart");
game.start();

