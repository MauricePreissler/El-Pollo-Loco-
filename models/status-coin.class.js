class StatusBarCoins extends DrawableObject {
    IMAGES = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png'
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 20;
        this.y = 40;
        this.width = 200;
        this.height = 60;
        this.setPercentage(0);
    }

    setPercentage(collectedCoins, totalCoins) {
        console.log('Collected Coins:', collectedCoins);
        console.log('Total Coins:', totalCoins);
        let percentage;
        if (collectedCoins >= totalCoins) {
            percentage = 100;
        } else {
            percentage = (collectedCoins / totalCoins) * 100;
        }
        console.log('Percentage:', percentage);
        let path = this.IMAGES[this.resolveImageIndex(percentage)];
        this.img = this.imageCache[path];
    }

    resolveImageIndex(percentage) {
        if (percentage >= 100) {
            return 5;
        } else if (percentage > 80) {
            return 4;
        } else if (percentage > 60) {
            return 3;
        } else if (percentage > 40) {
            return 2;
        } else if (percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}
