/*global Phaser*/
import * as ChangeScene from './ChangeScene.js';
export default class EndGame extends Phaser.Scene {
 constructor () {
   super('EndGame');
 }

 init (data) {
   // Initialization code goes here
   this.score = data.score
   // Initialization code goes here
   this.alienScore = data.alienScore;
 }

 preload () {
   // Preload assets
   this.load.image('background', './assets/background.png');
   this.load.image('over', './assets/gameOver.png');

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
   ChangeScene.addSceneEventListeners(this);
   //Create the scene
   var background = this.add.sprite(1636/2,828/2, 'background');
   var text = this.add.sprite(this.centerX , this.centerY, 'over');

   var score = this.add.text(this.centerX -80 , this.centerY + 100,  data.score + " pups are grateful!");
   var score = this.add.text(this.centerX -100 , this.centerY + 150,  data.alienScore + " puppies were stolen!");


   var tater = this.add.sprite(200, 150, 'tater');
   tater.setScale(0.5);
   var bernie = this.add.sprite(this.centerX, 210, 'bernie');
   bernie.setScale(0.5);
   var dean = this.add.sprite(1000, 160, 'dean');
   dean.setScale(0.5);
   var bruiser = this.add.sprite(250, 600, 'bruiser');
   bruiser.setScale(0.5);
   var bean = this.add.sprite(1000, 600, 'bean');
   bean.setScale(0.5);

 }

 update (time, delta) {
   // Update the scene
 }
}
