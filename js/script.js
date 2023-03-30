const {createApp} = Vue;

createApp({
  data(){
    return{
      todos: [
        {
          todo: "Fare la spesa",
          done: false,
        },
        {
          todo: "Andare dal meccanico",
          done: false,
        },
        {
          todo: "Fare i compiti",
          done: false,
        }
      ],
      newTodo: "",
      error: false
    };
  },
  methods: {
    addTodo(){
      if(this.newTodo.trim() === ""){
        this.error = true;
        return
      }

      this.todos.push({
        todo: this.newTodo.charAt(0).toUpperCase() + this.newTodo.slice(1),
                done: false,
      });

      this.newTodo = "";
      this.error = false;
    },
    deleteTodo(indexToRemove) {
      this.todos[indexToRemove].done = true
    } 
  }

}).mount("#app")