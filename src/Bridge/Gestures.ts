export default class Gestures implements IGestures {
  output;

  constructor(output) {
    this.output = output;
  }

  tap = () => { 
    this.output.click();
  };
  swipe = () => {
    this.output.move();
  };
  pan = () => {
    this.output.drag();
  };
  pinch = () => {
    this.output.zoom();
  };
}
