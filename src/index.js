/*global Phaser, window*/
import BootScene from './scenes/BootScene.js';
import Scene1 from './scenes/Scene1.js';
import EndGame from './scenes/EndGame.js';
import Config from './config/config.js';

class Game extends Phaser.Game {
  constructor () {
    super(Config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Scene1', Scene1);
    this.scene.add('EndGame', EndGame);

    this.scene.start('Boot');
  }
}

window.game = new Game();
