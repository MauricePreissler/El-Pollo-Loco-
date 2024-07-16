
class StatusBarEndboss extends MovableObject {
    height = 400;
    width = 300;
    y = 55;
    
    IMAGES = [
                'img/7_statusbars/2_statusbar_endboss/orange/orange0.png',
                'img/7_statusbars/2_statusbar_endboss/orange/orange20.png',
                'img/7_statusbars/2_statusbar_endboss/orange/orange40.png',
                'img/7_statusbars/2_statusbar_endboss/orange/orange60.png',
                'img/7_statusbars/2_statusbar_endboss/orange/orange80.png',
                'img/7_statusbars/2_statusbar_endboss/orange/orange100.png'
        
    ];

    percentage = 100;

    
                






    constructor (){
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 2500;
        this.animate();

        super();
<<<<<<< HEAD
                this.loadImages(this.IMAGES);
                this.x = 500;
                this.y = 0;
                this.width = 200;
                this.height = 60;
                this.setPercentage(100);
                
            }

            setPercentage(percentage) {
                        this.percentage = percentage;
                        let path = this.IMAGES[this.resolveImageIndex()];
                        this.img = this.imageCache[path];
                
                    }
=======
        this.loadImages(this.IMAGES);
        this.x = 2600;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.setPercentage(100);
        
>>>>>>> 59d0c6934ad8eb0ddd4d6934e1c94de04d2a042b
    }

    animate() {
    
    setInterval(() => {
        this.playAnimation(this.IMAGES_WALKING);
    }, 200);
    }


resolveImageIndex() {
                if(this.percentage == 100) {
                    return 5;
                } else if (this.percentage > 80) {
                    return 4;
                } else if (this.percentage > 60) {
                    return 3;
                } else if (this.percentage > 40) {
                    return 2;
                } else if (this.percentage > 20) {
                    return 1;
            }  else {
                return 0;
            }
        }
   






// class StatusBarEndboss extends DrawableObject {
//     IMAGES = [
//         'img/7_statusbars/2_statusbar_endboss/orange/orange0.png',
//         'img/7_statusbars/2_statusbar_endboss/orange/orange20.png',
//         'img/7_statusbars/2_statusbar_endboss/orange/orange40.png',
//         'img/7_statusbars/2_statusbar_endboss/orange/orange60.png',
//         'img/7_statusbars/2_statusbar_endboss/orange/orange80.png',
//         'img/7_statusbars/2_statusbar_endboss/orange/orange100.png'

//     ];

//     percentage = 100;

//     constructor() {
//         super();
//         this.loadImages(this.IMAGES);
//         this.x = 500;
//         this.y = 0;
//         this.width = 200;
//         this.height = 60;
//         this.setPercentage(100);
        
//     }

//     setPercentage(percentage) {
//         this.percentage = percentage;
//         let path = this.IMAGES[this.resolveImageIndex()];
//         this.img = this.imageCache[path];

//     }


//         resolveImageIndex() {
//             if(this.percentage == 100) {
//                 return 5;
//             } else if (this.percentage > 80) {
//                 return 4;
//             } else if (this.percentage > 60) {
//                 return 3;
//             } else if (this.percentage > 40) {
//                 return 2;
//             } else if (this.percentage > 20) {
//                 return 1;
//         }  else {
//             return 0;
//         }
//     }
// }