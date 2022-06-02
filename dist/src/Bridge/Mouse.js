export default class Mouse {
    constructor(output) {
        this.click = () => {
            this.output.click();
        };
        this.move = () => {
            this.output.move();
        };
        this.down = () => {
            this.output.drag();
        };
        this.wheel = () => {
            this.output.zoom();
        };
        this.output = output;
    }
}
//# sourceMappingURL=Mouse.js.map