import DisciplineDecorator from "./DisciplineDecorator.js";
export default class SeminarDecorator extends DisciplineDecorator {
    constructor(discipline) {
        super(discipline);
        this.getInfo = () => {
            return this.discipline.getInfo() + "\nThis discipline includes Seminars";
        };
    }
}
//# sourceMappingURL=SeminarDecorator.js.map