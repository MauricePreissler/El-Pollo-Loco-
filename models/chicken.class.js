
class Chicken extends MovableObject {
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

    isDead = false;

    constructor() {
        super().loadImage('./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_CHICKEN_WALKING);
        this.loadImages(this.IMAGES_CHICKEN_DEAD);
        
        this.x = 650 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.5;
        this.animate();
    }

    animate() {
        this.moveLeftInterval = setInterval(() => {
            if (!this.isDead || !startGame()) {
                this.moveLeft();
            }
        }, 1000 / 60);

        this.animationInterval = setInterval(() => {
            if (this.isDead) {
                this.playAnimation(this.IMAGES_CHICKEN_DEAD);
            } else {
                this.playAnimation(this.IMAGES_CHICKEN_WALKING);
            }
        }, 200);
    }

    stopMovement() {
        clearInterval(this.moveLeftInterval);
        this.isDead = true;
        this.fadeOut();
    }

    fadeOut() {
        let fadeOutInterval = setInterval(() => {
            this.y += 2; // Bewegt das Hähnchen langsam nach unten
            if (this.y + this.height < 0) {
                clearInterval(fadeOutInterval);
            }
        }, 1000 / 60);
    }
}
