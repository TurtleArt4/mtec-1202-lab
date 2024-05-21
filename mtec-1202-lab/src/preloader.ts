// 1. Create a class that is similar to 'MainGameScene'
// 2. Create a preload method within the class
// 3. Cut anything that references preloading.
import Phaser from 'phaser'

export default class Preloader extends Phaser.Scene {
    constructor () {
        super({ key: 'preloader' })
    }

    preload() {
        this.load.audio('menu-bgm', '/menu.mp3');
        this.load.audio('level-bgm', 'level.mp3');
        this.load.image('enemy', '/enemy.png');
        this.load.image('character', '/character.gif');
        this.load.image('start-menu-bg', '/bg.jpg');
        this.load.image('start-button', '/start-button.png');
        this.load.image('level-bg', '/pixel medows.png');

        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(240, 270, 320, 50);
        this.load.on('progress', function (value) {
            console.log(value);
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(250, 280, 300 * value, 30);
        });
        const thisScene = this.scene;

        this.load.on('complete', function() {
            thisScene.start('start-menu')
        })
    }

    
}