
class Chicken extends MovableObject {
    //walking_sound = new Audio('./audio/enemyTalking.mp3');
    
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
            //this.walking_sound.play();
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