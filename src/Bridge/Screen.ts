export default class Screenn implements IOutput {
  public click() {
    console.log("Screen select");
  }
  public move() {
    console.log("Screen move");
  }
  public drag() {
    console.log("Screen drag");
  }
  public zoom() {
    console.log("Screen zoom in");
  }
}
