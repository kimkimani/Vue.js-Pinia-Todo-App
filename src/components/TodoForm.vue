
<script>
import { useTodoStore } from "../stores/TodoStore";
import { ref } from "vue";

export default {

  setup() {
    const todoStore = useTodoStore();
    const newTodo = ref("");

    function addItemAndClear() {
      
      if (newTodo.value.length > 0) {
        todoStore.addTodo({
          title: newTodo.value,
          id: Math.floor(Math.random() * 10000),
          isDone: false
        });

        newTodo.value = "";
      }
    }
    return { addItemAndClear, newTodo };
  },
};
</script>

<template>
  <form @submit.prevent="addItemAndClear">
    <input type="text" placeholder="Enter Todo" v-model="newTodo" />
    <button>New Todo</button>
  </form>
</template>