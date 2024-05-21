import Phaser from 'phaser';
import Preloader from './preloader'
import StartMenu from './start-menu';

class MainGameScene extends Phaser.Scene
{
    constructor () {
        super({ key: 'main-game' })
    }

    wKey: Phaser.Input.Keyboard.Key | undefined;
    aKey: Phaser.Input.Keyboard.Key | undefined;
    sKey: Phaser.Input.Keyboard.Key | undefined;
    dKey: Phaser.Input.Keyboard.Key | undefined;


    container: any
    container2: any

    create () {
        this.wKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.aKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.sKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.dKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        const mainCameraWidth = this.cameras.main.width;
        const mainCameraHeight = this.cameras.main.height;

        const halfHeight = mainCameraHeight / 2;
        const halfWidth = mainCameraWidth / 2;

        const backgroundImage = this.add.image(halfWidth, halfHeight, 'level-bg');
        
        backgroundImage.setOrigin(.5, .5);
        backgroundImage.setScale(1.5, 1.5);

        this.song = this.sound.add ('level-bgm',{volume:0.01})
        this.song.play({
            loop:true
        })

        const enemyImage = this.add.image(0, 0, 'enemy');
        enemyImage.setScale(0.3)
        const characterImage = this.add.image(0, 0, 'character');

        this.container = this.add.container(400, 300)
        this.container.add([ enemyImage ]);

        this.container.setSize(400, 300);
        this.container.setInteractive({ draggable: true });

        this.container.on('drag', (pointer, dragX, dragY) => {
            console.log('enemy')
            this.container.x = dragX;
            this.container.y = dragY;

        });

        this.container.on('pointerdown', (pointer, dragX, dragY) => {
            console.log('click')
        });

        this.container2 = this.add.container(400, 300)


        this.container2.add([ characterImage ]);


        this.container2.setSize(400, 300);
        this.container2.setInteractive({ draggable: false });

        
    }

    update() {
        if(this.aKey?.isDown) {
            this.container2.x = this.container2.x -= 10;
        }
        if(this.dKey?.isDown) {
            this.container2.x = this.container2.x += 10;
        }
        if(this.sKey?.isDown) {
            this.container2.y = this.container2.y += 10;
        }
        if(this.wKey?.isDown) {
            this.container2.y = this.container2.y -= 10;
        }
    }
}


const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    // Add Main Game to array.
    scene: [Preloader, StartMenu, MainGameScene],
    scale:
    {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};
export const game = new Phaser.Game(config)