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
    var text = this.add.text(450, 50, "Save The Dogs!!!", {
      fontSize: '32px'
    });
    this.player = this.physics.add.sprite(this.centerX, this.centerY + 400, 'ship');
    this.player.setScale(0.3);
    this.player.setCollideWorldBounds(true);
    this.physics.world.setBounds(0,0, 1200, this.centerY+400);

    this.score = 0;
    this.scoreText = this.add.text(1000, 100, 'Score: ' + this.score);

    // var pup = [
    //   this.add.sprite(10, 0, 'bean'),
    //   this.add.sprite(10, 0, 'bernie'),
    //   this.add.sprite(10, 0, 'dean'),
    //   this.add.sprite(10, 0, 'bruiser')
    //   this.add.sprite(10, 0, 'tater')
    // ];
    //
    // pup.setScale(0.5);


    this.enemyGroup = this.physics.add.group({
      //setScale: { x: 0.2, y: 0.2},
      key: "bean",
      repeat: 12,
      setXY: {
        x: 50,
        y: 0,
        stepX: 100,
        stepY: 30 //makes new enemy down 100
      }
    });

    this.enemyGroup.children.iterate(function(child) {
      child.setScale(0.15);
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

    this.physics.add.overlap(this.player, this.enemyGroup, this.collectPup, null, this);

  }

  collectPup (player, pup)
  {
    pup.disableBody(true, true);

    //  Add and update the score
    this.score += 10;
    this.scoreText.setText('Score: ' + this.score);

  }
}
