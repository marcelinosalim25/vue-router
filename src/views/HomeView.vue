<template>
  <div class="home">
    <div v-for="todo in todos" :key="todo.id">
      <h2>{{ todo.name }}</h2>
      
    </div>
  </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore"
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
  }
}
</script>
