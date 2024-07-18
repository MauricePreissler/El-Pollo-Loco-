let backgroundsound = new Audio('audio/background.mp3');
backgroundsound.volume = 0.1; // Lautstärke auf 10% setzen
let enemyTalking = new Audio('audio/enemyTalking.mp3');
smallChicken_sound = new Audio('./audio/smallEnemy.mp3');


let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    document.getElementById('fullscreen').classList.add('display-none');
    document.getElementById('you-win').classList.add('display-none'); 
    document.getElementById('you-lost').classList.add('display-none');
    document.getElementById('open-info-bg').classList.add('display-none');
}

function startGame(){
    document.getElementById('fullscreen').classList.remove('display-none');
    document.getElementById('startScreen').classList.add('display-none');
    backgroundsound.play(); 
    enemyTalking.play(); 
    smallChicken_sound.play();

    backgroundsound.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}

function fullscreen() {
    let fullscreen = document.getElementById('canvas');
    enterFullscreen(fullscreen);
}

function enterFullscreen(element) {
    if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if(element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
      element.msRequestFullscreen();
    } else if(element.webkitRequestFullscreen) {  // iOS Safari
      element.webkitRequestFullscreen();
    }
  }
  function exitFullscreen() {
    if(document.exitFullscreen) {
      document.exitFullscreen();
    } else if(document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }

  function openInfo(){
    document.getElementById('open-info-bg').classList.remove('display-none');
  }

  function closeInfo(){
    document.getElementById('open-info-bg').classList.add('display-none');
    console.log("close")
  }
  
window.addEventListener("keydown", (e) => {
    
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 38) {
        keyboard.UP = true;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (e.keyCode == 68) {
        keyboard.D = true;
    }
});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 38) {
        keyboard.UP = false;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 68) {
        keyboard.D = false;
    }

});