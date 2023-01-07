<script>
import { useTodoStore } from "@/stores/TodoStore";
import TodoDetails from "./components/TodoDetails.vue";
import { ref } from "vue";
import TodoForm from "./components/TodoForm.vue";
import { storeToRefs } from "pinia";

export default {
  components: {
    TodoForm,
    TodoDetails,
  },

  setup() {

    const todoStore = useTodoStore();
    const { todos, CompletedTodos, Total, TotalCompleted } = storeToRefs(todoStore)
    todoStore.getTodos()
    const filter = ref('all');

    return { todoStore, filter, todos, CompletedTodos, Total, TotalCompleted };
  }
}
</script>

<template>
  <main>
    <header>
      <h1> Todos App </h1>
      <nav class="filter">
        <button @click="todoStore.$reset()">Reset Store</button>
        <button @click="filter = 'all'"> Available Todos</button>
        <button @click="filter = 'done'"> Done Todos</button>
      </nav>
    </header>

    <div class="todos-form">
      <TodoForm />
    </div>

    <!-- all todos -->
    <div class="todo-list" v-if="filter === 'all'">
      <p>{{ Total }} Available Todos</p>
      <div v-for="todo in todos" :key="todo.id">
        <TodoDetails :todo="todo" />
      </div>
    </div>

    <!-- done todos -->
    <div class="todo-list" v-if="filter === 'done'">
      <p> {{ TotalCompleted }} Completed Todos </p>
      <div v-for="todo in CompletedTodos" :key="todo.id">
        <TodoDetails :todo="todo" />
      </div>
    </div>
  </main>
</template>

<style scoped>
</style>
