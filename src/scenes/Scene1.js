/*global Phaser*/
export default class Scene1 extends Phaser.Scene {

  constructor () {
    super('Scene1');
  }

  init (data) {
    // Initialization code goes here
  }

  preload () {
    // Preload assets
    this.load.image('background', './assets/background.png');
    this.load.image('ship', './assets/ship.png');
    this.load.image('bean', './assets/pups/bean.png');
    this.load.image('bernie', './assets/pups/bernie.png');
    this.load.image('dean', './assets/pups/dean.png');
    this.load.image('bruiser', './assets/pups/bruiser.png');
    this.load.image('tater', './assets/pups/tater.png');

    // Declare variables for center of the scene
    this.centerX = this.cameras.main.width / 2;
    this.centerY = this.cameras.main.height / 2;
  }

  create (data) {
    //Create the scene
    var background = this.add.sprite(1636/2,828/2, 'background');
    this.player = this.physics.add.sprite(this.centerX, this.centerY + 250, 'ship');
    this.player.setScale(0.5);
    this.player.setCollideWorldBounds(true);
    this.physics.world.setBounds(0,0, 1200, 960);

    this.enemyGroup = this.physics.add.group({
      key: "soda",
      repeat: 4,
      setXY: {
        x: 100,
        y: 100,
        stepX: 0,
        stepY: 100 //makes new enemy down 100
      }
    });

}

  update (time, delta) {
    // Update the scene
    var cursors = this.input.keyboard.createCursorKeys();
    var speed = 50;

    if(cursors.left.isDown){
      this.player.x -= speed;

    } else if(cursors.right.isDown) {
      this.player.x += speed;

    }
  }
}
