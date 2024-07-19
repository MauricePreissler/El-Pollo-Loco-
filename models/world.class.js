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
    collectedCoins = [];
    collectedBottles = [];
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

    checkThrowObjects() {
        if (this.keyboard.D && this.collectedBottles.length > 0) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
            this.collectedBottles.pop(); // Entfernt eine Flasche aus der Sammlung
            this.StatusBarBottles.setPercentage((this.collectedBottles.length / 5) * 100); // Aktualisiert die Statusleiste
        }
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                if (enemy instanceof Chicken || enemy instanceof smallChicken) {
                    if (enemy.isDead) {
                        // Kein Schaden, wenn das Hähnchen tot ist
                        return;
                    }
                    if (this.character.y + this.character.height <= enemy.y + enemy.height / 2) {
                        // Der Charakter springt von oben auf das Hähnchen
                        enemy.stopMovement(); // Stoppt die Bewegung des Hähnchens
                        console.log('Character hit the Chicken from above');
                    } else {
                        this.character.hit(); // Der Charakter nimmt Schaden
                        this.statusBar.setPercentage(this.character.energy); // Aktualisiert die Statusleiste
                    }
                } else {
                    this.character.hit(); // Der Charakter nimmt Schaden
                    this.statusBar.setPercentage(this.character.energy); // Aktualisiert die Statusleiste
                }
            }
        });

        this.throwableObjects.forEach((throwableObject) => {
            if (throwableObject.isColliding(this.endboss)) {
                this.endboss.attack();
                this.StatusBarEndboss.setPercentage(this.endboss.energy);
                console.log('Throwable Object hit the Endboss', this.endboss.energy);
            }
        });

        if (this.character.isColliding(this.endboss)) {
            this.character.endbossAttackCharacter();
            this.statusBar.setPercentage(this.character.energy);
            console.log('Endboss hit the Character', this.character.energy);
        }

        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                console.log('Character hit the Coins');
                this.collectedCoins.push(coin);
                this.level.coins.splice(this.level.coins.indexOf(coin), 1); // Entfernt die Münze aus dem Level
                this.StatusBarCoins.setPercentage(this.collectedCoins.length, 5); // Setze 5 als die Gesamtzahl der Münzen
            }
        });

        this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle) && this.collectedBottles.length < 5) {
                console.log('Character hit the Bottles');
                this.collectedBottles.push(bottle);
                this.level.bottles.splice(this.level.bottles.indexOf(bottle), 1); // Entfernt die Flasche aus dem Level
                this.StatusBarBottles.setPercentage((this.collectedBottles.length / 5) * 100); // Aktualisiert die Statusleiste
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

        this.addObjectsToMap(this.level.bottles);
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

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
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



