class smallChicken extends MovableObject {
    width = 60;
    height = 60;
    y = 375;
    IMAGES_SMALLCHICKEN_WALKING = [
        './img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        './img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        './img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];

    IMAGES_SMALLCHICKEN_DEAD = [
        './img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];
<<<<<<< HEAD
    //smallChicken_sound = new Audio('./audio/smallEnemy.mp3');

=======
    // smallChicken_sound = new Audio('./audio/smallEnemy.mp3');
    //smallChicken_sound.volume = 0.5;
>>>>>>> 30291a1d9a5f9db10a63c4b385911a67498f8699


    
   constructor() {
        super().loadImage('./img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.IMAGES_SMALLCHICKEN_WALKING);
        this.x = 2500 + Math.random() * 1000;
        this.speed = 1.5 + Math.random() * 0.5;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_SMALLCHICKEN_WALKING);
<<<<<<< HEAD
            //this.smallChicken_sound.play();
=======
            // this.smallChicken_sound.play();
>>>>>>> 30291a1d9a5f9db10a63c4b385911a67498f8699
        }, 200);
    }
}

//     animate() {
//         setInterval(() => {
//         if (this.isDead()) {
//             this.playAnimation(this.IMAGES_BOSS_DEAD);
//         } else {
//             this.playAnimation(this.IMAGES_WALKING);
//         }
//     }, 200);
//  }

