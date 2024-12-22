
class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.player = new Player(ctx);   //traemos la clase Player para usarlo. Todo lo que esté en la clase player también aparecerá
    this.background = new Background(ctx);   // traemos la clase Background para usarlo
    this.interval = null;  //sirve para pausar el juego
    this.setListeners();  // para que se pueda usar el teclado 
  }
  
  start() {
    this.interval = setInterval(() => {
      this.clear();  //   limpia el canvas. Sin esta función, nunca dejaría de dibujarse lo anterior y no aparentaría movimiento.
      this.move();  // mueve los objetos movibles
      this.draw();  // dibuja lo que haga falta
    }, 1000 / 60);    //el intervalo en el que se van sucediendo las funciones y se dibuja todo
  }

  stop() {  //para pausar el juego
    clearInterval(this.interval); 
    this.interval = null;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  draw() {
    // this.background.draw();  //dibuja el background
    this.player.draw(); //dibuja al personaje y todo lo que se dibuja en la clase de personaje
  }
  move() {
    this.player.move();  //muve al personaje y todo lo que se mueve en la clase de personaje
  }
  setListeners() {
    // Listener para 'keydown'
    document.addEventListener("keydown", (ev) => {
      this.player.keyDown(ev.key); // Usa `key` para identificar la tecla
    });
  
    // Listener para 'keyup'
    document.addEventListener("keyup", (ev) => {
      this.player.keyUp(ev.key); // Usa `key` para identificar la tecla
    });
  }
  
  
//funciones o metodos para crear obstaculos y criaturas

  gameOver() {  //Función para terminar el juego y vaciar todos los arrays.
    this.stop();
    this.obstacles = [];
  }
}
