class Level {
    enemies;
    clouds;
    friends;
    backgroundObjects;
    level_end_x = 2200;

    constructor(enemies, clouds, friends, backgroundObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.friends = friends;
        this.backgroundObjects = backgroundObjects;
    }
}