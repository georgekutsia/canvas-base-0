class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 300;
    this.y = 50;
    this.w = this.ctx.canvas.width / 25;
    this.h = this.ctx.canvas.width / 25;
    this.vx = 0;
    this.vy = 1;
  }
  draw() {
ctx.strokeStyle = 'red';
ctx.strokeRect(this.x, this.y, this.w, this.h); // Dibuja el contorno

  }

  move() {
    this.x += this.vx ;
    this.y += this.vy;

  }
//consultar constantes para el código de cada tecla
keyDown(key) {
  if (key === "w" || key === "W") { // Detecta tanto "w" como "W"
    this.vy = -1.5;
  }
  if (key === "a" || key === "A") {
    this.vx = -1.5;
  }
  if (key === "d" || key === "D") {
    this.vx = 1.5;
  }
  if (key === "s" || key === "S") {
    this.vy = 1.5;
  }
  if (key === "b" || key === "B") {
    this.shoot();
  }
}

keyUp(key) {
  if (key === "w" || key === "W") {
    this.vy = 0;
  }
  if (key === "a" || key === "A") {
    this.vx = 0;
  }
  if (key === "d" || key === "D") {
    this.vx = 0;
  }
  if (key === "s" || key === "S") {
    this.vy = 0;
  }
}

  collides(objetivo) {
    const colX =this.x <= objetivo.x + objetivo.w && this.x + this.w > objetivo.x + 10;
    const colY =this.y + this.h > objetivo.y && this.y < objetivo.y + objetivo.h;
    return colX && colY;
  }

}
