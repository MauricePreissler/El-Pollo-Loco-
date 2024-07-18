
class Chicken extends MovableObject {
<<<<<<< HEAD
    //walking_sound = new Audio('./audio/enemyTalking.mp3');
    
=======
    // walking_sound = new Audio('./audio/enemyTalking.mp3');
    //walking_sound.volume = 0.5; 
>>>>>>> 30291a1d9a5f9db10a63c4b385911a67498f8699
    width = 80;
    height = 80;
    y = 350;
    IMAGES_CHICKEN_WALKING = [
        './img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    IMAGES_CHICKEN_DEAD = [
        './img/3_enemies_chicken/chicken_normal/2_dead/dead.png' 
    ];
    
    
   constructor() {
        super().loadImage('./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_CHICKEN_WALKING);
        
        this.x = 650 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.5;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
        setInterval(() => {
            this.playAnimation(this.IMAGES_CHICKEN_WALKING);
<<<<<<< HEAD
            //this.walking_sound.play();
=======
            // this.walking_sound.play();
>>>>>>> 30291a1d9a5f9db10a63c4b385911a67498f8699
        }, 200);
    }

    // animate() {
    //     setInterval(() => {
    //         if (this.isDead()) {
    //             this.playAnimation(this.IMAGES_CHICKEN_WALKING);
    //         } else {
    //             this.playAnimation(this.IMAGES_CHICKEN_DEAD);
    //         }
    //     }, 200);
    // }
}