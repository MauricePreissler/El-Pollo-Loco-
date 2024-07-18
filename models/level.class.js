class Level {
    enemies;
    bottles;
    clouds;
    coins;
    backgroundObjects;
    level_end_x = 2200;

    constructor(enemies, bottles, clouds, backgroundObjects, coins) {
        this.enemies = enemies;
        this.bottles = bottles;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
    }
}