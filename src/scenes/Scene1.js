/*global Phaser*/
import * as ChangeScene from './ChangeScene.js';
export default class Scene1 extends Phaser.Scene {

  constructor () {
    super('Scene1');
  }

  init (data) {
    // Initialization code goes here
    this.score = data.score;
    this.alienScore = data.alienScore;
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

    this.load.image('alien', './assets/alien.png');

    this.load.spritesheet('pups', './assets/spriteSheets/pups.png',{
      frameHeight: 612,
      frameWidth: 612
    });

    // Declare variables for center of the scene
    this.centerX = this.cameras.main.width / 2;
    this.centerY = this.cameras.main.height / 2;

    this.enemy = [];

  }

  create (data) {
    //ChangeScene.addSceneEventListeners(this);

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
    this.alienScore = 0;
    this.scoreText = this.add.text(1000, 100, 'Score: ' + this.score);

    this.xRan = function(){
      var xPos = Math.floor(Math.random() * 800);
      console.log(xpos);
      return xPos
    };
    this.yRan = 30;

    this.enemyGroup = this.physics.add.group(
      {
      key: "pups",
      repeat: 20,
      setXY: {
        x: Math.floor(Math.random() * 1000) + 50,
        y: Math.floor(Math.random() * - 1000)
      }
    });

    this.enemyGroup.children.iterate(function(child) {
      var num = Math.floor(Math.random() * (5 ) );
      child.setScale(0.15);
      child.setFrame(num);

      child.x = Math.floor(Math.random() * 1000) + 50,
      child.y = Math.floor(Math.random() * - 1000)

    });

    // this.enemyGroup.forEach(function(item) {
    //     this.enemyGroup.x = Math.floor(Math.random() * 800),
    //     this.enemyGroup.y = Math.floor(Math.random() * -200)
    // }, this);

    // for (var i=0; i<13; i++){
    //   this.enemy[i] = this.pyhsics.add.sprite(Math.floor(Math.random() * 800), Math.floor(Math.random() * -200), 'pups');
    //   this.enemyGroup.add(this.enemy[i]);
    // }


    this.alienGroup = this.physics.add.group(
      {
      key: "alien",
      repeat: 4,
      setXY: {
        x: Math.floor(Math.random() * 1000) + 50,
        y: Math.floor(Math.random() * 400),
      }
    });

    this.alienGroup.children.iterate(function(child) {
      child.setScale(0.15);

      child.x = Math.floor(Math.random() * 1000) + 50,
      child.y = Math.floor(Math.random() * - 400)
    });


    this.gameOver = this.add.text(1000, 700, 'space to continue');
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
    this.physics.add.overlap(this.player, this.alienGroup, this.gotAlien, null, this);

    //this.physics.add.overlap(this.enemyGroup, this.alienGroup, this.alienOnPup, null, this);)

    if(cursors.space.isDown){
      this.scene.start('EndGame', {score: this.score, alienScore: this.alienScore});
      console.log(this.score);
    }


  }

  collectPup (player, pup)
  {
    pup.disableBody(true, true);

    //  Add and update the score
    this.score += 1;
    this.scoreText.setText('Saved ' + this.score + ' puppies!');

  }

  gotAlien (player, alien)
  {
    alien.disableBody(true, true);

    //  Add and update the score
    this.score -= 1;
    this.alienScore += 1;
    //this.scoreText.setText('Saved ' + this.score + ' puppies!');

  }

  alienOnPup (pup, alien)
  {
    alien.disableBody(true, true);

  }


}
