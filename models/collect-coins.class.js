class CollectCoins extends MovableObject {
    height = 70;
    width = 50;
    // y = 345;
    y = 125;
    
    IMAGES_WALKING = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png', 
    ];

    constructor (){
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 400
        this.animate();
    }

    animate() {
    
    setInterval(() => {
        this.playAnimation(this.IMAGES_WALKING);
    }, 300);
    }
}