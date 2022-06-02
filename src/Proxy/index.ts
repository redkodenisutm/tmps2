import TodosData from "./TodosData.js";
import Proxy from "./Proxy.js";

export default async () => {
  const todosData = new TodosData();

  const todos = new Proxy(todosData);
  const data = await todos.getTodoByUserId(2);
  const cachedData = await todos.getTodoByUserId(2);

  console.log(data);
  console.log("-------------------------------------");
  console.log(cachedData);
};
