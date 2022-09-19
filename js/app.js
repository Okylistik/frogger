// Enemies our player must avoid
// Враги, которых должен избегать наш игрок

let Enemy = function (pos) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // Здесь находятся переменные, применяемые к каждому из наших экземпляров,
    // мы предоставили его для начала
    const random = (max) => {
        return Math.floor(Math.random() * (max) + 1)
    }
    // this.speed=speed
    this.x = -50 - random(10)
    this.y = pos
    console.log(this.x);
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    // Изображение/спрайт для наших врагов, здесь используется
    // помощник, который мы предоставили для простой загрузки изображений

    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
// Обновить позицию врага, обязательный метод для игры
// Параметр: dt, временная дельта между тиками


Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // Вы должны умножать любое движение на параметр dt
    // что гарантирует, что игра будет работать с одинаковой скоростью в течение
    // все компьютеры.

};

Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



let Player = function (x = 200, y = 400) {
    this.sprite = "images/char-boy.png"
    this.x = x
    this.y = y
}

Player.prototype.update = function () {

}

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function () {

}

// Теперь создайте экземпляры ваших объектов.
// Поместите все вражеские объекты в массив с именем allEnemies
// Поместите объект игрока в переменную с именем player
let enemy1 = new Enemy(60)
let enemy2 = new Enemy(145)
let enemy3 = new Enemy(230)
console.log(enemy1);
let allEnemies = [...enemy1, ...enemy2, ...enemy3]
console.log(allEnemies);
let player = new Player()

console.log(player)


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
// Это слушает нажатия клавиш и отправляет клавиши на ваш
// Метод Player.handleInput(). Вам не нужно изменять это.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});