// class Character extends MovableObject {
//     height = 280;
//     y = 55;
//     speed = 10;
//     IMAGES_WALKING = [
//         'img/2_character_pepe/2_walk/W-21.png',
//         'img/2_character_pepe/2_walk/W-22.png',
//         'img/2_character_pepe/2_walk/W-23.png',
//         'img/2_character_pepe/2_walk/W-24.png',
//         'img/2_character_pepe/2_walk/W-25.png',
//         'img/2_character_pepe/2_walk/W-26.png'
//     ];

//     IMAGES_JUMPING = [
//         'img/2_character_pepe/3_jump/J-31.png',
//         'img/2_character_pepe/3_jump/J-32.png',
//         'img/2_character_pepe/3_jump/J-33.png',
//         'img/2_character_pepe/3_jump/J-34.png',
//         'img/2_character_pepe/3_jump/J-35.png',
//         'img/2_character_pepe/3_jump/J-36.png',
//         'img/2_character_pepe/3_jump/J-37.png',
//         'img/2_character_pepe/3_jump/J-38.png',
//         'img/2_character_pepe/3_jump/J-39.png'
        
//     ];

//     IMAGES_DEAD = [
//         'img/2_character_pepe/5_dead/D-51.png',
//         'img/2_character_pepe/5_dead/D-52.png',
//         'img/2_character_pepe/5_dead/D-53.png',
//         'img/2_character_pepe/5_dead/D-54.png',
//         'img/2_character_pepe/5_dead/D-55.png',
//         'img/2_character_pepe/5_dead/D-56.png',
//         'img/2_character_pepe/5_dead/D-57.png'

//     ];

//     IMAGES_HURT = [
//         'img/2_character_pepe/4_hurt/H-41.png',
//         'img/2_character_pepe/4_hurt/H-42.png',
//         'img/2_character_pepe/4_hurt/H-43.png'


//     ];

//     world;

//     walking_sound = new Audio('audio/walking.mp3');

//     constructor() {
//         super().loadImage('./img/2_character_pepe/2_walk/W-21.png');
//         this.loadImages(this.IMAGES_WALKING);
//         this.loadImages(this.IMAGES_JUMPING);
//         this.loadImages(this.IMAGES_DEAD);
//         this.loadImages(this.IMAGES_HURT);
//         this.applyGravity();
//         this.animate();
//     }




//     animate() {

//         setInterval(() => {
//             this.walking_sound.pause();
//             if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
//                 this.moveRight();
//                 this.otherDirection = false;
//                 this.walking_sound.play();
//             }
//             if (this.world.keyboard.LEFT && this.x > 0 ) {
//                this.moveLeft();
//                this.otherDirection = true;
//                 this.walking_sound.play();

//             }

//             if(this.world.keyboard.SPACE && !this.isAboveGround()) {
//                 this.jump();
//             }


//             this.world.camera_x = -this.x + 100;
//         }, 1000 / 60);

//         setInterval(() => {
//             if (this.isDead()) {
//                 this.playAnimation(this.IMAGES_DEAD);
//             } else if(this.isHurt()){
//                 this.playAnimation(this.IMAGES_HURT);
//             } else if (this.isAboveGround()) {
//                 this.playAnimation(this.IMAGES_JUMPING);
//             } else {

//             if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                
//                 this.playAnimation(this.IMAGES_WALKING);
//                 }

//             }
//         }, 50);
//     }
    

    
// }


class Character extends MovableObject {
    height = 280;
    y = 55;
    speed = 10;
    opacity = 1; // Start with full opacity
    fadeOutSpeed = 0.02; // Speed of fading out

    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];

    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
        
    ];

    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png'

    ];

    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png'


    ];

    world;
    walking_sound = new Audio('audio/walking.mp3');
    deadAnimationPlayed = false;

    constructor() {
        super().loadImage('./img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.applyGravity();
        this.animate();
    }

    animate() {

        setInterval(() => {
            if (!this.isDead()) { // Only allow movement if the character is not dead
                this.walking_sound.pause();
                if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                    this.moveRight();
                    this.otherDirection = false;
                    this.walking_sound.play();
                }
                if (this.world.keyboard.LEFT && this.x > 0 ) {
                   this.moveLeft();
                   this.otherDirection = true;
                    this.walking_sound.play();
                }

                if(this.world.keyboard.SPACE && !this.isAboveGround()) {
                    this.jump();
                }

                this.world.camera_x = -this.x + 100;
            }
        }, 1000 / 60);

        setInterval(() => {
            if (this.isDead()) {
                if (!this.deadAnimationPlayed) {
                    this.playAnimation(this.IMAGES_DEAD);
                    this.deadAnimationPlayed = true;
                } else {
                    this.fadeOut();
                }
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else {
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }
        }, 50);
    }

    playAnimation(images) {
        let i = this.currentImage % images.length; // Start animation from beginning
        let imagePath = images[i];
        this.img = this.imageCache[imagePath];
        this.currentImage++;
        if (this.isDead() && i === images.length - 1) {
            this.currentImage--; // Stop at the last image if character is dead
        }
    }

    draw(ctx) {
        ctx.globalAlpha = this.opacity; // Set the global alpha for the character
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        ctx.globalAlpha = 1; // Reset the global alpha so it doesn't affect other drawings
    }

    fadeOut() {
        if (this.opacity > 0) {
            this.opacity -= this.fadeOutSpeed;
            if (this.opacity < 0) {
                this.opacity = 0;
            }
        }
        if (this.opacity <= 0) {
            document.getElementById('fullscreen').classList.add('display-none');
            document.getElementById('you-lost').classList.remove('display-none');
        }
    }
}
