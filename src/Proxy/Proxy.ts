import Todo from "./Todo";
import TodosData from "./TodosData";

export default class Proxy {
  readonly todosData: TodosData;
  cache: Todo[] = [];

  constructor(todosData: TodosData) {
    this.todosData = todosData;
  }

  getTodoByUserId = async (userId: number) => {
    const foundInCache = this.cache.filter((todo) => todo.userId === userId);

    if (!foundInCache.length) {
      console.log("No todo found in cache, fetching...");
      const todos = await this.todosData.getTodoByUserId(userId);
      console.log(`todos:\n`, todos.slice(0, 2));
      this.cache = [...this.cache, ...todos];

      return todos;
    } else {
      console.log("Todos found in cache");

      return foundInCache.slice(0, 2);
    }
  };
}
