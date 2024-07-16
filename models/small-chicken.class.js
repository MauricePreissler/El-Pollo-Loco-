class smallChicken extends MovableObject {
    width = 60;
    height = 60;
    y = 350;
    IMAGES_WALKING = [
        '../img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        '../img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        '../img/3_enemies_chicken/chicken_small/1_walk/3_w.png'

    ];

    // walking_sound = new Audio('./audio/enemyTalking.mp3');
    

   constructor() {
        super().loadImage('../img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        
        this.x = 2500 + Math.random() * 500;
        this.speed = 1.5 + Math.random() * 0.5;
        

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
            // this.walking_sound.play();
        }, 200);
    }
}