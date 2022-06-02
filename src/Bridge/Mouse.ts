export default class Mouse implements IMouse {
  output;

  constructor(output) {
    this.output = output;
  }

  click = () => {
    this.output.click();
  };
  move = () => {
    this.output.move();
  };
  down = () => {
    this.output.drag();
  };
  wheel = () => {
    this.output.zoom();
  };
}
