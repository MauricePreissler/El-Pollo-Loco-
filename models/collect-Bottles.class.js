class CollectBottles extends MovableObject {
    height = 70;
    width = 70;
    y = 380;
    offset = {
		top: 10,
		bottom: 10,
		left: 20,
		right: 20,
	};
    
    IMAGES_WALKING = [
        // 'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
       
    ];

    constructor (){
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        // this.x = 300
        this.x = 100 + Math.random() * 4 * 400; // Zufällige X-Position für die Flasche
        this.y = 380; // Feste Y-Position für die Flasche
    
        this.animate();
    }

    animate() {
    
    setInterval(() => {
        this.playAnimation(this.IMAGES_WALKING);
    }, 300);
    }
}



class Bottle extends MovableObject {
	width = 70;
	height = 70;
	offset = {
		top: 10,
		bottom: 10,
		left: 20,
		right: 20,
	};
	BOTTLE_IMAGE = ["img/6_salsa_bottle/2_salsa_bottle_on_ground.png"];

	/**
	 *  Once a bottle object with different x coordinates created, its image path is stored in the src attribute of a newly created image object
	 *  using 'loadImage()' of the super constructor
	 */
	constructor() {
		super().loadImage(this.BOTTLE_IMAGE[0]); // Aufruf der Methode loadImage des übergeordneten Konstruktors
        this.x = 100 + Math.random() * 4 * 400; // Zufällige X-Position für die Flasche
        this.y = 360; // Feste Y-Position für die Flasche
    
	}
}