class CollectCoins extends MovableObject {
    // height = 70;
    // width = 50;
    height = 100;
    width = 100;
    y = 125;
    offset = {
		top: 35,
		bottom: 35,
		left: 35,
		right: 35,
	};
    
    IMAGES_WALKING = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png', 
    ];

    constructor (){
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        // this.x = 400
        this.y = 160 + Math.random() * 100;
        this.x = 700 + Math.random() * 3 * Math.random() * 600;
        this.animate();

            // super().loadImage(this.COIN_IMAGE[0]);
            // this.loadImages(this.COIN_IMAGE);
          
    }

    animate() {
    
    setInterval(() => {
        this.playAnimation(this.IMAGES_WALKING);
    }, 300);
    }
}

// class Coin extends MovableObject {
// 	width = 100;
// 	height = 100;
// 	offset = {
// 		top: 35,
// 		bottom: 35,
// 		left: 35,
// 		right: 35,
// 	};
// 	COIN_IMAGE = ["img/8_coin/coin_1.png", "img/8_coin/coin_2.png"];

	/**
	 *  Once a Coin Object is created, its image path is stored in the src attribute of a newly created image object
	 *  using 'loadImage()' of the super constructor. Places them on different X positions
	 */
	// constructor() {
	// 	super().loadImage(this.COIN_IMAGE[0]);
	// 	this.loadImages(this.COIN_IMAGE);
	// 	this.y = 160 + Math.random() * 100;
	// 	this.x = 500 + Math.random() * 3 * Math.random() * 600;
	

