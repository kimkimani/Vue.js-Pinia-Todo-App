import { defineStore } from "pinia";

export const useTodoStore = defineStore('TodoStore', {
    state: () => (
        {
            todos: [],
            
        }
    ),
    getters: {
        CompletedTodos() {
            return this.todos.filter((t) => t.isDone)
        },
        TotalCompleted() {
            return this.todos.reduce((prev, curr) => {
                return curr.isDone ? prev + 1 : prev
            }, 0)
        },
        Total: (state) => {
            return state.todos.length;
        }
    },
    actions: {
        getTodos() {

        },
        addTodo(todo) {
            this.todos.push(todo)

        },
        deleteTodo(id) {
            this.todos = this.todos.filter((todo) => {
                return todo.id !== id
            })

        },
        toggleCompleted(id) {
            const todo = this.todos.find(todo => todo.id === id)
            todo.isDone = !todo.isDone
        }
    },
    persist: {
        storage: localStorage,
        key: 'todos-state',
    },
})