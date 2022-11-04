<template>
  <div class="home">
    <div v-for="todo in todos" :key="todo.id">
      <h2>{{ todo.name }}</h2>
      {{ todo.description }}
      <button @click="deleteTodo(todo.id)">Delete Task</button>
    </div>
  </div>
</template>

<script>
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"
import db from "../firebase"

export default {
  mounted() {
    getDocs(collection(db, "todos")).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.todos.push(doc.data());
      });
    });
  },

  data() {
    return {
      todos: [],
    }
  },

  methods: {
    deleteTodo(todoID) {
      deleteDoc(doc(db, "todos", todoID));
    }
  }
}
</script>
