/*global Phaser*/

export default {
  type: Phaser.AUTO,
  parent: 'phaser-example',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
  width: 1200,
  height: 780,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 700 },
        //debug: true
    }
  },
pixelArt: true
};
