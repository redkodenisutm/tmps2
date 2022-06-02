export default class CaloriesByGrams {
    constructor() {
        this.calculate = ({ type, quantity, unit }) => {
            let result;
            if (type !== "fat") {
                result = (quantity * 4).toString();
            }
            else {
                result = (quantity * 9).toString();
            }
            if (unit !== "grams") {
                return `Are you sure you specified grams?`;
            }
            else {
                return `${quantity} ${unit} of ${type} has ${result} calories.`;
            }
        };
    }
}
//# sourceMappingURL=CaloriesByGrams.js.map