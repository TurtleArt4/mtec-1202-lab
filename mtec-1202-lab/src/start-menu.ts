// 1. Create a class that is similar to 'MainGameScene'
// 2. Create a preload method within the class
// 3. Cut anything that references preloading.
import Phaser from 'phaser'

export default class StartMenu extends Phaser.Scene {
    constructor() {
        super({ key: 'start-menu' })
    }

    create() {

        // If you're going to add text just add it here.
        // Place 
        const mainCameraWidth = this.cameras.main.width;
        const mainCameraHeight = this.cameras.main.height;

        const halfHeight = mainCameraHeight / 2;
        const halfWidth = mainCameraWidth / 2;

        const backgroundImage = this.add.image(halfWidth, halfHeight, 'start-menu-bg');
        const startButton = this.add.image(halfWidth, halfHeight, 'start-button');
        // Add background music.
        // Decrease volume.
        // Loop it.

        backgroundImage.setOrigin(.5, .5);
        backgroundImage.setScale(1.5, 1.5);

        startButton.setOrigin(.5, .5);
        startButton.setScale(.5, .5);
        startButton.setInteractive();

        startButton.on('pointerover', function(){startButton.setTint(0xf0ff00);})
        startButton.on('pointerout', function(){startButton.setTint(0xffffff);})

        startButton.on('pointerdown', function(){
            // Navigate to the main game.
        });

    }

    update() {}
}