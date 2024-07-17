// class Endboss extends MovableObject {
//     height = 400;
//     width = 300;
//     y = 55;
    
//     IMAGES_WALKING = [
//         'img/4_enemie_boss_chicken/2_alert/G5.png',
//         'img/4_enemie_boss_chicken/2_alert/G6.png',
//         'img/4_enemie_boss_chicken/2_alert/G7.png',
//         'img/4_enemie_boss_chicken/2_alert/G8.png',
//         'img/4_enemie_boss_chicken/2_alert/G9.png',
//         'img/4_enemie_boss_chicken/2_alert/G10.png',
//         'img/4_enemie_boss_chicken/2_alert/G11.png',
//         'img/4_enemie_boss_chicken/2_alert/G12.png'
//     ];

//     IMAGES_BOSS_DEAD = [
//         'img/4_enemie_boss_chicken/5_dead/G24.png',
//         'img/4_enemie_boss_chicken/5_dead/G25.png',
//         'img/4_enemie_boss_chicken/5_dead/G26.png'
//     ];

    

//     world;

//     constructor() {
//         super().loadImage('./img/4_enemie_boss_chicken/2_alert/G5.png');
//         this.loadImages(this.IMAGES_WALKING);
//         this.loadImages(this.IMAGES_BOSS_DEAD);
//         this.x = 2500;
//         this.animate();
//     }

//     animate() {
//         setInterval(() => {
//             if (this.isDead()) {
//                 this.playAnimation(this.IMAGES_BOSS_DEAD);
//             } else {
//                 this.playAnimation(this.IMAGES_WALKING);
//             }
//         }, 200);
//     }
// }





// part






// class Endboss extends MovableObject {
//     height = 400;
//     width = 300;
//     y = 55;

//     IMAGES_WALKING = [
//         'img/4_enemie_boss_chicken/2_alert/G5.png',
//         'img/4_enemie_boss_chicken/2_alert/G6.png',
//         'img/4_enemie_boss_chicken/2_alert/G7.png',
//         'img/4_enemie_boss_chicken/2_alert/G8.png',
//         'img/4_enemie_boss_chicken/2_alert/G9.png',
//         'img/4_enemie_boss_chicken/2_alert/G10.png',
//         'img/4_enemie_boss_chicken/2_alert/G11.png',
//         'img/4_enemie_boss_chicken/2_alert/G12.png'
//     ];

//     IMAGES_BOSS_DEAD = [
//         'img/4_enemie_boss_chicken/5_dead/G24.png',
//         'img/4_enemie_boss_chicken/5_dead/G25.png',
//         'img/4_enemie_boss_chicken/5_dead/G26.png'
//     ];

//     world;
//     deadAnimationIndex = 0;
//     isDeadAnimationComplete = false;

//     constructor() {
//         super().loadImage('./img/4_enemie_boss_chicken/2_alert/G5.png');
//         this.loadImages(this.IMAGES_WALKING);
//         this.loadImages(this.IMAGES_BOSS_DEAD);
//         this.x = 2500;
//         this.animate();
//     }

//     animate() {
//         setInterval(() => {
//             if (this.isDead()) {
//                 if (!this.isDeadAnimationComplete) {
//                     this.playAnimation(this.IMAGES_BOSS_DEAD);
//                 }
//             } else {
//                 this.playAnimation(this.IMAGES_WALKING);
//             }
//         }, 200);
//     }

//     playAnimation(images) {
//         let i = this.currentImage % images.length;
//         this.img = this.imageCache[images[i]];
//         this.currentImage++;

//         if (images === this.IMAGES_BOSS_DEAD && i === images.length - 1) {
//             this.isDeadAnimationComplete = true;
//         }
//     }
// }




// part1





class Endboss extends MovableObject {
    height = 400;
    width = 300;
    speed = 0.60;
    y = 55;

    IMAGES_WALKING =[
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    IMAGES_BOSS_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png'
    ];

    world;
    isDeadAnimationComplete = false;
    alpha = 1; // Transparenzwert (1 = vollständig sichtbar, 0 = vollständig unsichtbar)
    currentImage = 0;

    constructor() {
        super().loadImage('./img/4_enemie_boss_chicken/2_alert/G5.png');
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_BOSS_DEAD);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 2500;
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.isDead()) {
                if (!this.isDeadAnimationComplete) {
                    this.playAnimation(this.IMAGES_BOSS_DEAD);
                } else {
                    this.fadeOut();
                }
            } else if (this.energy < 100) {
                this.playAnimation(this.IMAGES_WALKING);
            } else {
                this.playAnimation(this.IMAGES_ALERT);
            }
        }, 200);
        setInterval(() => {
            if (this.energy < 100) {
                this.x -= this.speed
            }
        }, 1000 / 120);
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        this.img = this.imageCache[images[i]];
        this.currentImage++;

        if (images === this.IMAGES_BOSS_DEAD && i === images.length - 1) {
            this.isDeadAnimationComplete = true;
        }
    }

    fadeOut() {
        if (this.alpha > 0) {
            this.alpha -= 0.05; // Verringere die Transparenz allmählich
            if (this.alpha < 0) {
                this.alpha = 0; // Stelle sicher, dass der Alpha-Wert nicht negativ wird
            }
            this.img.style.opacity = this.alpha;
        }
        if (this.alpha <= 0) {
            document.getElementById('fullscreen').classList.add('display-none');
            document.getElementById('you-win').classList.remove('display-none');
        }
    }

    draw(ctx) {
        ctx.globalAlpha = this.alpha;
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        ctx.globalAlpha = 1; // Setze die Transparenz zurück, damit andere Objekte nicht betroffen sind
    }
}
