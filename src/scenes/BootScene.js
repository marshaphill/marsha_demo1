/*global Phaser*/
import * as ChangeScene from './ChangeScene.js';
export default class BootScene extends Phaser.Scene {
  constructor () {
    super('Boot');
  }

  init (data) {
    // Initialization code goes here
  }

  preload () {
    // Preload assets
    this.load.image('background', './assets/background.png');
    this.load.image('logo', './assets/logo.png');
    this.load.spritesheet('button', './assets/spriteSheets/button.png',{
      frameHeight: 202,
      frameWidth: 299
    });
    this.load.image('begin', './assets/buttonPrint.png');
    this.load.audio('pops', './assets/sounds/buttonCLick.mp3');

    // Declare variables for center of the scene
    this.centerX = this.cameras.main.width / 2;
    this.centerY = this.cameras.main.height / 2;
  }

  create (data) {
        ChangeScene.addSceneEventListeners(this);
    //Create the scene
    var background = this.add.sprite(1636/2,828/2, 'background');
    var logo = this.add.image(this.centerX, this.centerY - 45, 'logo');
    var tip = this.add.text(this.centerX -160 , this.centerY + 250,  "TIP: Save the dogs avoid the aliens!");

    logo.setScale(1.3);

    var sound = this.sound.add('pops');
    sound.addMarker({
      name: 'low',
      start: 5.2,
      duration: 0.5
    });
    sound.addMarker({
      name: 'high',
      start: 6.4,
      duration: 3
    });

    var button = this.add.sprite(this.centerX, this.centerY + 150, "button", 0).setInteractive();
    button.setScale(0.7);
    button.on("pointerover", function() {
      this.setFrame(1);
      sound.play('low');
    });


    button.on("pointerout", function () {
      this.setFrame(0);
    });
    var begin = this.add.sprite(this.centerX-2, this.centerY + 145, "begin");

    button.on("pointerup", function () {
       sound.play('high');
       this.scene.start('Scene1');
     }, this
    );
}

  update (time, delta) {
    // Update the scene
  }
}
