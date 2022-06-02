export default class Audioo implements IOutput {
  public click() {
    console.log("Sound oink");
  }
  public move() {
    console.log("Sound waves");
  }
  public drag() {
    console.log("Sound screetch");
  }
  public zoom() {
    console.log("Sound volume up");
  }
}
