let UP = 38;
let DOWN = 40;
let LEFT = 37;
let RIGHT = 39;
let SPACE = 32;
let N = 78; 
let M = 77; 
let ALT = 16; 
let Z = 90; 
let X = 88; 
let C = 0; 
let V = 0; 
let B = 66;
let Q = 81;  
let E = 69; 
let R = 82; 
let T = 84 
let P = 80; 
let J = 74 
let F = 70 
let G = 71 
let H = 72 
let K = 75 
const A = 65;
const W = 87;
const S = 83;
const D = 68;





              // dibujar un circulo
              // dibujar un circulo
// ctx.beginPath();
// ctx.arc(this.x, this.y, this.w, 0, Math.PI * 2); // (x, y, radio, ánguloInicial, ánguloFinal)
// ctx.fillStyle = 'blue';
// ctx.fill(); // Rellena el círculo
// ctx.stroke(); // Dibuja el contorno

        // dibujar un cuadrado
        // dibujar un cuadrado
// ctx.fillStyle = 'green';
// ctx.fillRect(this.x, this.y, this.w, this.h); // (x, y, ancho, alto)
// ctx.strokeStyle = 'red';
// ctx.strokeRect(this.x, this.y, this.w, this.h); // Dibuja el contorno

            // dibujar triángulo
            // dibujar triángulo
// ctx.beginPath();
// ctx.moveTo(this.x + 50, this.y); // Punto inicial
// ctx.lineTo(this.x , this.y + 100); // Línea al segundo punto
// ctx.lineTo(this.x + 100, this.y + 100); // Línea al tercer punto
// ctx.closePath(); // Cierra el triángulo
// ctx.fillStyle = 'orange';
// ctx.fill(); // Rellena el triángulo
// ctx.strokeStyle = 'black';
// ctx.stroke(); // Dibuja el contorno


              // dibujar un rectángulo gradiente
              // dibujar un rectángulo gradiente
// const gradient = this.ctx.createLinearGradient(this.x, this.y, this.x + this.w + 200, this.y + this.h);
  
// Añadir colores al gradiente
// gradient.addColorStop(0, 'blue');    // Color inicial
// gradient.addColorStop(0.5, 'purple'); // Color intermedio
// gradient.addColorStop(1, 'red');     // Color final

// Usar el gradiente como color de relleno
// this.ctx.fillStyle = gradient;
// this.ctx.fillRect(this.x, this.y, this.w+ 200, this.h); // Dibujar el rectángulo


                // escribir texto
                // escribir texto
// this.ctx.font = '30px Arial'; // Tamaño y fuente
// this.ctx.fillStyle = 'black'; // Color del texto
// this.ctx.textAlign = 'center'; // Alineación horizontal
// this.ctx.textBaseline = 'middle'; // Alineación vertical

// Escribir "Hola Mundo" en la posición del jugador
// this.ctx.fillText('Hola Mundo', this.x + this.w / 2, this.y + this.h / 2);