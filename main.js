const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

let img = new Image();
img.src = "Whip/Whip_1.png";

canvas.width = 1200;
canvas.height = 800;
c.fillStyle = 'green';
c.fillRect(0, 0, canvas.width, canvas.height);

function sleep(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class Sprite {
    constructor({position, velocity, color}) {
        this.position = position;
        this.velocity = velocity;
        this.color = color;
        this.width = 50;
        this.height = 50;
    };
    
    async draw() {
        c.fillStyle = this.color;
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if(this.color == "white"){
            if (!keys.space.pressed) {
                c.drawImage(img, this.position.x-120, this.position.y-125, img.width*0.08, img.height*0.08);
            } else {
                keys.space.pressed = false;
                for (let i = 1; i <= 10; i++) {
                    img.src = "Whip/Whip_" + i + ".png";
                    c.drawImage(img, this.position.x-120, this.position.y-125, img.width*0.08, img.height*0.08);
                    await sleep(50);
                }
                img.src = "Whip/Whip_1.png";
            }
        }
    };
    
};


const player = new Sprite({
    position: {
        x: 500,
        y: 500
    },
    velocity: {
        x: 0,
        y: 0
    },
    color: "white"
});
const nigger = new Sprite({
    position: {
        x: 300,
        y: 300
    },
    velocity: {
        x: 0,
        y: 0
    },
    color: "#3C280D"
});

const keys = {
  a: {
      pressed: false
  },
  d: {
      pressed: false
  },
  w: {
      pressed: false
  },
  s: {
      pressed: false
  },
  space: {
      pressed: false
  }
};

function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);
    player.draw();
    nigger.draw();
};

document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'a':
        if(keys.a.pressed == false){
            player.velocity.x -= 2;
            keys.a.pressed = true;
        }
        break;
      case 'd':
        if(keys.d.pressed == false){
            player.velocity.x += 2;
            keys.d.pressed = true;
        }
        break;
      case 'w':
        if(keys.w.pressed == false){
            player.velocity.y -= 2;
            keys.w.pressed = true;
        }
        break;
      case 's':
        if(keys.s.pressed == false){
            player.velocity.y += 2;
            keys.s.pressed = true;
        }
        break;
      case ' ':
        if(keys.space.pressed == false){
            keys.space.pressed = true;
        }
        break;
    }
  });

  document.addEventListener('keyup', function (event) {
    switch (event.key) {
      case 'a':
        if(keys.a.pressed == true){
        player.velocity.x += 2;
        keys.a.pressed = false;
    }
        break;
      case 'd':
        if(keys.d.pressed == true){
            player.velocity.x -= 2;
            keys.d.pressed = false;
        }
        break;
      case 'w':
        if(keys.w.pressed == true){
            player.velocity.y += 2;
            keys.w.pressed = false;
        }
        break;
      case 's':
        if(keys.s.pressed == true){
            player.velocity.y -= 2;
            keys.s.pressed = false;
        }
        break;
    }
  });
  function randomMove(){
    let randNum = Math.floor(Math.random() * 9);
    switch (randNum){
        case 1:
            nigger.velocity.x = 0;
            nigger.velocity.y = 0;
            break;
        case 2:
            nigger.velocity.x = 0.2;
            nigger.velocity.y = 0;
            break;
        case 3:
            nigger.velocity.x = 0;
            nigger.velocity.y = 0.2;
            break;
        case 4:
            nigger.velocity.x = 0.2;
            nigger.velocity.y = 0.2;
            break;
        case 5:
            nigger.velocity.x = -0.2;
            nigger.velocity.y = 0;
            break;
        case 6:
            nigger.velocity.x = 0;
            nigger.velocity.y = -0.2;
            break;
        case 7:
            nigger.velocity.x = -0.2;
            nigger.velocity.y = -0.2;
            break;
        case 8:
            nigger.velocity.x = -0.2;
            nigger.velocity.y = 0.2;
            break;
        case 0:
            nigger.velocity.x = 0.2;
            nigger.velocity.y = -0.2;
            break;
        }
        setTimeout(() => {
            randomMove();
        }, 1000);
     
};
  
animate();
randomMove();