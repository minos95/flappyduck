import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  width: 1024,
  height: 720,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: {
    preload: preload,
    create: create,
  },
};
function preload() {
  this.load.image("sky", "../assets/background0.jpg");
}
function create() {
  this.add.image(400, 300, "sky");
}

new Phaser.Game(config);
