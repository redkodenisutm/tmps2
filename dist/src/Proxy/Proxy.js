export default class Proxy {
    constructor(todosData) {
        this.cache = [];
        this.getTodoByUserId = async (userId) => {
            const foundInCache = this.cache.filter((todo) => todo.userId === userId);
            if (!foundInCache.length) {
                console.log("No todo found in cache, fetching...");
                const todos = await this.todosData.getTodoByUserId(userId);
                console.log(`todos:\n`, todos.slice(0, 2));
                this.cache = [...this.cache, ...todos];
                return todos;
            }
            else {
                console.log("Todos found in cache");
                return foundInCache.slice(0, 2);
            }
        };
        this.todosData = todosData;
    }
}
//# sourceMappingURL=Proxy.js.map