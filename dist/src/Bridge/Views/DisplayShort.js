import Display from './Display.js';
export default class DisplayShort extends Display {
    generate() {
        return `
      Discipline: ${this.discipline.getName()}, ${this.discipline.getDisciplineType()}
      Teacher: ${this.discipline.getTeacher()}
      Time: ${this.discipline.getTime()}
      Classroom: ${this.discipline.getClassRoom()}
    `;
    }
}
//# sourceMappingURL=DisplayShort.js.map