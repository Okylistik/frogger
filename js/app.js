'use strict'


const random = (max=100, min=0) => {
    return Math.floor(Math.random() * max + min)
}

function positionEnemy(){
    const pos = [60,145,230]
    return pos[random(pos.length-1)]
}
let Enemy = function (pos=positionEnemy(),xPosition=-100) {
    this.speed = random(1000,100)
    this.x = xPosition
    this.y = pos
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
    this.x += this.speed * dt
    // console.log('THIS IS - '+this.y+ this.x);
    

    if (this.x >= 500){
        this.x = -100
        this.speed = random(1000,100)
    } 
    addEnemy()
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
// if ()
let allEnemies = [new Enemy(60), new Enemy(145), new Enemy(230)]


const addEnemy = ()=>{
    const sumSpeed= allEnemies.reduce((sum=0, item)=> sum+item.speed,0)
    const appearLevel=1000
    console.log(sumSpeed);
    if(sumSpeed < appearLevel){
        allEnemies.push(new Enemy())
    }
}




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