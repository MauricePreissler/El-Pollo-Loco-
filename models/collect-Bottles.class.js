class CollectBottles extends MovableObject {
    height = 70;
    width = 50;
    y = 345;
    
    IMAGES_WALKING = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
       
    ];

    

    constructor (){
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 300
        this.animate();
    }

    animate() {
    
    setInterval(() => {
        this.playAnimation(this.IMAGES_WALKING);
    }, 300);
    }
}