export default class Gestures {
    constructor(output) {
        this.tap = () => {
            this.output.click();
        };
        this.swipe = () => {
            this.output.move();
        };
        this.pan = () => {
            this.output.drag();
        };
        this.pinch = () => {
            this.output.zoom();
        };
        this.output = output;
    }
}
//# sourceMappingURL=Gestures.js.map