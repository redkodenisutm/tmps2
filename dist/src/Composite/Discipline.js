import UniversityComponent from "./UniversityComponent.js";
export default class Discipline extends UniversityComponent {
    constructor(name) {
        super(name);
        this.components = [];
        this.addComponent = (component) => {
            this.components.push(component);
        };
        this.removeComponent = (component) => {
            delete this.components[this.components.indexOf(component)];
        };
    }
}
//# sourceMappingURL=Discipline.js.map