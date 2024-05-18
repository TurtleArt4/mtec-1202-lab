// 1. Create a class that is similar to 'MainGameScene'
// 2. Create a preload method within the class
// 3. Cut anything that references preloading.
import Phaser from 'phaser'

export default class Preloader extends Phaser.Scene {
    constructor () {
        super({ key: 'preloader' })
    }

    preload() {
        // Load background music.
        this.load.audio('menu-bgm', '/menu.mp3');
        this.load.audio('level-bmg', 'level.mp3');
        this.load.image('enemy', '/enemy.png');
        this.load.image('character', '/character.gif');
        this.load.image('start-menu-bg', '/bg.jpg');
        this.load.image('start-button', '/start-button.png');

        const thisScene = this.scene;

        this.load.on('complete', function() {
            thisScene.start('start-menu')
        })
    }
}