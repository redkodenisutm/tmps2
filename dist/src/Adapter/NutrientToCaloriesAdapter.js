import CaloriesByGrams from './CaloriesByGrams.js';
export default class NutrientToCaloriesAdapter {
    constructor() {
        this.nutritionInfo = new CaloriesByGrams();
        this.convertAndPrint = (nutrient) => {
            const quantity = nutrient.quantity * 1000;
            return this.nutritionInfo.calculate(Object.assign(Object.assign({}, nutrient), { quantity, unit: 'grams' }));
        };
    }
}
//# sourceMappingURL=NutrientToCaloriesAdapter.js.map