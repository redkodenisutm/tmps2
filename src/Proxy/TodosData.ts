import axios, { AxiosResponse } from "axios";
import Todo from "./Todo.js";

export default class TodosData {
  getData = async (): Promise<AxiosResponse<Todo[]>> =>
    await axios.get("https://jsonplaceholder.typicode.com/todos");

  todos = this.getData();

  getTodoByUserId = async (userId: number) => {
    const { data: todos } = await this.todos;

    return todos.filter((todo) => todo.userId === userId);
  };
}
