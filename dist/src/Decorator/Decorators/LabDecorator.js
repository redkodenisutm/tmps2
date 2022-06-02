import DisciplineDecorator from "./DisciplineDecorator.js";
export default class LabDecorator extends DisciplineDecorator {
    constructor(discipline) {
        super(discipline);
        this.getInfo = () => {
            return this.discipline.getInfo() + "\nThis discipline includes Labs";
        };
    }
}
//# sourceMappingURL=LabDecorator.js.map