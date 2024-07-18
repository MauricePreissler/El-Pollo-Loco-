class World {
    character = new Character();
    endboss = new Endboss();
    throwableObject = new ThrowableObject();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    StatusBarBottles = new StatusBarBottles();
    StatusBarCoins = new StatusBarCoins();
    StatusBarEndboss = new StatusBarEndboss();
    CollectBottles = new CollectBottles();
    // CollectCoins = new CollectCoins ();
    collectedCoins=[];
    collectedBottles=[];
    throwableObjects = [];

constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
}



    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);
    }

    checkThrowObjects () {
        if (this.keyboard.D) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
        }
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });
        
        // this.level.friends.forEach((friend) => {
        //     if (this.character.isColliding(friend)) {
        //         this.character.addBottles();
        //         this.StatusBarCoins.setPercentage(this.CollectCoins.bottles);
        //         this.StatusBarBottles.setPercentage(this.CollectBottles.bottles);
        //         console.log('hit the bottle',this.CollectBottles.bottles);
        //     }
        // });
       

        this.throwableObjects.forEach((throwableObject) => {
            if (throwableObject.isColliding(this.endboss)) {
                this.endboss.attack();
                this.StatusBarEndboss.setPercentage(this.endboss.energy);
                console.log('Throwable Object hit the Endboss',this.endboss.energy);
            }
        });

        if (this.character.isColliding(this.endboss)) {
            this.character.endbossAttackCharacter();  
            this.statusBar.setPercentage(this.character.energy);
            console.log('Endboss hit the Charakter',this.character.energy);
        }

        this.level.coins.forEach((coin) => {
        if (this.character.isColliding(coin)) {
            console.log('Charakter hit the Coins');
        }
    });

        
    }

    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.StatusBarCoins);
        this.addToMap(this.StatusBarBottles);
        this.addToMap(this.StatusBarEndboss);
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.CollectBottles);
        this.addObjectsToMap(this.level.coins);

        

        this.addToMap(this.endboss);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0);


        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if(mo.otherDirection) {
            this.flipImage(mo);


        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}
