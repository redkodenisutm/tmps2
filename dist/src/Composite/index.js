import Discipline from "./Discipline.js";
import DisciplineType from "./DisciplineType.js";
import Speciality from "./Speciality.js";
let TI = new Speciality("IT");
let RM = new Speciality("ME");
let curs = new DisciplineType("Curs");
let seminar = new DisciplineType("Seminar");
let laborator = new DisciplineType("Laborator");
let empty = new DisciplineType("");
let TMPS = new Discipline("TMPS");
let SDA = new Discipline("SDA");
let PR = new Discipline("PR");
const addDiscipline = (discipline, curs, seminar, laborator) => {
    discipline.addComponent(curs);
    discipline.addComponent(seminar);
    discipline.addComponent(laborator);
};
export default () => {
    TI.addComponent(TMPS);
    addDiscipline(TMPS, curs, seminar, laborator);
    TI.addComponent(PR);
    addDiscipline(PR, curs, empty, laborator);
    RM.addComponent(SDA);
    addDiscipline(SDA, curs, null, laborator);
    TI.display();
    RM.display();
};
//# sourceMappingURL=index.js.map