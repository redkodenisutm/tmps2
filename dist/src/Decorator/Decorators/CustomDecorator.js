import DisciplineDecorator from "./DisciplineDecorator.js";
export default class CustomDecorator extends DisciplineDecorator {
    constructor(discipline) {
        super(discipline);
        this.getInfo = () => {
            return this.discipline.getInfo() + "\n\nGood luck!";
        };
    }
}
//# sourceMappingURL=CustomDecorator.js.map