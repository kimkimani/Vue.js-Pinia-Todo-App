<script>
import { useTodoStore } from "@/stores/TodoStore";

export default {
  props: ['todo'],
  setup() {
    // fetching the data
    const todoStore = useTodoStore();
    return { todoStore };
  }
}
</script>

<template>
  <div class="todo">
    <h3> {{ todo.title }}</h3>
    <div>
      <i @click="todoStore.deleteTodo(todo.id)">&#10060;</i>
      <i @click="todoStore.toggleCompleted(todo.id)" :class="{ active: todo.isDone }"> &#10004; </i>
    </div>
  </div>
</template>

<style scoped>
</style>