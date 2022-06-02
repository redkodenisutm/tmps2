import UniversityComponent from "./UniversityComponent.js";
export default class Speciality extends UniversityComponent {
    constructor(name) {
        super(name);
        this.components = [];
        this.display = () => {
            console.log(this.name, ":\n");
            this.components.forEach((element) => {
                console.log(element.name);
                console.log(element.components, "\n");
            });
        };
        this.addComponent = (component) => {
            this.components.push(component);
        };
        this.removeComponent = (component) => {
            delete this.components[this.components.indexOf(component)];
        };
    }
}
//# sourceMappingURL=Speciality.js.map