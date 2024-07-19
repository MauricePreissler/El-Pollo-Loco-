
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

    isDead = false;

    constructor() {
        super().loadImage('./img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.IMAGES_SMALLCHICKEN_WALKING);
        this.loadImages(this.IMAGES_SMALLCHICKEN_DEAD);
        
        this.x = 2500 + Math.random() * 1000;
        this.speed = 0.5 + Math.random() * 0.5;
        this.animate();
    }

    animate() {
        this.moveLeftInterval = setInterval(() => {
            if (!this.isDead) {
                this.moveLeft();
            }
        }, 1000 / 60);

        this.animationInterval = setInterval(() => {
            if (this.isDead) {
                this.playAnimation(this.IMAGES_SMALLCHICKEN_DEAD);
            } else {
                this.playAnimation(this.IMAGES_SMALLCHICKEN_WALKING);
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