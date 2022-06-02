export default class Discipline {
    constructor(props) {
        this.getName = () => {
            return this.props.name;
        };
        this.getDisciplineType = () => {
            return this.props.disciplineType;
        };
        this.getTeacher = () => {
            return this.props.teacher;
        };
        this.getTime = () => {
            return this.props.time;
        };
        this.getClassRoom = () => {
            return this.props.classroom;
        };
        this.getAdditionalInfo = () => {
            return this.props.additionalInfo;
        };
        this.props = {
            name: props.name,
            disciplineType: props.disciplineType,
            teacher: props.teacher,
            time: props.time,
            classroom: props.classroom,
            additionalInfo: props.additionalInfo,
        };
    }
}
//# sourceMappingURL=Discipline.js.map