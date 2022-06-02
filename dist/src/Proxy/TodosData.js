import axios from "axios";
export default class TodosData {
    constructor() {
        this.getData = async () => await axios.get("https://jsonplaceholder.typicode.com/todos");
        this.todos = this.getData();
        this.getTodoByUserId = async (userId) => {
            const { data: todos } = await this.todos;
            return todos.filter((todo) => todo.userId === userId);
        };
    }
}
//# sourceMappingURL=TodosData.js.map