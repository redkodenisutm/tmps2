import Audioo from "./Audio.js";
import Gestures from "./Gestures.js";
import Mouse from "./Mouse.js";
import Screenn from "./Screen.js";
export default () => {
    const screen = new Screenn();
    const audio = new Audioo();
    const hand = new Gestures(screen);
    const mouse = new Mouse(audio);
    hand.tap();
    hand.swipe();
    hand.pinch();
    mouse.click();
    mouse.move();
    mouse.wheel();
};
//# sourceMappingURL=index.js.map